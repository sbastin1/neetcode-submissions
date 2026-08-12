class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations: string[]): number {
    const scores: number[] = []

    for (const curr of operations) {
        if (curr === "C") {
            scores.pop()
        } else if (curr === "D") {
            scores.push(scores[scores.length - 1] * 2)
        } else if (curr === "+") {
            scores.push(
                scores[scores.length - 1] +
                scores[scores.length - 2]
            )
        } else {
            scores.push(Number(curr))
        }
    }

    return scores.reduce((sum, score) => sum + score, 0)
    }
}
