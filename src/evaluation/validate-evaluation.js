// Validates the basic structure of an AI-generated requirement evaluation.
function validateEvaluation(evaluation) {

    // Reject missing inputs and values that aren't evaluation objects.
    if (!evaluation || typeof evaluation !== "object" || Array.isArray(evaluation)) {
        throw new Error("Evaluation must be an object");
    }

    // These four fields are required by our agreed JSON contract.
    const requiredFields = [
        "categories",
        "qualityStatus",
        "findings",
        "suggestedQuestions"
    ];

    // Check that every required field exists; stop if any field is missing.
    for (const field of requiredFields) {
        if (!(field in evaluation)) {
            throw new Error(`Missing required field: ${field}`);
        }
    }

    // Only allow quality statuses defined in our evaluation rubric.
    const allowedStatuses = [
        "ACCEPTABLE",
        "ACCEPTABLE_WITH_WARNINGS",
        "NEEDS_REVIEW"
    ];

    // Reject responses containing an unknown quality status.
    if(!(allowedStatuses.includes(evaluation.qualityStatus))){
        throw new Error("Invalid quality status")
    }

   // Define the categories that the AI is allowed to return.
const allowedCategories = [
    "FUNCTIONAL",
    "PERFORMANCE",
    "CAPACITY",
    "SECURITY",
    "USABILITY",
    "OTHER"
];

    // Ensure categories is an array before checking its contents.
    if (!Array.isArray(evaluation.categories)) {
        throw new Error("Categories must be an array");
    }

    // Reject any category that isn't in our approved list.
    for (const category of evaluation.categories) {
        if (!allowedCategories.includes(category)) {
            throw new Error(`Invalid category: ${category}`);
        }
    }

  // Define the fields that every finding must contain.
    const requiredFindingFields = [
         "criterion",
         "issue",
         "explanation"
    ];

    // Ensure findings is an array before checking its contents.
    if (!Array.isArray(evaluation.findings)) {
        throw new Error("Findings must be an array");
    }

    // Check each finding object to ensure all required fields exist.
    for (const finding of evaluation.findings) {
        for (const field of requiredFindingFields) {
            if (!(field in finding)) {
                 throw new Error(`Missing required field in finding: ${field}`);
            }
        }
    }
    

    

    // Return true when the basic structural checks pass.
    // This does not yet validate the values inside each field.
    return true;
}

// Export the function so our tests and other modules can use it.
module.exports = { validateEvaluation };