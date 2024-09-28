class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class LinkedList{
    constructor(value){
        this.head = new Node(value);
        this.tail = this.head;
        this.length = 1;
    }

    append(value){
        const newNode = new Node(value);
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;
    }

    prepend(value){
        const newNode = new Node(value);
        this.newNode.next = this.head;
        this.head = newNode;
        this.length++
        return this;
    }

    traversTo(position){
        if(position < 0 || position >this.length){
            throw new ("Position out of bounds");
        }

        let currentNode = this.head;
        let counter = 0;
        while(counter < position){
            currentNode = currentNode.next;
            counter++;
        }

    return currentNode;


    }

    insert(position, value){
        if(position === 0){
            return this.prepend(value);
        }

        if(position >= this.length){
            return this.append(value)
        }
       
        const newNode = new Node(value); // নতুন নোড তৈরি হয়

        const previousNode = this.traverseTo(index - 1); // ইনসারশনের পূর্ববর্তী নোড খোঁজা হয়


        const nodeAfterInsertion = previousNode.next;    // ইনসারশনের পরে থাকা নোড সংরক্ষণ করা হয়
        previousNode.next = newNode;   // পূর্ববর্তী নোডকে নতুন নোডের সাথে সংযুক্ত করা হয়
        newNode.next = nodeAfterInsertion; // নতুন নোডকে ইনসারশনের পরে থাকা নোডের সাথে সংযুক্ত করা হয়
        
        this.length++;                 // দৈর্ঘ্য ১ বৃদ্ধি করা হয়

        return this; // চেইনিংয়ের জন্য আপডেটেড লিস্ট রিটার্ন করা হয়

    }


    


}

const myLinkedList = new LinkedList("node1");
myLinkedList.append("node2");
myLinkedList.append("node3");
myLinkedList.insert(2, "Hello");
myLinkedList.append("node4");
myLinkedList.append("node5");
console.log(myLinkedList);