class Node {
    // Node class to represent each element in the linked list
    constructor(value) {
        this.value = value; // The value stored in the node
        this.next = null;   // Pointer to the next node in the list
    }
}

class LinkedList {
    // LinkedList class to manage the list of nodes
    constructor(value) {
        this.head = new Node(value); // Initialize the head with the first node
        this.tail = this.head;       // Since there's only one node, tail is also the head
        this.length = 1;             // Start with a length of 1
    }

    append(value) {
        // Method to add a node at the end of the list
        const newNode = new Node(value); // Create a new node with the given value
        this.tail.next = newNode;        // Link the current tail node to the new node
        this.tail = newNode;             // Update the tail to be the new node
        this.length++;                   // Increment the length of the list
        return this;                     // Return the updated list for chaining
    }

    prepend(value) {
        // Method to add a node at the beginning of the list
        const newNode = new Node(value); // Create a new node with the given value
        newNode.next = this.head;        // Link the new node to the current head
        this.head = newNode;             // Update the head to be the new node
        this.length++;                   // Increment the length of the list
        return this;                     // Return the updated list for chaining
    }

    traverseTo(position) {
        // Helper method to traverse the list and return the node at a given position
        if (position < 0 || position >= this.length) {
            throw new Error('Position out of bounds');
        }

        let currentNode = this.head; // Start from the head of the list
        let counter = 0;             // Initialize a counter to track the current position

        while (counter < position) { // Traverse until the desired position is reached
            currentNode = currentNode.next; // Move to the next node
            counter++;                      // Increment the counter
        }

        return currentNode; // Return the node at the specified position
    }

    insert(position, value) {
        // Method to insert a node at a specific position in the list
        if (position === 0) {
            return this.prepend(value); // If position is 0, prepend the node
        }
        if (position >= this.length) {
            return this.append(value);  // If position is beyond the list's length, append the node
        }

        const newNode = new Node(value); // Create a new node with the given value
        const prevNode = this.traverseTo(position - 1); // Find the node before the insertion point
        const holdingPointer = prevNode.next;    // Store the reference to the next node

        prevNode.next = newNode;   // Link the prevNode to the new node
        newNode.next = holdingPointer; // Link the new node to the following node
        this.length++;           // Increment the length of the list

        return this; // Return the updated list for chaining
    }

    printList() {
        // Method to print the entire linked list
        const values = [];
        let currentNode = this.head;

        while (currentNode !== null) {
            values.push(currentNode.value); // Collect the value of each node
            currentNode = currentNode.next; // Move to the next node
        }

        console.log(values.join(' -> ')); // Print the list in a readable format
    }
}

// Example usage
const myLinkedList = new LinkedList("node1");
myLinkedList.append("node2")
            .append("node3")
            .append("node4")
            .insert(4, "Hello From Insert")
            .append("node5");

myLinkedList.printList(); // Output the entire linked list in a readable format
