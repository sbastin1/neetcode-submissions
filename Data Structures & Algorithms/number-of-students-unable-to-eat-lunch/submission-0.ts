class Solution {
    /**
     * @param {number[]} students
     * @param {number[]} sandwiches
     * @return {number}
     */
    countStudents(students: number[], sandwiches: number[]): number {
        let students0 = 0
        let students1 = 0
        
        for (let i = 0; i < students.length; i++) {
            let num = students[i]

            if (num === 1) students1++
            if (num === 0) students0++
        }

        for (let i = 0; i < sandwiches.length; i++) {

            if (sandwiches[i] === 0) {
                if (students0 === 0) {
                    return students0 + students1
                }
                students0--
            }
            if (sandwiches[i] === 1) {
                if (students1 === 0) {
                    return students0 + students1
                }
                students1--
            }
        }
        return 0
    }
}
