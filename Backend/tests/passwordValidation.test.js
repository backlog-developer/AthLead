import test from "node:test";
import assert from "node:assert/strict";
import {
  PASSWORD_PATTERN,
  isValidPassword,
} from "../utils/passwordValidation.js";

test("accepts a password that meets every requirement", () => {
  assert.equal(isValidPassword("Strong@123"), true);
});

test("rejects passwords shorter than 8 characters", () => {
  assert.equal(isValidPassword("Str@123"), false);
});

test("rejects passwords without an uppercase letter", () => {
  assert.equal(isValidPassword("strong@123"), false);
});

test("rejects passwords without a lowercase letter", () => {
  assert.equal(isValidPassword("STRONG@123"), false);
});

test("rejects passwords without a number", () => {
  assert.equal(isValidPassword("Strong@abc"), false);
});

test("rejects passwords without a special character", () => {
  assert.equal(isValidPassword("Strong123"), false);
});

test("rejects passwords containing whitespace", () => {
  assert.equal(isValidPassword("Strong @123"), false);
});

test("rejects a valid substring inside an otherwise invalid password", () => {
  assert.equal(PASSWORD_PATTERN.test("xxxStrong@123xxx"), false);
});
