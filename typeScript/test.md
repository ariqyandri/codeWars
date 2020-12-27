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
return Math.floor(Math.random() \* (b - a + 1) + a);
}

function shuffle(a) {
for (var i = a.length - 1; i > 0; i--) {
var j = Math.floor(Math.random() \* (i + 1));
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

// 3
/// <reference path="/runner/typings/mocha/index.d.ts" />
/// <reference path="/runner/typings/chai/index.d.ts" />
import solution = require('./solution');
import {assert} from "chai";

describe("spinWords", function(){
it("should pass some fixed tests", function() {
assert.strictEqual(solution.Kata.spinWords("Raw Danger is best PS2 game"), "Raw regnaD is best PS2 game");
assert.strictEqual(solution.Kata.spinWords("Welcome"), "emocleW");
assert.strictEqual(solution.Kata.spinWords("Hey fellow warriors"), "Hey wollef sroirraw");
assert.strictEqual(solution.Kata.spinWords("This is a test"), "This is a test");
assert.strictEqual(solution.Kata.spinWords("This is another test"), "This is rehtona test");
assert.strictEqual(solution.Kata.spinWords("This sentence is a sentence"), "This ecnetnes is a ecnetnes");
assert.strictEqual(solution.Kata.spinWords("You are almost to the last test"), "You are tsomla to the last test");
assert.strictEqual(solution.Kata.spinWords("Just kidding there is still one more"), "Just gniddik ereht is llits one more");
assert.strictEqual(solution.Kata.spinWords("Oh wait shoot there are still the random tests sorry for misleading you"), "Oh wait toohs ereht are llits the modnar stset yrros for gnidaelsim you");
});

it("should pass some random tests", function() {
const generateWord = () => Array.apply(null, new Array(~~(Math.random() \* 11))).map(\_ => String.fromCharCode(~~(Math.random() \* 26) + 97)).join("");

    for (let i = 0; i < 100; ++i) {
      let words = Array.apply(null, new Array(~~(Math.random() * 20) + 2)).map(_ => generateWord()).filter(v => v.length !== 0).join(" ");

      let actual = solution.Kata.spinWords(words);
      let expected = words.split(" ").map(v => v.length >= 5 ? v.split("").reverse().join("") : v).join(" ");

      assert.strictEqual(actual, expected);
    }

});
});

//4
// See https://www.chaijs.com for how to use Chai.
import { assert } from "chai";

import { duplicateEncode } from "./solution";

// TODO Add your tests here
describe("Duplicate Encoder", function() {
it("Basic tests:", function() {
assert.strictEqual(duplicateEncode("din"),"(((");
assert.strictEqual(duplicateEncode("recede"),"()()()");
assert.strictEqual(duplicateEncode("Success"),")())())","should ignore case");
assert.strictEqual(duplicateEncode("CodeWarrior"),"()(((())())");
assert.strictEqual(duplicateEncode("Supralapsarian"),")()))()))))()(","should ignore case");
assert.strictEqual(duplicateEncode("iiiiii"),"))))))","duplicate-only-string")
});

it("Tests with '(' and ')'", function() {
assert.strictEqual(duplicateEncode("(( @"),"))((");
assert.strictEqual(duplicateEncode(" ( ( )"),")))))(")
})

it("And now... some random tests !", function() {
var rndEncode = function(){
var chars = "abcdeFGHIJklmnOPQRSTuvwxyz() @!".split('').sort(function(){return (Math.random()>.5)? 1:-1}).join('');
var enc = "", src = "", count = 0, len = 10+~~(Math.random()\*10), dup = chars[chars.length-1];
for(var c=0; c<len; c++){
if(Math.random()>.5){
enc += "(";
src += chars[c];
}else{
enc += ")";
src += dup;
count++;
}
}
// Chrono79's intent to fix the random quirk  
 // It happened because the duplicate char was inserted only once so it wasn't a duplicate at all.  
 // So I add it once more to fix it
if (count === 1) {
enc += ")";
src += dup;
}  
 return {src:src, res:enc}
}

var t = 5;
while(t--){
var tst = rndEncode();
assert.strictEqual(duplicateEncode(tst.src),tst.res,"should encode '"+tst.src+"'")
}
})
});

//5
/// <reference path="/runner/typings/mocha/index.d.ts" />
/// <reference path="/runner/typings/chai/index.d.ts" />
import solution = require('./solution');

import {assert} from "chai";

describe("solution", function(){
it("Basic Tests", function() {
assert.equal(solution.SeriesSum(1), "1.00");
assert.equal(solution.SeriesSum(2), "1.25");
assert.equal(solution.SeriesSum(3), "1.39");
assert.equal(solution.SeriesSum(4), "1.49");
assert.equal(solution.SeriesSum(5), "1.57")
assert.equal(solution.SeriesSum(6), "1.63")
assert.equal(solution.SeriesSum(7), "1.68")
assert.equal(solution.SeriesSum(8), "1.73")
assert.equal(solution.SeriesSum(9), "1.77")
assert.equal(solution.SeriesSum(15), "1.94")
assert.equal(solution.SeriesSum(39), "2.26")
assert.equal(solution.SeriesSum(58), "2.40")
assert.equal(solution.SeriesSum(0), "0.00")
});

it("Random Tests", function() {
function randInt(min, max) {
return Math.floor(min + Math.random() \* max);
}

    function SSSolution(n)
    {
      var dn = 1 + (n-1)*3;
      var sum=0;
      var term;
      for( var i=1; i<=dn; i+=3)
      {
        term = 1/i;
        sum+=term;
      }
      return sum.toFixed(2);
    }

    for(var i = 0; i < 37; i++) {
      var n = randInt(0,250);
      assert.equal(solution.SeriesSum(n), SSSolution(n));
    }

});
});

//6
/// <reference path="/runner/typings/main/ambient/mocha/index.d.ts" />
/// <reference path="/runner/typings/main/ambient/chai/index.d.ts" />
import solution = require('./solution');
import {assert} from "chai";

function test(string, expected) {
  assert.strictEqual(solution.Challenge.getMiddle(string), expected)
}

function _getMiddle(s) {
  var half = s.length/2;
  return s.length % 2 === 0 ? s.slice(half-1,half+1) : s[Math.floor(half)]
}

describe("solution", function(){
  it("should handle basic tests", function() {
    test("test", "es");
    test("testing", "t");
    test("middle", "dd");
    test("A", "A");
  });
  it("should handle bigger tests", function() {
    test("aaaaaaaaaaaeeeeeeeeeeeeyyyyyyyyyyyyyuu", "ee");
    test("aaaaaaaaaaafffeeeeeeeeeeeeg", "f");
    test("45321096", "21");
    test("NiceToMeetYou", "M");
  });
  it("should handle random tests", function() {
    for(var x = 0; x < 10; x++) {
      var length = Math.floor(Math.random() * 20);
      var str = "";
      for(var i = 0; i < length; i++) {
        str += String.fromCharCode(97 + Math.floor(Math.random() * 26));
      }
      test(str, _getMiddle(str));
    }
  });
});