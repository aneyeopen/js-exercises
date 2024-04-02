//node class//

class Node {
    constructor(value) {
        this.value = value || null;
        this.nextNode = null;
    }
}


//linked list class//

class linkedList {
    constructor() {
        this.listHead = null;
    }
    //adds a new node containing value to the start of the list //
    prepend(value) {
        let tmp = null;
        if (this.listHead != null) {
            tmp = this.listHead;
            this.listHead = new Node(value)
            this.listHead.nextNode = tmp;
        }
    }
    // adds a new node containing value to the end of the list //
    append(value) {
        if (this.listHead == null) {
            this.prepend(value);
        }else {
            let temp = this.listHead;
            while (temp.nextNode != null) {
                tmp = tmp.nextNode
            }
            tmp.nextNode = new Node(value)
        }
    }
    
    //  returns the total number of nodes in the list //
    size() {
        let tmp = this.listHead
        let counter = 0;
        while (tmp !- null) {
            tmp = tmp.nextNode
            counter ++
        }
        return counter
    }
    
    // returns the first node in the list //
    
    head() {
        return this.listHead
    }
    
    
    //  returns the last node in the list //
    tail() {
        let tmp = this.listHead;
        while (tmp.nextNode != null) {
            tmp = tmp.nextNode
        }
        return tmp
    }
    
    // returns the node at the given index //
    at(index) {
        let tmp = this.listHead
        for (let i = 0; i < index; i++) {
            tmp = temp.nextNode
            if (tmp == null) {
                return "there is no item for this index"
            }
        }
        return tmp
    }
    
}



