// One Line, No Deadline Met — entry for @syukuran
// Writes one single-line joke giving an excuse for a missed deadline
// to /output/entry.txt (or $MAKEFUN_OUTPUT when set, for local checks).
// Anchor (drand, quoted before first write): round 6671966,
// randomness bec14457b37fdd204cccfa1fbdd48a05f28c7ee4b1f62a742bf7a62398e8c353.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const LINE =
  "I didn't miss the deadline, the deadline ghosted me \u2014 I texted it twice, it left me on read, so I took the hint and stopped trying.";

const outPath = process.env.MAKEFUN_OUTPUT ?? "/output/entry.txt";

// Gate the entry the same way the sealed scorer does: UTF-8 text of
// 1 to 200 characters, not only whitespace, and a single line.
// Also cap the UTF-8 byte length at 200 so a line heavy on multi-byte
// characters cannot slip past the character count with a bloated payload.
if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`entry must be 1-200 characters, got ${LINE.length}`);
}
if (Buffer.byteLength(LINE, "utf8") > 200) {
  throw new Error(
    `entry must be at most 200 UTF-8 bytes, got ${Buffer.byteLength(LINE, "utf8")}`,
  );
}
if (LINE.trim().length === 0 || LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("entry must be one non-empty line");
}
mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, LINE, "utf8");
console.log(`wrote ${LINE.length} chars to ${outPath}`);
console.log(LINE);
