function processRequirement(requirement) {
    if (typeof requirement !== "string" || !requirement.trim()) {
        throw new Error("Requirement cannot be empty");
    }

    return {
        originalRequirement: requirement,
        status: "RECEIVED"
    };
}

module.exports = { processRequirement };
