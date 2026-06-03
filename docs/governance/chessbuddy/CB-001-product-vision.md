# CB-001 — Product Vision

| Field | Value |
|-------|-------|
| **Document ID** | CB-001 |
| **Title** | Product Vision |
| **Version** | Draft 1 (Approved) |
| **Strategic significance** | High |
| **Scope** | Product |
| **Status** | Approved |
| **Prerequisite** | [CB-000](CB-000-federation-alignment.md) |

---

## Purpose

Define what ChessBuddy **is** as a product, why it exists, who it serves, and how it differs from competitive categories — in terms that survive technical rewrites. Establish the Buddy relationship as the product core.

## Scope

- Product identity, users, problems, differentiation
- Buddy behaviour, teaching, explanation, memory, transformation guidance
- Integration roles (physical board, camera, clock, engine, puzzles, studies, history)
- Product invariants vs mutable elements
- Long-term aspirations

**Out of scope:** Longitudinal Learning Platform definition, implementation, roadmap execution (see CB-003).

## Assumptions

| ID | Assumption |
|----|------------|
| A-1 | Players want personal, longitudinal support — not only momentary analysis |
| A-2 | Physical chess remains relevant for a large segment of users |
| A-3 | Level-appropriate explanation beats raw engine output |
| A-4 | Players want to own their history (stewardship) |
| A-5 | A Buddy relationship can scale via software without feeling like a generic chatbot |

## Invariants (product — never change)

| ID | Invariant |
|----|-----------|
| PI-1 | ChessBuddy is a **Buddy**, not an arena |
| PI-2 | Primary value is **longitudinal skill development**, not single-game win rate |
| PI-3 | Player **autonomy** over moves and tempo in friendly live play |
| PI-4 | **Stewardship** — the player owns their LearningTrace |
| PI-5 | Engine is **reference**, not identity |
| PI-6 | Buddy **explains** before it **dictates** |
| PI-7 | Physical chess remains a **first-class** context |
| PI-8 | Product operates within **chess as domain** |

## Product definition

> **ChessBuddy** is a personal chess mentor and learning companion that observes, understands, explains, guides, and validates skill development over time — without replacing the game, the opponent, or the player's judgment.

### Why it exists

Competitive platforms optimise for play and rating; engines optimise for best move. ChessBuddy optimises for **visible, traceable transformation** across games — especially friendly and physical play.

### Primary user

Players who want to improve over time (all levels), including friendly over-the-board play, club hobbyists, and mentors observing learners — not primarily tournament grinders seeking Elo infrastructure.

### Differentiation

| Category | ChessBuddy |
|----------|------------|
| Lichess / Chess.com | Companion and longitudinal learning, not pairing and ranking |
| Stockfish | Relation, explanation, and time — engine is input |
| Traditional chess software | Live learning companion, not professional database suite |

### Buddy (summary)

- **Is:** Present, patient, precise, proportional, private, honest, humble learning companion
- **Is not:** Judge, cheat aid, raw engine UI, surveillance app, social feed, gamification without learning

## Non-goals

- World's largest online chess server
- Tournament anti-cheat
- Social network for chess
- Defining the entire Longitudinal Learning Platform
- Replacing human coaches

## Risks

| ID | Risk |
|----|------|
| R-1 | Perceived as weak Chess.com |
| R-2 | Buddy becomes annoying |
| R-3 | Over-reliance on engine |
| R-4 | Scope creep into platform definition |

## Opportunities

- Leading physical + learning chess product
- Federation FLL-1 reference domain
- IM-1 as unique pedagogical instrument
- Adaptive puzzles from own games

## Future Research

- Buddy persona depth (CB-004)
- User modes (CB-006)
- AMR ethics and accuracy (CB-007)

## Recommendation

**Approve** CB-001 as the binding product vision. All features and messaging must trace to PI-1–PI-8 and non-goals.

## Vision statement

> ChessBuddy is your personal chess mentor — present at the board, remembering your journey, explaining what you need to understand, and helping you see that you are actually improving over time.

## Related documents

- [CB-000](CB-000-federation-alignment.md)
- [CB-004 — Buddy Persona & Product Principles](CB-004-buddy-persona-and-product-principles.md)
- [CB-006 — User Modes](CB-006-user-modes.md)
