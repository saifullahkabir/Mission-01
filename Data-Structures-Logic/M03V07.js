
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    append(value) {
        const newNode = new Node(value);

        // if the linked list is empty
        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            // if the linked list is not empty
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;

        return this;
    }

    prepend(value) {
        const newNode = new Node(value);

        // if the linked list is empty
        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            // if the linked list is not empty
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;

        return this;
    }

    insert(index, value) {
        if (index < 0 || index > this.length) {
            console.error('Index out of bound: shala muri khaa')
            return undefined;
        }

        // if the insert is in the start of the linked list
        if (index === 0) {
            return this.prepend(value);
        }

        // if the insert is in the end of the linked list
        if (index === this.length) {
            return this.append(value);
        }

        // if the insert is in the middle of the linked list
        const leadingNode = this._traverseToIndex(index - 1);
        const holdingNode = leadingNode.next;

        const newNode = new Node(value);

        leadingNode.next = newNode;
        newNode.next = holdingNode;

        this.length++;
    }

    remove(index) {
        if (index === 0) {
            const removedNode = this.head.value;
            this.head = this.head.next;

            if (this.length === 1) {
                this.tail = null;
            }

            this.length--;
            return removedNode;
        }

        const leadingNode = this._traverseToIndex(index - 1);
        const nodeToRemove = leadingNode.next;

        leadingNode.next = nodeToRemove.next;

        if (leadingNode.next === null) {
            this.tail = leadingNode;
        }
        return nodeToRemove.value;
    }

    // private helper method
    // find the leading node
    _traverseToIndex(index) {
        let count = 0;
        let currentNode = this.head;

        while (count !== index) {
            currentNode = currentNode.next;
            count++;
        }
        return currentNode;
    }

    print() {
        let currentNode = this.head;

        while (currentNode !== null) {
            console.log(currentNode.value);
            currentNode = currentNode.next;
        }
    }
}

const linkedList = new LinkedList();

linkedList.append("A").append("B");

// linkedList.prepend(10).prepend(20).prepend(30);

// linkedList.insert(2, 100);

linkedList.remove(0);
linkedList.remove(0);


linkedList.print();
console.log(linkedList);


