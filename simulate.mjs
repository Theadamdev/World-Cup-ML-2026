#!/usr/bin/env node

import { readFileSync } from "node:fs";
import { sampleMatch } from "./elo.mjs";

// Load Elo ratings
const { ratings } = JSON.parse(
  readFileSync(
    new URL("./data/elo-calibrated.json", import.meta.url),
    "utf8"
  )
);

// Read command-line arguments
const [teamA, teamB, simulations = "10000"] = process.argv.slice(2);

// Check arguments
if (!teamA || !teamB) {
  console.log("Usage: node simulate.mjs <teamA> <teamB> [simulations]");
  process.exit(0);
}

// Check teams exist
const ratingA = ratings[teamA];
const ratingB = ratings[teamB];

if (ratingA == null || ratingB == null) {
  console.log("Unknown team.");
  process.exit(1);
}

// Number of simulations
const totalSimulations = Number(simulations);

// Counters
let teamAWins = 0;
let teamBWins = 0;
let draws = 0;

let totalGoalsA = 0;
let totalGoalsB = 0;

const scoreCounts = {};

// Run simulations
for (let i = 0; i < totalSimulations; i++) {
  const result = sampleMatch(ratingA, ratingB);

  totalGoalsA += result.goalsA;
  totalGoalsB += result.goalsB;

  if (result.goalsA > result.goalsB) {
    teamAWins++;
  } else if (result.goalsB > result.goalsA) {
    teamBWins++;
  } else {
    draws++;
  }

  const score = `${result.goalsA}-${result.goalsB}`;
  scoreCounts[score] = (scoreCounts[score] || 0) + 1;
}

// Find the 5 most common scores
const mostCommonScores = Object.entries(scoreCounts)
  .sort((a, b) => b[1] - a[1])
  .slice(0, 5);

// Print results
console.log(`\nRunning ${totalSimulations.toLocaleString()} simulations...\n`);

console.log(
  `${teamA} wins: ${teamAWins} (${(
    (teamAWins / totalSimulations) *
    100
  ).toFixed(1)}%)`
);

console.log(
  `Draws: ${draws} (${((draws / totalSimulations) * 100).toFixed(1)}%)`
);

console.log(
  `${teamB} wins: ${teamBWins} (${(
    (teamBWins / totalSimulations) *
    100
  ).toFixed(1)}%)`
);

console.log("\nAverage score:");
console.log(
  `${teamA}: ${(totalGoalsA / totalSimulations).toFixed(2)}`
);
console.log(
  `${teamB}: ${(totalGoalsB / totalSimulations).toFixed(2)}`
);

console.log("\nMost common scores:");

for (const [score, count] of mostCommonScores) {
  console.log(`${score} (${count})`);
}