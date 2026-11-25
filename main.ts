import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The commit message, built as one chain so the night's regress reads
// in order: each hour's fix contains the next hour's bug.
const LINE = [
  "fix: the bug at 4am was inside the fix from 3am,",
  "which fixed the bug from 2am,",
  "which I wrote at 1am fixing the bug from midnight",
].join(" ");

const outputDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), LINE, "utf8");
