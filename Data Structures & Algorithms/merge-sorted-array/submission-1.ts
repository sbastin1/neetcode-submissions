class Solution {
    /**
     * @param {number[]} nums1
     * @param {number} m
     * @param {number[]} nums2
     * @param {number} n
     * @return {void} Do not return anything, modify nums1 in-place instead.
     */
    merge(nums1: number[], m: number, nums2: number[], n: number): void {
        for (let n of nums2) {
            nums1.pop()
        }
        nums1.push(...nums2)
        nums1.sort((a, b) => a - b)
    }
}
