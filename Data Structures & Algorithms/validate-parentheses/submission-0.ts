class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {
        const stack = [];
        const pairs = {
        ")": "(",
        "]": "[",
        "}": "{"
        }

        for (const i of s) {
            if ("({[".includes(i)) {
                stack.push(i)
            } else {
                const pair = pairs[i]
                if (pair === stack.at(-1)) {
                    stack.pop()
                }
                else {
                    return false
                }
            }
        }

        return stack.length === 0
    }
}
