# Cadture · English Writing Templates

**Audience:** VIS students drafting for the **team wiki deliverable** (freeze copy at `2026.igem.wiki/vis`).  
**Language:** English only on final wiki pages.  
**Rules:** No invented data. Cite papers. Prefer in-wiki or Registry links (not Google Drive as “proof”).  
**Ops manual (Chinese):** `docs/STUDENT_HANDBOOK.md` · **Deploy:** `docs/DEPLOY_TO_IGEM.md`

Copy each section into a Google Doc. When ready, paste into the matching official page via GitLab.

---

## Shared style (all pages)

- Short sentences. One idea per paragraph.
- Explain jargon the first time (e.g. “DBTL = Design–Build–Test–Learn”).
- Use headings that match the outline below.
- Figures: number them (Figure 1…), add a one-sentence caption, upload to `static.igem.wiki`.
- End with **References** (consistent style, e.g. Author et al., Year, Journal).
- Honesty: “We do not have this data yet” is better than a fake number.

**Header block (optional at top of every Doc)**

```
Page: [description / engineering / human-practices / …]
Owner: [name]
Reviewer: [name]
Last updated: [YYYY-MM-DD]
Status: draft | ready for GitLab | live on wiki
```

---

## Template A — Description  
**Official URL:** `https://2026.igem.wiki/vis/description`  
**Goal:** Why Cadture exists; clear problem and goals (Bronze wiki quality).

### A1. Opening (3–5 sentences)
```
We are VIS iGEM 2026. Our project, Cadture, addresses [Pb and Cd] in [industrial wastewater / environment].
The problem matters because [health + environment in one sentence].
Our approach is [Detect → Capture → Sequestration → Removal] using synthetic biology in [chassis].
```

### A2. Inspiration
- What real-world observation or local story started the idea?
- Any prior research, news, or class project?
- Why not only chemical treatment?

**Prompt sentences:**
```
Our team became interested in heavy-metal pollution when…
In Taiwan, industrial and agricultural chains face…
We asked a systems question: how do we remove metals without…
```

### A3. The problem
Cover **both Pb and Cd** if that remains the official scope.

| Subheading | What to write |
|------------|----------------|
| What is the contaminant? | Chemistry in plain English; toxicity at low levels |
| Where does it come from? | Industry, wastewater, Taiwan context if used on home page |
| Why current solutions fail | Cost, sludge, speed, selectivity — be specific |
| Who is affected? | People, farms, ecosystems, workers |

### A4. Our solution — Cadture
Explain the pipeline without over-claiming wet-lab success:

1. **Detection** — how we identify Pb²⁺ / Cd²⁺  
2. **Capture** — how engineered proteins / cells bind ions  
3. **Sequestration** — how metals are retained safely in the biological system  
4. **Removal** — how metals leave the water stream  
5. **Clean water** — intended end state  

Optional: one simple diagram (upload later).

### A5. Project goals
Bullet list with **measurable** goals (even if not done yet):

```
- Goal 1 (lab): …
- Goal 2 (safety): …
- Goal 3 (HP / real world): …
- Non-goals (what we will not claim this year): …
```

### A6. Impact
Who benefits if it works? Limits and risks (honest).

### A7. References
```
1. Author, A. et al. (Year). Title. Journal.
```

**Length target:** 600–1200 words + figures. Clarity beats length.

---

## Template B — Engineering  
**Official URL:** `https://2026.igem.wiki/vis/engineering`  
**Medal:** Silver #1 — at least **one** full DBTL iteration.

### B0. One-sentence success claim
```
We demonstrate engineering success by completing [N] Design–Build–Test–Learn cycle(s) on [module name], which taught us [key lesson].
```

### B1. Overview diagram
- System map: which part of Cadture this cycle attacks (Detect / Capture / Sequestration / …).
- Choke point: what was broken or unknown?

### B2. Cycle 1 (required) — table form

| Stage | What we did | Evidence (figure / notebook link on wiki) |
|-------|-------------|-------------------------------------------|
| **Design** | Hypothesis + design choice + why | sketch / sequence plan |
| **Build** | What we constructed (DNA, protocol, hardware) | gel / construct map |
| **Test** | Assay, controls, conditions | plot / table |
| **Learn** | What worked, what failed, next design change | 3–5 bullets |

**Copy-paste skeleton:**

```markdown
## Cycle 1 — [short title]

### Design
Problem: …
Hypothesis: If … then …
Design choice: … because …

### Build
We built: …
Methods summary: …
Deviations from plan: …

### Test
Assay: …
Controls: …
Results (honest): …
Figure X: …

### Learn
Successes: …
Failures / surprises: …
Next design change: …
```

### B3. Cycle 2+ (recommended)
Same structure. Judges like iteration, including failed tests.

### B4. If using a Part for this criterion
Document performance on the **Registry Part page** as well; wiki should point there.

### B5. References + notebook pointers
Link to `/notebook` or `/experiments` on the **official** wiki only.

**Length target:** 1 strong cycle can be enough if clear; 2–3 cycles is better.

---

## Template C — Human Practices  
**Official URL:** `https://2026.igem.wiki/vis/human-practices`  
**Medal:** Silver #2 · also home for **Integrated HP** Special Prize if selected.

### C0. Guiding question (answer early)
```
How did we determine that Cadture is responsible and good for the world?
```

### C1. Values
```
Environmental / social / safety values we designed for: …
Communities or experts we consulted: …
```

### C2. Stakeholder map
| Stakeholder | Why they matter | How we engaged | Date |
|-------------|-----------------|----------------|------|
| e.g. wastewater engineer | real constraints | interview | |
| e.g. teacher / students | education | workshop | |
| e.g. safety officer | biosafety | checklist meeting | |

### C3. Listen → Integrate → Impact (matches official home)

For **each** major engagement:

```markdown
### Engagement: [name / org]

**Listen**
What they told us (quotes OK if permitted): …

**Integrate**
What we changed in purpose, design, experiments, or safety: …

**Impact**
What is better now (for the project or community): …
```

**Integration table (required for “integrated” quality):**

| Input from outside | Project change | Where documented |
|--------------------|----------------|------------------|
| e.g. “sludge disposal is the hard part” | shifted focus to recovery / sequestration | engineering cycle N |

### C4. Ethics, safety, dual use
- Risks of releasing engineered organisms  
- Heavy-metal lab waste  
- What we refuse to do  

### C5. Education / outreach (if any)
What, who, how many people, learning goal — **only real numbers**.

### C6. Reflection
```
What we still do not know: …
What we would do with more time: …
```

### C7. References / interview list
No private personal data (phones, home addresses). Photos need consent.

**Length target:** Quality of **integration** > number of events.

---

## Template D — Contribution (bonus, needed for Bronze)
**Official URL:** `https://2026.igem.wiki/vis/contribution`

```markdown
## What we contributed
[Tool / protocol / part documentation / dataset / education kit]

## Why future teams need this
…

## How to use it
Step-by-step …

## Limitations
…

## Links
Registry / wiki subpages / software repo on iGEM GitLab only
```

---

## Template E — Weekly lab log (feeds Notebook)
**Official path:** `/notebook`

```
Date:
People present:
Goal today:
What we did:
Raw observations:
Data file / figure:
Problems:
Tomorrow:
Safety notes:
```

Owner pastes weekly into official notebook (or one member compiles Sunday).

---

## Review checklist before GitLab commit

- [ ] English only  
- [ ] Project name **Cadture** (not the old mock name CadArmor)  
- [ ] Mentions **Pb and Cd** where scope is dual-metal  
- [ ] Solution words match official arc (Detect / Capture / Sequestration / Removal)  
- [ ] No fake efficiency %  
- [ ] Figures have captions and will be on `static.igem.wiki`  
- [ ] Citations present  
- [ ] Mentions of “our results” match `/results`  
- [ ] No “see our Google Drive” as proof  

---

## Optional: Google Doc structure (one Doc per page)

1. Title: `Cadture · Description · DRAFT`  
2. Status line  
3. Outline headings from this file  
4. Comment mode for teacher  
5. Final section: “Ready for wiki — paste target URL”  
