# Live Football World Cup Score Board Library

## Overview

This library provides an in-memory store for live football match scoreboard. Main functionality includes: set up scoreboard, start new match, update scores, finish matches, and retrieve summaries sorted by scores and start times.

## How to use

### Importing and Initializing

Import the `Scoreboard` class and use its methods to manage the live World Cup scoreboard.

```typescript
import { Scoreboard } from "./src/controllers/scoreboard";

const scoreboard = new Scoreboard();
```

## Methods

### startMatch

**Description**: Start a new match with an initial score of 0-0 and add it to the scoreboard.

```typescript
const matchId = scoreboard.startMatch("Brazil", "Argentina");
```

### updateScore

**Description**: Update the score of a match in progress.

```typescript
scoreboard.updateScore(matchId, 1, 0);
```

### finishMatch

**Description**: Finish match currently in progress and remove it from the scoreboard.

```typescript
scoreboard.finishMatch(matchId);
```

### getSummary

**Description**: Get a summary of all ongoing matches ordered by total score. In case matches have the same total score, they are sorted in descending order by start time.

```typescript
const matchSummary = scoreboard.getSummary();
```

## Assumptions

### **Match Total Score Calculation**:

- Total score is calculated by addition of home and away scores.

### **Sorting Matches**:

- The matches with the same total score will be returned ordered by the most recently started match in the scoreboard.
