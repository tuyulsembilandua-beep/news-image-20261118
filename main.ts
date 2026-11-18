// The World in One Image — 18 November 2026 (Node 22, standard library only).
// The entry image is the entry.png beside this file; this program copies it
// to /output/entry.png. Outside the grader's container, MAKEFUN_OUTPUT_DIR
// stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

// Make sure the output directory exists, then copy the image there.
// The copy is byte-for-byte, so repeated runs are deterministic.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
copyFileSync(new URL('./entry.png', import.meta.url), join(outDir, 'entry.png'));
