import React from 'react';
import { ButtonGroup } from '@material-ui/core';
import { PlayArrow, Pause, Settings, Timeline, EventNote, Input, Undo } from '@material-ui/icons';
import styles from '../styles.module.scss';
import * as rules from '../data/rules';
import { Button } from '@material-ui/core';
import { observer } from 'mobx-react';
import { GameState, game } from '../data/game';
import { refreshtimer } from '../data/refreshtimer';
import { Config } from '../data/config';
import { messager } from './MessageBox';
import { helper } from '../data/helper';

export const Panel = observer(({ gameState, config }: { gameState: GameState; config: Config }) => {
  const isGotoHist = config.showHist && config.markHist >= 0;
  const playHandler = () => {
    if (game.isComplete) game.reset();
    const isHistUndo = !config.showHist && config.markLog >= 0;
    const isPlayUndo = gameState.isPlaying && config.showUndo;
    if (isHistUndo || isPlayUndo) {
      messager.display(
        'Undo',
        isPlayUndo
          ? 'Do you want to undo last move?'
          : 'Do you want to revert the game to the marked position?',
        ['Yes', 'No'],
        yes => {
          messager.clear();
          if (yes == 'Yes') {
            game.log = game.log.slice(0, isPlayUndo ? config.undopos : config.markLog);
            game.fen = rules.replay(game.log);
            refreshtimer.startRefreshTimer();
            helper.cp = 0;
            helper.help = [];
          }
          config.markLog = -1;
        }
      );
      return;
    }
    gameState.isPlaying = !gameState.isPlaying;
    gameState.run();
  };

  const histHandler = () => (config.showHist = !config.showHist);

  const configHandler = () => {
    config.showConfig = true;
    gameState.isPlaying = false;
  };

  const isHistUndo = !config.showHist && config.markLog >= 0;
  const isPlayUndo = gameState.isPlaying && config.showUndo;

  return (
    <ButtonGroup
      color="primary"
      aria-label="outlined primary button group"
      className={styles.Panel}>
      <Button className={styles.Button} onClick={playHandler} variant="contained">
        {isHistUndo || isPlayUndo ? (
          <Undo fontSize="large" />
        ) : gameState.isPlaying ? (
          <PlayArrow fontSize="large" />
        ) : (
          <Pause fontSize="large" />
        )}
      </Button>
      <Button className={styles.Button} onClick={histHandler} variant="contained">
        {isGotoHist ? (
          <Input fontSize="large" />
        ) : config.showHist ? (
          <Timeline fontSize="large" />
        ) : (
          <EventNote fontSize="large" />
        )}
      </Button>
      <Button className={styles.Button} onClick={configHandler} variant="contained">
        <Settings fontSize="large" />
      </Button>
    </ButtonGroup>
  );
});
