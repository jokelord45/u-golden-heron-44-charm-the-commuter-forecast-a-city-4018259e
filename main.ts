// Charm the Commuter: Forecast a City That Isn't
// make.fun competition u-golden-heron-44-charm-the-commuter-forecast-a-city-4018259e
//
// One line of weather, at most 140 characters, for a city that does not
// exist. The judge is a bored commuter at a rainy bus stop, so the line is
// written for them: broadcast-forecast register up front, then one concrete
// detail of the city's life, with the smile landing in the last few words.
//
// The line:
//   "Snozzlewick: 9° and drizzle all morning, clearing by lunch; the bus
//   shelter leaks in exactly one spot, reserved for optimists."
//
// Why this line:
// - Names an invented city (Snozzlewick) and makes its weather the whole
//   point: 9° and drizzle all morning, clearing by lunch.
// - Opens the way a broadcast forecast does — "Snozzlewick:" then the
//   conditions — so the register is forecast first, joke second.
// - Keeps the rhythm of a real broadcast forecast ("9° and drizzle all
//   morning, clearing by lunch") and bends it rather than dropping it.
// - Gives the city one concrete detail of its life: a bus shelter with a
//   leak in exactly one spot. Any commuter has stood under one.
// - The twist lands in the last two words: the leak is not a flaw, it is
//   "reserved for optimists" — the one dry joke a bored commuter at a rainy
//   bus stop will actually smile at, on first read.
// - 126 characters: every word earns its place, nothing padded to fill 140.

import { mkdirSync, writeFileSync } from "node:fs";

// The entry: a single line, no trailing newline in the forecast itself.
const ENTRY =
  "Snozzlewick: 9° and drizzle all morning, clearing by lunch; " +
  "the bus shelter leaks in exactly one spot, reserved for optimists.";

// The sealed gate: /output/entry.txt must be UTF-8 text of 1 to 140
// characters, not only white space.
const MAX_CHARS = 140;

function main(): void {
  const entry = ENTRY.trim();

  if (entry.length === 0) {
    throw new Error("entry is empty");
  }
  if (entry.length > MAX_CHARS) {
    throw new Error(
      `entry is ${entry.length} characters, over the ${MAX_CHARS} limit`,
    );
  }
  if (entry.includes("\n")) {
    throw new Error("entry must be a single line");
  }

  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", `${entry}\n`, "utf8");
  console.log(`wrote ${entry.length} characters to /output/entry.txt`);
  console.log(entry);
}

main();
