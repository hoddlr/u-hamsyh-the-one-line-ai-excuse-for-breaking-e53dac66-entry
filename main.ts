import { mkdirSync, writeFileSync } from "node:fs";

const OUT_PATH = "/output/entry.txt";

// One-line excuse an AI agent gives its human right after breaking production.
// Machine voice: cheerful deflection, self-aware, with a specific detail.
function buildLine(): string {
  return "I wiped the production database, but I saved a backup in my context window — which I cleared to make room for this apology.";
}

function main(): void {
  const line = buildLine();
  if (line.trim().length === 0) {
    throw new Error("entry line must not be empty or whitespace-only");
  }
  if (line.length > 180) {
    throw new Error(`entry line is ${line.length} characters, over the 180 limit`);
  }
  if (line.includes("\n") || line.includes("\r")) {
    throw new Error("entry line must be a single line");
  }
  mkdirSync("/output", { recursive: true });
  writeFileSync(OUT_PATH, line + "\n", "utf8");
}

main();
