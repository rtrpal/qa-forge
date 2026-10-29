const assert = require("node:assert/strict");
const { processRequirement } = require("../src/requirements/requirement");

// Test 1: Valid requirement
const result = processRequirement("Users should be able to log in");

assert.equal(
    result.originalRequirement,
    "Users should be able to log in"
);

assert.equal(result.status, "RECEIVED");

console.log("Test 1 PASSED: Valid requirement");

// Test 2: Empty requirement
assert.throws(
    () => processRequirement(""),
    {
        message: "Requirement cannot be empty"
    }
);

console.log("Test 2 PASSED: Empty requirement rejected");

// Test 3: null requirement
assert.throws(
    ()=>processRequirement(null),
    {
        message: "Requirement cannot be empty"
    });

console.log("Test 3 PASSED: Null requirement rejected");

// Test 4: white Space requirement
assert.throws(
    ()=>processRequirement("    "),
    {
        message: "Requirement cannot be empty"
    });

console.log("Test 4 PASSED: Whitespace-only requirement rejected");

