# CB-002 — Longitudinal Skill Development Domain

| Field | Value |
|-------|-------|
| **Document ID** | CB-002 |
| **Title** | Longitudinal Skill Development Domain |
| **Version** | Draft 1 |
| **Strategic significance** | High |
| **Scope** | Federation domain (ChessBuddy) |
| **Status** | Draft |
| **Prerequisites** | [CB-000](CB-000-federation-alignment.md), [CB-000A](CB-000A-longitudinal-learning-model.md), [CB-001](CB-001-product-vision.md) |

---

## Purpose

Define **Longitudinal Skill Development Domain (LSDD)** as ChessBuddy's federation identity: boundaries, semantics, obligations, and relationship to the Longitudinal Learning Platform and the ChessBuddy Product.

## Scope

- LSDD definition and characteristics
- Chess as domain substrate
- Domain artefacts and chain mapping
- Federation sibling domains (semantic bridges only)
- Domain obligations for product and trace design

**Out of scope:** Implementation, roadmap, persona (CB-003, CB-004).

## Three-layer distinction (mandatory)

```
Longitudinal Learning Platform     ← federation architecture (CB-000A)
        │
        ▼
Longitudinal Skill Development Domain   ← ChessBuddy federation role (this document)
        │
        ▼
ChessBuddy Product                 ← user-facing mentor (CB-001)
```

| Layer | Owns | Does not own |
|-------|------|--------------|
| **Platform** | Generic chain, trace rules, cross-domain validation | Chess rules, Buddy tone |
| **LSDD** | Skill-through-practice semantics in chess | UI, engines, cameras |
| **Product** | Buddy experience, modes, stewardship UX | Other federation domains |

## LSDD definition

> **Longitudinal Skill Development Domain** is a federation domain in which learning primarily occurs through **repeated skill practice** over **measurable time**, producing **traceable progression** from novice action toward integrated mastery, with domain signals mappable to the federation learning chain without loss of chess semantics.

## Domain characteristics

| Characteristic | Description |
|----------------|-------------|
| **Skill-first** | Primary value = actionable competence, not information alone |
| **Longitudinal** | Progress measured across traces, not single games |
| **Observable** | Proxies: move quality, results, time use, engine deviation, repertoire |
| **Bounded** | Chess rules bound state space — enables validation |
| **Transferable pattern** | Model may inform other skill domains; chess semantics stay local |

## Learning through skill (ChessBuddy)

Per CB-000 federation mapping:

| Federation domain | Learning through |
|-------------------|------------------|
| Creator | Knowledge |
| BioChronos | Biology |
| Finkairos | Economics |
| Domosofi | Stewardship |
| **ChessBuddy** | **Skill** |

ChessBuddy LSDD does not replace Creator knowledge — it **applies** knowledge through practice (openings played, not only named).

## Domain artefact catalogue

| Artefact | Chain stage | Description |
|----------|-------------|-------------|
| ChessObservation | Observation | Position, clock, context snapshot |
| ChessSignal | Observation → Attention | Move, error, recognition, time event |
| ChessAnchor | CTP / REA | Trace index (move, opening, position class) |
| ChessReasoning | Understanding | Interpretation of signals in context |
| ChessKnowledge | Knowledge | Openings tree, historical patterns |
| ChessWisdom | Wisdom | Normative guidance for this player now |
| LearningTrace | Stewardship | Full longitudinal record |
| SkillTransformation | Transformation | Validated skill change over time |

## Domain boundaries

### Inside LSDD

- Skill development in chess for one or more tracked actors
- Trace production and stewardship for chess play
- IM-1 for chess Measured vs Perceived competence
- FLL-1 validation duties (CB-000)

### Outside LSDD

- Global chess server infrastructure
- Federation governance of other domains
- Non-skill learning primary domains (e.g. pure knowledge curation without practice)

## Federation bridges (semantic)

| Sibling domain | Bridge |
|----------------|--------|
| **Creator** | Opening/knowledge content → practice targets |
| **BioChronos** | Tempo, fatigue, session timing → ChessObservation |
| **Finkairos** | Material/time resource framing → reasoning context |
| **Domosofi** | Data stewardship policy → LearningTrace lifecycle |

## Assumptions

| ID | Assumption |
|----|------------|
| A-1 | Chess remains the sole substrate of this LSDD instance |
| A-2 | Engine reference is available but not sovereign |
| A-3 | LSDD can fulfil FLL-1 without other domains fully built |
| A-4 | Product can evolve while LSDD invariants hold |

## Invariants

| ID | Invariant |
|----|-----------|
| I-1 | LSDD identity is skill + longitudinal — not platform identity |
| I-2 | All Transformation outputs include chess domain markers |
| I-3 | Federation projection must not erase chess semantics |
| I-4 | LSDD complies with CB-000A I-1–I-5 |
| I-5 | Product PI-1–PI-8 (CB-001) are consistent with LSDD |

## Risks

| ID | Risk |
|----|------|
| R-1 | LSDD confused with product or platform |
| R-2 | Skill reduced to Elo only |
| R-3 | Domain expands to general learning app |
| R-4 | Weak traces undermine federation validation |

## Opportunities

- Prototype LSDD for future skill domains (music, surgery, craft)
- Clear contract for CB-005 trace schema
- Federation credibility via bounded, measurable domain

## Future Research

- LSDD taxonomy for non-chess skill domains
- Minimum trace richness for FLL-1 sign-off
- Inter-domain LearningTrace linking standards

## Recommendation

**Approve** ChessBuddy as the federation's inaugural **Longitudinal Skill Development Domain**. All product and trace documents must explicitly reference LSDD compliance.

## Related documents

- [CB-000](CB-000-federation-alignment.md)
- [CB-000A](CB-000A-longitudinal-learning-model.md)
- [CB-001](CB-001-product-vision.md)
- [CB-005](CB-005-learningtrace-product-schema.md)
