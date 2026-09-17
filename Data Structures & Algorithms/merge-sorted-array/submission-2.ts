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
        
        this.mergeSort(nums1, 0, nums1.length - 1) 
    }

    mergeSort(arr: number[], s: number, e: number) {
        if (e - s + 1 <= 1) return arr;
        
        const m = Math.floor((s + e) / 2)
        
        this.mergeSort(arr, s, m)
        this.mergeSort(arr, m + 1, e)

        this.mergeArr(arr, s, m, e)
        
        return arr;
    }

    mergeArr(arr, s ,m, e) {
        const left = arr.slice(s, m + 1)
        const right = arr.slice(m + 1, e + 1)

        let i = 0
        let j = 0
        let k = s

        while (i < left.length && j < right.length) {
            if (left[i] <= right[j]) {
                arr[k] = left[i]
                i++
            } else {
                arr[k] = right[j]
                j++
            }
            k++
        }

        while (i < left.length) {
            arr[k] = left[i]
            i++
            k++
        }

        while (j < right.length) {
            arr[k] = right[j]
            j++
            k++
        }
    }
}
