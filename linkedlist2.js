class Node {
    constructor(data){
        this.head = data;
        this.next = null;
    }
}

class LinkedList{
    constructor(data){
        this.head = new Node(data);
        this.tail = this.head;
        this.length = 1;
    }

append(data){
    const newNode = new Node(data);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length ++;
}

prepend(){
    const newNode = new Node();
    newNode.next = this.head;
    this.head = newNode;
    this.head++;
}

travers(index){
    let counter = 0;
    currentNode = this.head;
    while(counter !== index){
        currentNode = currentNode.next;
        counter++
    }
    return currentNode;
}

insert(index, data){
    if(index >= this.length){
        return this.append(data);
    }
    if(index === 0){
        return this.prepend(data);
    }

    const newNode = new Node(data);
    const beforNode = this.travers(index - 1);
    const beforPointer = beforNode.next;
    beforNode.next = newNode;
    newNode.next = beforPointer;
    this.length++;
}

}

