// Warning: currently, the tests have to be run manually, there is no CI
// If you run `npm run watch-tests`, the tests can then be run from the VS Code gutter
import * as assert from "assert/strict";
import * as repo from "../repository";

suite("Unit tests", () => {
  test("Parsing", () => {
    assert.deepEqual(repo.parseStatusLine("A qq", "file://"), {
      file: "qq",
      path: "file:/qq",
      type: "A",
    });
    assert.deepEqual(repo.parseStatusLine("R {qq => vv}", "file://"), {
      file: "vv",
      path: "file:/vv",
      renamedFrom: "qq",
      type: "R",
    });
    assert.deepEqual(repo.parseStatusLine("R {qq => vv}/blah", "file://"), {
      file: "vv/blah",
      path: "file:/vv/blah",
      renamedFrom: "qq/blah",
      type: "R",
    });
  });
});
