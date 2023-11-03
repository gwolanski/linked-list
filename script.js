class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}


class LinkedList {
    constructor() {
        this.head = null;
    }

    append(value) {
        const newNode = new Node(value);

        if (this.head === null) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next !== null) {
                current = current.next;
            }
            current.next = newNode;
        }
    }

    prepend(value) {
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
    }

    getSize() {
        let listSize;
        let current = this.head;

        if (current === null) {
            listSize = 0;
        } else {
            listSize = 1;
            while (current.next) {
                current = current.next;
                listSize++;
            }
        }
        return listSize;
    }

    getHead() {
        return this.head;
    }

    getTail() {
        let current = this.head;
        while (current.next !== null) {
            current = current.next;
        }
        return current;
    }

    at(index) {
        if (index < 0) {
            return null;
        }

        let count = 0;
        let current = this.head;

        while (current !== null) {
            if (count === index) {
                return current;
            }
            count++;
            current = current.next;
        }

        return null;
    }

    pop() {

    }

    contains(value) {

    }

    find(value) {

    }

    toString() {

    }
}

const linkedList = new LinkedList();
linkedList.prepend(1);
linkedList.prepend(2);
linkedList.prepend(3);
linkedList.append(6);
linkedList.append(100);
let head = linkedList.getHead();
let tail = linkedList.getTail();
let size = linkedList.getSize();
let nodeAtIndex = linkedList.at(5);
console.log(linkedList);

console.log("head: " + head.data);
console.log("tail: " + tail.data);
console.log("size: " + size);
console.log("at index: " + nodeAtIndex.data);