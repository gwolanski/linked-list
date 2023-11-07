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
        
        if (current === null) {
            return null;
        }
        
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
        let current = this.head;
        let previous = null;

        if (current === null) {
            return null;
        }
        
        if (current.next === null) {
            const removedNode = current;
            current = null;
            this.head = null;
            return removedNode;
        } else {
            while (current.next !== null) {
                previous = current;
                current = current.next;
            }
            
            previous.next = null;
    
            return current;
        }
    }
    

    contains(value) {
        let current = this.head;

        if (current === null) {
            return false;
        }

        while (current !== null) {
            if (current.data === value) {
                return true;
            } 
            current = current.next;
        }
        return false;
    }

    find(value) {
        let current = this.head;
        let count = 0;

        if (current === null) {
            return null
        }

        while (current !== null) {
            if (current.data === value) {
                return count;
            }
            count++;
            current = current.next;
        }

        return null;
    }

    toString() {
        let current = this.head;
        let string = "";

        while (current !== null) {
            string += current.data + " -> ";
            current = current.next;
        }
        string += "null";
        return string;
    }
}

const linkedList = new LinkedList();

//display linked list
let stringList = linkedList.toString();
let displayList = document.getElementById("list-display");
displayList.innerHTML = stringList;

//get size
let size = linkedList.getSize();
let displaySize = document.getElementById("list-size");
displaySize.innerHTML = size;

//get head
let head = linkedList.getHead();
let displayHead = document.getElementById("list-head");
if (head === null) {
    displayHead.innerHTML = "null";
} else {
    displayHead.innerHTML = head.data;
}

//get tail
let tail = linkedList.getTail();
let displayTail = document.getElementById("list-tail");
if (tail === null) {
    displayTail.innerHTML = "null";
} else {
    displayTail.innerHTML = tail.data;
}

//append value to list
let appendInput = document.getElementById("append-input");
let appendButton = document.getElementById("append-button");
appendButton.addEventListener("click", function () {
    let value = appendInput.value;
    linkedList.append(value);
    updateDisplay();
    console.log("new list: " + linkedList)
})

//prepend value to list
let prependInput = document.getElementById("prepend-input");
let prependButton = document.getElementById("prepend-button");
prependButton.addEventListener("click", function () {
    let value = prependInput.value;
    linkedList.prepend(value);
    updateDisplay();
})

//find node at index

//does list contain value

//find value index

//remove last node
let removeLastNodeButton = document.getElementById("pop-button");
removeLastNodeButton.addEventListener("click", function () {
    linkedList.pop();
    updateDisplay();
})


let nodeAtIndex = linkedList.at(4);
let removedNode = linkedList.pop();
let containsValue = linkedList.contains(50);
let findIndexofValue = linkedList.find(50);
console.log(linkedList);

console.log("at index: " + nodeAtIndex.data);
console.log("removedNode: " + removedNode.data); //test this one out more
console.log("contains value: " + containsValue);
console.log("index at value: " + findIndexofValue);
console.log("string list: " + stringList);

function updateDisplay() {
    let updatedSize = linkedList.getSize();
    displaySize.innerHTML = updatedSize;

    let updatedHead = linkedList.getHead();
    if (updatedHead !== null) {
        displayHead.innerHTML = updatedHead.data;
    } else {
        displayHead.innerHTML = "null";
    }
    
    let updatedTail =linkedList.getTail();
    if (updatedTail !== null) {
        displayTail.innerHTML = updatedTail.data;
    } else {
        displayTail.innerHTML = "null";
    }

    let updatedList = linkedList.toString();
    displayList.innerHTML = updatedList;
}