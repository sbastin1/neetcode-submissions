class MyStack {
    queue = []

    private enqueue(x: number): void {
        this.queue.push(x)
    }

    private dequeue(): number {
        return this.queue.pop()
    }

    constructor() {}

    /**
     * @param {number} x
     * @return {void}
     */
    push(x: number): void {
        this.enqueue(x)
    }

    /**
     * @return {number}
     */
    pop(): number {
        return this.dequeue()
    }

    /**
     * @return {number}
     */
    top(): number {
        return this.queue[this.queue.length - 1]
    }

    /**
     * @return {boolean}
     */
    empty(): boolean {
        return this.queue.length === 0 ? true : false
    }
}

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
