
class Node {
    constructor(data){
       this.value = data;
       this.next = null;
    }

}



class LinkedList {
    constructor(data){
        this.head = new Node(data);
        this.tail = this.head;
     
    }

    append(data){
        const newNode = new Node(data);
        this.tail.next = newNode;
        this.tail = newNode;
        
    }

}

myLinkedList = new LinkedList(10);
myLinkedList.append(20);
myLinkedList.append(30);


console.log(myLinkedList);


