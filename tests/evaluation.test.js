
// Import Node.js's built-in assertion library and our validator.
const assert = require("node:assert/strict");
const { validateEvaluation } = require("../src/evaluation/validate-evaluation");

// A sample AI evaluation containing all four required fields.
const validEvaluation = {
    categories: ["FUNCTIONAL"],
    qualityStatus: "ACCEPTABLE",
    findings: [],
    suggestedQuestions: []
};

// Test 1: A response containing all required fields should pass.
assert.equal(validateEvaluation(validEvaluation), true);

// Test 2: A response missing qualityStatus should throw an error.
assert.throws(
    () => validateEvaluation({
        categories: ["FUNCTIONAL"],
        findings: [],
        suggestedQuestions: []
    }),
    {
        message: "Missing required field: qualityStatus"
    }
);

// Test 3: A string instead of an evaluation object should be rejected.
assert.throws(
    () => validateEvaluation("not an evaluation object"),
    {
        message: "Evaluation must be an object"
    }
);

// Test 4: Reject a response containing an unapproved quality status.
assert.throws(
    () => validateEvaluation({
        categories: ["FUNCTIONAL"],
        qualityStatus: "PERFECT",
        findings: [],
        suggestedQuestions: []
    }),
    {
        message: "Invalid quality status"
    }
);

// Test5: Reject a category that isn't in the approved list.
assert.throws(() =>validateEvaluation({
        categories: ["OPERATION"],
        qualityStatus: "ACCEPTABLE",
        findings: [],
        suggestedQuestions: []
}), {message:"Invalid category: OPERATION"});


// Test6: Reject a category if it is not array.
assert.throws(() =>validateEvaluation({
        categories: "OPERATION",
        qualityStatus: "ACCEPTABLE",
        findings: [],
        suggestedQuestions: []
}), {message:"Categories must be an array"});


const allowedFindings = [
         "criterion",
         "issue",
         "explanation"
    ];

// Test7: Reject a Findings if it is not array.
assert.throws(() =>validateEvaluation({
        categories: ["FUNCTIONAL"],
        qualityStatus: "ACCEPTABLE",
        findings: "criterion",
        suggestedQuestions: []
}), {message:"Findings must be an array"});

// Test8: Reject a finding that isn't in the approved list.
assert.throws(() =>validateEvaluation({
        categories: ["FUNCTIONAL"],
        qualityStatus: "ACCEPTABLE",
        findings: [
        {
            criterion: "CLARITY",
            issue: "UNCLEAR_REQUIREMENT"
            // The explanation field is missing.
        }
    ],
        suggestedQuestions: []
}), {message:"Missing required field in finding: explanation"});

// Test9: Reject a finding that isn't in the approved list.
assert.throws(() =>validateEvaluation({
        categories: ["FUNCTIONAL"],
        qualityStatus: "ACCEPTABLE",
        findings: [
        {
            criterion: "CLARITY",
            //issue: "UNCLEAR_REQUIREMENT"
            // The explanation field is missing.
        }
    ],
        suggestedQuestions: []
}), {message:"Missing required field in finding: issue"});

// Test10: Reject a finding that isn't in the approved list.
assert.throws(() =>validateEvaluation({
        categories: ["FUNCTIONAL"],
        qualityStatus: "ACCEPTABLE",
        findings: [
        {}
    ],
        suggestedQuestions: []
}), {message:"Missing required field in finding: criterion"});


// Print a success message if all assertions pass.
console.log("All evaluation validator tests passed!");
