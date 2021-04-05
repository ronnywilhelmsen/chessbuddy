import type { Fen, ShortMove } from './rules';
import { Player } from './player';

export type UninitialisedBot = () => InitialisedBot;
export type InitialisedBot = (fen: Fen) => Promise<ShortMove>;
export type Resolver = (move: ShortMove) => void;

export class UCI_ENGINE {
  name: string;
  path: string;
  constructor(name: string, path: string) {
    this.name = name;
    this.path = path;
  }
}
export const UCI_ENGINES: UCI_ENGINE[] = [
  new UCI_ENGINE('Stockfish', 'bots/stockfish.js-10.0.2/stockfish.js'),
  new UCI_ENGINE('Lozza', 'bots/lozza-1.18/lozza.js'),
];

export class Bot extends Player {
  type: UCI_ENGINE = UCI_ENGINES[0];
  skill: number;
  time?: number;
  depth?: number;
  engine: UninitialisedBot;
  instance?: InitialisedBot;
  isRunning = false;

  constructor(engine: string, skill: number, time?: number, depth?: number) {
    super(`${engine} skill=${skill} ` + (time ? ` time=${time}` : `depth=${depth}`));
    const type = UCI_ENGINES.find(x => x.name == engine) as UCI_ENGINE;
    this.type = type;
    this.skill = skill;
    this.time = time;
    this.depth = depth;
    const options = [`setoption name Skill Level value ${skill}`];
    options.push(time ? `go movetime ${time}000` : `go depth ${depth}`);
    this.engine = uciWorker(type.path, options);
  }

  runBot = (fen: string, resolver: Resolver) => {
    if (!this.isRunning) {
      if (!this.instance) this.instance = this.engine();
      this.isRunning = true;
      this.instance(fen).then(move => {
        resolver(move);
        this.isRunning = false;
      });
    }
  };
  toString = () => `Bot:${this.type.name}:${this.skill}:${this.time ?? ''}:${this.depth ?? ''}`;
}

const uciWorker = (file: string, actions: Array<string>): UninitialisedBot => () => {
  const worker = new Worker(file);
  let resolver: Resolver | null = null;

  worker.addEventListener('message', e => {
    const move = e.data.match(/^bestmove\s([a-h][1-8])([a-h][1-8])/);
    if (move && resolver) {
      resolver({ from: move[1], to: move[2] });
      resolver = null;
    }
  });

  return fen =>
    new Promise((resolve, reject) => {
      if (resolver) {
        reject('Pending move is present');
        return;
      }

      resolver = resolve;
      worker.postMessage(`position fen ${fen}`);
      actions.forEach(action => worker.postMessage(action));
    });
};

export type HelperReturn = { moves: string[]; cp: number };
export type HelpResolver = (ret: HelperReturn) => void;
type UninitialisedHelper = () => InitialisedHelper;
type InitialisedHelper = (fen: Fen) => Promise<HelperReturn>;

const helpWorker = (): UninitialisedHelper => () => {
  const worker = new Worker(UCI_ENGINES[0].path);
  let resolver: HelpResolver | null = null;
  let cp = 0;
  let moves: string[] = [];

  worker.addEventListener('message', e => {
    //    console.log(e.data);
    const s = e.data.split(' ') as string[];
    const i1 = s.indexOf('cp');
    const i2 = s.indexOf('pv');
    if (s[0] == 'info' && i1 && i2) {
      cp = Number.parseInt(s[i1 + 1]);
      const pv = s[i2 + 1];
      const pv1 = pv.substring(0, 2);
      const pv2 = pv.substring(2, 4);
      moves.push(pv1, pv2);
    }
    if (s[0] == 'bestmove' && resolver) {
      resolver({
        moves: [...new Set(moves.reverse())],
        cp: cp,
      });
      moves = [];
      resolver = null;
    }
  });

  return fen =>
    new Promise((resolve, reject) => {
      if (resolver) {
        reject('Pending move is present');
        return;
      }
      resolver = resolve;
      worker.postMessage(`position fen ${fen}`);
      worker.postMessage(`setoption name Skill Level value 20`);
      worker.postMessage(`go movetime 1000`);
    });
};

class Helper {
  instance: InitialisedHelper;
  isRunning = false;
  constructor() {
    this.instance = helpWorker()();
  }

  run = (fen: string, resolver: HelpResolver) => {
    if (!this.isRunning) {
      this.isRunning = true;
      this.instance(fen).then(ret => {
        resolver(ret);
        this.isRunning = false;
      });
    }
  };
}

export const helper = new Helper();
