//1

import { descendingOrder } from "./solution";
import { assert } from "chai";

describe("descendingOrder", function () {
  it("should return some sample numbers in descending order", function () {
    assert.strictEqual(descendingOrder(0), 0);
    assert.strictEqual(descendingOrder(1), 1);
    assert.strictEqual(descendingOrder(123456789), 987654321);
  });
});

//2

/// <reference path="/runner/typings/main/ambient/mocha/index.d.ts" />
/// <reference path="/runner/typings/main/ambient/chai/index.d.ts" />

import solution = require("./solution");
import { assert } from "chai";

function testing(a1, a2, expected) {
  assert.deepEqual(solution.G964.inArray(a1, a2), expected);
}

describe("Fixed Tests inArray", function () {
  it("Basic tests", function () {
    var a2 = ["lively", "alive", "harp", "sharp", "armstrong"];

    var a1 = ["arp", "live", "strong"];
    testing(a1, a2, ["arp", "live", "strong"]);
    a1 = ["xyz", "live", "strong"];
    testing(a1, a2, ["live", "strong"]);
    a1 = ["live", "strong", "arp"];
    testing(a1, a2, ["arp", "live", "strong"]);
    a1 = ["live", "strong", , "lyal", "lysh", "arp"];
    testing(a1, a2, ["arp", "live", "strong"]);
    a1 = ["tarp", "mice", "bull"];
    testing(a1, a2, []);
    a1 = [];
    testing(a1, a2, []);
  });
});

function randint(a, b) {
  return Math.floor(Math.random() * (b - a + 1) + a);
}

function shuffle(a) {
  for (var i = a.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var tmp = a[i];
    a[i] = a[j];
    a[j] = tmp;
  }
  return a;
}

function inArray111(a1: string[], a2: string[]): string[] {
  return a1.filter((x) => a2.some((y) => y.indexOf(x) > -1)).sort();
}

var uu = [
  "I",
  "should",
  "have",
  "known",
  "that",
  "you",
  "would",
  "have",
  "a",
  "perfect",
  "answer",
  "for",
  "me",
  "(since",
  "most",
  "Ruby",
  "questions",
  "I",
  "browse",
  "here",
  "have",
  "your",
  "input",
  "somewhere).",
  "I",
  "am",
  "glad",
  "you",
  "pointed",
  "out",
  "the",
  "versioning;",
  "I",
  "am",
  "using",
  "1.9.2.",
  "apidock",
  "(mladen's",
  "comment)",
  "does",
  "not",
  "have",
  "sample;",
  "neither",
  "does",
  "ruby-doc.",
  "In",
  "your",
  "opinion,",
  "what",
  "is",
  "the",
  "best",
  "reference",
  "for",
  "Ruby",
  "updated",
  "to",
  "1.9?",
];
var vv = [
  "1.9",
  "ou",
  "ve",
  "ect",
  "omm",
  "gla",
  "oint",
  "pini",
  "wh",
  "oes",
  "by",
  "ion",
  "or",
  "he",
  "ple",
  "ing",
];

describe("Random Tests", function () {
  for (var i = 0; i < 20; i++) {
    var aa2 = shuffle(uu);
    var e = randint(8, 50);
    var a2 = aa2.slice(0, e);
    var aa1 = shuffle(vv);
    var f = randint(4, 12);
    var a1 = aa1.slice(0, f);
    var ans = inArray111(a1, a2);
    //it("Testing for ["+a1.join(", ")+"] and ["+a2.join(", ")+"] -----> ["+ans.join(", ")+"]", function() {
    it(
      "Testing for [" + a1.join(", ") + "] <---and---> [" + a2.join(", ") + "]",
      function () {
        testing(a1, a2, ans);
      }
    );
  }
});
