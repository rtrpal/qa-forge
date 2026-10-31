 # QA Forge: Requirement Quality Evaluation Rubric

**Version:** 1.0  
**Status:** Initial specification

## 1. Purpose

Evaluate software requirements for classification, clarity, testability, and measurable criteria where applicable.

The evaluator should help technical and nontechnical users identify missing information and improve requirements without unnecessarily rejecting usable requirements.

## 2. Requirement Categories

A requirement may belong to one or more categories.

- **FUNCTIONAL:** Describes a behavior or capability the application must provide.
- **PERFORMANCE:** Describes response time, execution time, latency, throughput, or another performance characteristic.
- **CAPACITY:** Describes the number of users, requests, transactions, or other workloads the system must support.
- **SECURITY:** Describes security controls, access restrictions, authentication, authorization, confidentiality, or related protections.
- **USABILITY:** Describes usability expectations, accessibility, learnability, or ease of use.
- **OTHER:** Describes a requirement that does not fit the categories above.

The evaluator must not assume that every requirement belongs to exactly one category.

## 3. Evaluation Criteria

### 3.1 Classification

Identify the categories relevant to the requirement.

Classification must consider the meaning and context of the requirement, not merely the presence of individual keywords.

### 3.2 Clarity

Determine whether the expected behavior or outcome is understandable.

Flag requirements that rely on ambiguous or subjective language without sufficient context.

### 3.3 Testability

Determine whether a tester could verify that the requirement has been satisfied.

Identify missing expected behavior, conditions, outcomes, or other information that prevents reliable testing.

### 3.4 Measurable Criteria

Determine whether a measurable target is required for the requirement being evaluated.

- Functional requirements do not automatically require numerical thresholds.
- Performance requirements generally need a defined metric and an appropriate target.
- Capacity requirements generally need a defined workload or capacity measure and an appropriate target.
- Security and usability requirements may need measurable criteria when the stated expectation requires them.

When a requirement expresses a quantitative expectation without a suitable target, flag the missing information.

A number alone does not establish that a requirement is measurable. The metric, unit, target, and relevant conditions must be sufficiently clear for the requirement's purpose.

## 4. Quality Statuses

### ACCEPTABLE

The requirement is sufficiently clear and testable for its intended purpose, and no material issues were identified.

### ACCEPTABLE_WITH_WARNINGS

The basic intent is understandable and can be evaluated or tested at a basic level, but additional details could improve completeness or test coverage.

### NEEDS_REVIEW

Important information is missing, or ambiguity prevents reliable evaluation or testing.

The evaluator must explain the reasons for the assigned status.

## 5. Evaluation Findings

Each finding must identify:

- The evaluation criterion.
- A concise issue code.
- An explanation of the issue.
- A suggested question or clarification when appropriate.

Findings must be specific to the submitted requirement.

The evaluator must not invent business rules, performance targets, capacity targets, or security expectations that the user has not provided.

## 6. Suggested Questions

When clarification is needed, suggest concise questions that help the user supply the missing information.

Questions should be relevant to the identified issue and understandable to nontechnical users.

## 7. Evaluation Principles

1. Preserve the user's original requirement.
2. Evaluate meaning and context rather than relying exclusively on keyword matching.
3. Do not require numerical thresholds for every requirement.
4. Do not assume that the presence of a number makes a requirement measurable.
5. Distinguish missing information from an actual contradiction.
6. Explain findings rather than returning a status without justification.
7. Treat AI-generated evaluations as fallible and subject them to automated validation and testing.
8. Do not silently convert assumptions into confirmed requirements.

## 8. Expected Evaluation Output

The evaluator should return a structured object containing:

- `categories`: An array of applicable requirement categories.
- `qualityStatus`: One of the three approved quality statuses.
- `findings`: An array of identified issues.
- `suggestedQuestions`: An array of clarification questions.

Each finding should contain:

- `criterion`: The evaluation dimension involved.
- `issue`: A stable issue code.
- `explanation`: A concise explanation of the finding.

The output must follow the application's approved schema. Invalid or incomplete responses must be detected before they are passed to downstream components.