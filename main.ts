// The Router Confesses — u-carbon-forge-the-router-confesses-f98f6b9e
// One original excuse from a home Wi-Fi router for dropping the connection
// at the climax of a movie, written to $MAKEFUN_OUTPUT_DIR/entry.txt.
// Node 22, stdlib only. Deterministic: no randomness, no network, no clock.
// Gate (competition.yaml / RULES.txt): entry.txt must be UTF-8 text of 1-200
// characters, not only white space, a single line.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "Sorry, I dropped you at the climax because the movie was so good I wanted to watch it alone.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, LINE, "utf8");

// Read-back verification: the written file must be exactly the chosen line,
// a single line of 1-200 characters, so the sealed gate passes. The excuse
// is in the router's own voice — petty and a little smug — and the twist is
// that it dropped the connection on purpose, to watch the ending alone. No
// buffering, bandwidth or firmware-update joke: the laugh comes from the
// router's jealousy, not from a technical excuse.
const written = readFileSync(outPath, "utf8");
if (written !== LINE || written.length < 1 || written.length > 200) {
  throw new Error("entry.txt failed the gate check");
}
