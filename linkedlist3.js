class Node {
    // Node class to represent each element in the linked list
    constructor(data) {
        this.value = data; // The value or data of the node
        this.next = null;  // Pointer to the next node (initially null)
    }
}

class LinkedList {
    // LinkedList class to manage the list of nodes
    constructor(data) {
        this.head = new Node(data); // Initialize the head with the first node
        this.tail = this.head;      // Since there's only one node, tail is also the head
        this.length = 1;            // Start with a length of 1
    }

    append(data) {
        // Method to add a node at the end of the list
        const newNode = new Node(data); // Create a new node with the given data
        this.tail.next = newNode;       // Link the current tail node to the new node
        this.tail = newNode;            // Update the tail to be the new node
        this.length++;                  // Increment the length of the list
    }

    prepend(data) {
        // Method to add a node at the beginning of the list
        const newNode = new Node(data); // Create a new node with the given data
        newNode.next = this.head;       // Link the new node to the current head
        this.head = newNode;            // Update the head to be the new node
        this.length++;                  // Increment the length of the list
    }

    travers(position) {
        // Method to traverse the list and return the node at a given position
        let counter = 0;               // Initialize a counter to track the current position
        let currentNode = this.head;   // Start from the head of the list
        while (counter !== position) { // Traverse until the desired position is reached
            currentNode = currentNode.next; // Move to the next node
            counter++;                     // Increment the counter
        }
        return currentNode; // Return the node at the specified position
    }

    insert(position, data) {
        // Method to insert a node at a specific position in the list
        if (position >= this.length) {
            return this.append(data); // If position is beyond the list's length, append the node
        }
        if (position === 0) {
            return this.prepend(data); // If position is 0, prepend the node
        }

        const newNode = new Node(data);        // Create a new node with the given data
        const leader = this.travers(position - 1); // Find the node before the insertion point
        const holdingPointer = leader.next;    // Store the reference to the next node
        leader.next = newNode;                 // Link the leader node to the new node
        newNode.next = holdingPointer;         // Link the new node to the following node
        this.length++;                         // Increment the length of the list
    }
}

// Example usage
const myLinkedList = new LinkedList("node1"); // Create a new linked list with "node1" as the head
myLinkedList.append("node2");                 // Append "node2" to the list
myLinkedList.append("node3");                 // Append "node3" to the list
myLinkedList.append("node4");                 // Append "node4" to the list
myLinkedList.insert(4, "Hello From Insert");  // Insert "Hello From Insert" at position 4
myLinkedList.append("node5");                 // Append "node5" to the list

console.log(myLinkedList); // Output the entire linked list structure

