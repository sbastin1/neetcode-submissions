class MyLinkedList {
    head: ListNode | null = null
    tail: ListNode | null = null

    count = -1

    private selectNode(index: number): ListNode {
        if (index < 0 || index > this.count) throw new Error()
        
        // this would be more efficient but worst case is still O(n)
        // let node = this.head ? Math.round(this.count/2) > index : this.tail
        let i = 0;
        let selected = this.head;
        while(index > i) {
            i++
             selected = selected.next
        }

        return selected
    }


    constructor() {}
    /**
     * @param {number} index
     * @return {number}
     */
    get(index: number): number {
        if (index < 0 || index > this.count) return -1;

        return this.selectNode(index).val
    }

    /**
     * @param {number} val
     * @return {void}
     */
    addAtHead(val: number): void {
        if (this.head === null) {
            this.head = new ListNode(val, null)
            this.tail = this.head
            this.count = 0
        } else {
            let old = this.head
            this.head = new ListNode(val, old)
            this.count++
        }
    }

    /**
     * @param {number} val
     * @return {void}
     */
    addAtTail(val: number): void {
        if (this.count === -1) return;
        if (!this.tail) return;
        
        let old = this.tail
        this.tail = new ListNode(val, null)
        old.next = this.tail
        this.count++
    }

    /**
     * @param {number} index
     * @param {number} val
     * @return {void}
     */
    addAtIndex(index: number, val: number): void {
        if (index < 0 || index > this.count + 1) return;

        if (index === 0) {
            const newNode = new ListNode(val, this.head)
            this.head = newNode

            if (this.tail === null) {
                this.tail = newNode
            }

            this.count++
            return;
        }
        
        let before = this.selectNode(index -1)
        let ahead = before.next

        const newNode = new ListNode(val, ahead)
        before.next = newNode

        if (ahead === null) {
            this.tail = newNode
        }
        
        this.count++
    }

    /**
     * @param {number} index
     * @return {void}
     */
    deleteAtIndex(index: number): void {
        if (index < 0 || index > this.count) return;

        if (index === 0) {
            this.head = this.head?.next ?? null
            this.count--

            if (this.count === -1) {
                this.tail = null
            }

            return;
        }

        let before = this.selectNode(index -1)
        let ahead = before.next

        if (ahead === null) return;

        before.next = ahead.next

        if (index === this.count) {
            this.tail = before
        }

        this.count--
    }
}

class ListNode {
    val: number;
    next: ListNode | null

    constructor(val: number, next: ListNode | null) {
        this.val = val
        this.next = next
    }
}

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */
