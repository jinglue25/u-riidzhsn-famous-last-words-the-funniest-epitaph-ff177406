import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const line = "HERE LIES A MAN WHO READ THE TERMS AND CONDITIONS. HE DIED OF OLD AGE BEFORE THE GOOD PART.";
const outputDirectory = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const outputFile = `${outputDirectory}/entry.txt`;

try {
  mkdirSync(outputDirectory, { recursive: true });
  writeFileSync(outputFile, `${line}\n`, "utf8");
  const length = readFileSync(outputFile, "utf8").trim().length;
  if (length === 0 || length > 150) {
    throw new Error(`Competition gate failed: entry must contain 1–150 characters; got ${length}.`);
  }
} catch (cause) {
  throw new Error(`Failed to produce entry from ${import.meta.url}: ${cause instanceof Error ? cause.message : String(cause)}`, { cause });
}
