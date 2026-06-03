# CB-000 — Federation Alignment

| Field | Value |
|-------|-------|
| **Document ID** | CB-000 |
| **Title** | Federation Alignment |
| **Version** | Draft 1 (Approved) |
| **Strategic significance** | High |
| **Scope** | Federation-wide |
| **Status** | Approved |

---

## Purpose

Establish architectural alignment between ChessBuddy and the Federated Continuity Architecture (FCA). Define domain identity, federation learning-chain mapping, cross-cutting layers, and the role of ChessBuddy as a validation domain — without implementation detail.

## Scope

- Federation membership rationale
- Mapping to OAT, REA, KF, WA, CTP, CTV
- Longitudinal Learning Platform contribution
- Domain concepts: ChessObservation, ChessSignal, ChessAnchor, ChessReasoning, ChessKnowledge, ChessWisdom, SkillTransformation, LearningTrace, IM-1
- Federation Learning Laboratory evaluation

**Out of scope:** Technology stack, APIs, UI, deployment.

## Assumptions

| ID | Assumption |
|----|------------|
| A-1 | Skill learning is inherently longitudinal |
| A-2 | Skill can be proxied via behaviour plus external reference (engine) |
| A-3 | LearningTrace can be abstracted without losing domain semantics |
| A-4 | IM-1 divergence is pedagogically valuable |
| A-5 | Federation domains remain autonomous; alignment is semantic |
| A-6 | Current ChessBuddy capabilities represent potential, not full federation maturity |

## Invariants

| ID | Invariant |
|----|-----------|
| I-1 | Every LearningTrace requires a time axis and at least one anchor |
| I-2 | SkillTransformation requires CTV validation |
| I-3 | ChessWisdom ≠ ChessKnowledge (normative vs descriptive) |
| I-4 | Measured State takes priority over Perceived State in CTV conflict |
| I-5 | Domain semantics are preserved in the domain layer |
| I-6 | OAT separates Observation (raw) from Attention (filtered) |

## Federation Learning Chain

```
Reality → Observation → Attention → Understanding → Knowledge → Wisdom → Stewardship → Transformation
```

### Cross-cutting mapping (ChessBuddy)

| Layer | Role in ChessBuddy |
|-------|-------------------|
| **OAT** | FEN, move log, clock; opening markers, engine hints, CP display |
| **REA** | Legality, position evaluation, opening-tree placement, ChessReasoning |
| **KF** | Opening tree, game history, consolidated patterns |
| **WA** | Engine suggestion vs human choice; pedagogically scaled guidance |
| **CTP** | Game log, device identity, LearningTrace reconstruction |
| **CTV** | Legality, FEN/log consistency, longitudinal trends, IM-1 gap |

### Domain definitions (summary)

- **Longitudinal Skill Development Domain (LSDD):** Federation domain where learning occurs through repeated skill practice over measurable time.
- **ChessObservation:** Time-stamped snapshot of position and context.
- **ChessSignal:** Learning-bearing event (move, deviation, recognition, time event).
- **ChessAnchor:** Traceable reference point in a LearningTrace.
- **ChessReasoning / ChessKnowledge / ChessWisdom:** REA, KF, and WA artefacts respectively.
- **SkillTransformation:** Measurable or inferred skill change over time.
- **LearningTrace:** Time-ordered sequence of observations, signals, anchors, and derived artefacts for one actor.
- **IM-1:** Measured State vs Perceived State at each chain stage.

## Risks

| ID | Risk | Mitigation |
|----|------|------------|
| R-1 | Over-abstraction loses chess identity | I-5 |
| R-2 | Engine treated as sole truth | ChessWisdom ≠ raw CP |
| R-3 | Perceived State inferred incorrectly | Explicit introspection where possible |
| R-4 | ChessBuddy skill ≠ all LSDDs | FLL-1 as pilot, not proof |
| R-5 | Federation collapses domains into shared UI | Semantic alignment only (A-5) |

## Opportunities

- First practical validation domain for the full learning chain (FLL-1)
- Reference LearningTrace and IM-1 instances for Generic Trace Core design
- Explicit bridges to Creator (Knowledge), Domosofi (Stewardship), BioChronos (Temporal)

## Future Research

- FR-1 Generic LearningTrace Schema (federation)
- FR-2 IM-1 Perceived State inference from behavioural signals
- FR-3 SkillTransformation metrics valid across federation
- FR-4 Inter-domain transfer (Creator → ChessBuddy)

## Recommendation

**Approve** ChessBuddy as a federation domain under **Longitudinal Skill Development Domain** and designate it as **Federation Learning Laboratory (FLL-1)** for longitudinal learning-chain validation. Proceed with CB-000A, CB-002, and CB-005.

## Related documents

- [CB-000A — Longitudinal Learning Model](CB-000A-longitudinal-learning-model.md)
- [CB-001 — Product Vision](CB-001-product-vision.md)
- [CB-002 — Longitudinal Skill Development Domain](CB-002-longitudinal-skill-development-domain.md)
