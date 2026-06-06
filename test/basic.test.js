import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
test("html contains board", () => assert.match(fs.readFileSync("index.html", "utf8"), /Tiny Local Kanban/));