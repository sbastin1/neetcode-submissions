class MinStack {
    private stack = [];
    private minStack = [];

    /**
     * @param {number} val
     * @return {void}
     */
    push(val: number): void {
        this.stack.push(val)

        if (this.minStack.length === 0) {
            this.minStack.push(val)
            return;
        }

        const currentMin = this.minStack.at(-1)!;

        this.minStack.push(
        val < currentMin ? val : currentMin
        );
    }

    /**
     * @return {void}
     */
    pop(): void {
        this.stack.pop()
        this.minStack.pop()
    }

    /**
     * @return {number}
     */
    top(): number {
        return this.stack.at(this.stack.length -1)
    }

    /**
     * @return {number}
     */
    getMin(): number {
        return this.minStack.at(-1)!;
    }
}
