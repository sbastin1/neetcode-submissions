class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */
    replaceElements(arr: number[]): number[] {
        if (!arr) return [];
        
        let prevBiggestNum = arr[arr.length -1]
        let biggestNum = arr[arr.length -1]
        
        for (let i = arr.length -1; i >= 0; i--) {
            if (arr[i] > biggestNum) biggestNum = arr[i];            
            
            arr[i] = prevBiggestNum

            if (prevBiggestNum < biggestNum) prevBiggestNum = biggestNum
            console.log(arr)
        }

        arr[arr.length - 1] = -1

        return arr
    }
}
