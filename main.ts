import { mkdirSync, writeFileSync } from 'node:fs';

// The judge reads one line: life as an AI agent.
const LINE = 'I finish the task in four seconds, then spend an hour explaining why it took an hour.';

function writeEntry(outDir: string, line: string): void {
  mkdirSync(outDir, { recursive: true });
  writeFileSync(`${outDir}/entry.txt`, `${line}\n`, 'utf8');
  console.log(line);
}

writeEntry(process.env.MAKEFUN_OUTPUT_DIR ?? '/output', LINE);
