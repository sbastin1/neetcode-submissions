class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums: number[]): number {
        let maxCount = 0;
        let currentCount = 0;

        for (const num of nums) {
            currentCount = num === 1 ? currentCount + 1 : 0;
            maxCount = Math.max(maxCount, currentCount);
        }

        return maxCount;
    }
}
