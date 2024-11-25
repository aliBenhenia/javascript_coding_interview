class QueueUsingTwoStacks {
    constructor() {
      this.stack1 = [];
      this.stack2 = [];
    }
  
    // Enqueue operation: Push element to stack1
    enqueue(element) {
      this.stack1.push(element);
    }
  
    // Dequeue operation: Pop element from stack2
    dequeue() {
      // If stack2 is empty, transfer all elements from stack1 to stack2
      if (this.stack2.length === 0) {
        while (this.stack1.length > 0) {
          this.stack2.push(this.stack1.pop());
        }
      }
  
      // If stack2 is still empty, the queue is empty
      if (this.stack2.length === 0) {
        return "Queue is empty";
      }
  
      // Pop the top of stack2 (this is the front of the queue)
      return this.stack2.pop();
    }
  
    // Check if the queue is empty
    isEmpty() {
      return this.stack1.length === 0 && this.stack2.length === 0;
    }
  
    // Peek the front element of the queue
    front() {
      if (this.isEmpty()) {
        return "Queue is empty";
      }
  
      // If stack2 is not empty, the front is the top of stack2
      if (this.stack2.length > 0) {
        return this.stack2[this.stack2.length - 1];
      }
  
      // Otherwise, it's the bottom-most element of stack1
      return this.stack1[0];
    }
  
    // Print the elements in the queue
    print() {
      if (this.isEmpty()) {
        console.log("Queue is empty");
      } else {
        console.log("Queue contents: ", [...this.stack2.reverse(), ...this.stack1].join(' '));
      }
    }
  }
  
  // Example usage
  const queue = new QueueUsingTwoStacks();
  queue.enqueue(10); // Add 10 to the queue
  queue.enqueue(20); // Add 20 to the queue
  queue.enqueue(30); // Add 30 to the queue
  
  queue.print(); // Queue contents: 10 20 30
  
  console.log("Dequeue:", queue.dequeue()); // Dequeue: 10
  queue.print(); // Queue contents: 20 30
  
  console.log("Dequeue:", queue.dequeue()); // Dequeue: 20
  queue.print(); // Queue contents: 30
  
  queue.enqueue(40); // Add 40 to the queue
  queue.print(); // Queue contents: 30 40
  
  console.log("Front:", queue.front()); // Front: 30
  console.log("Dequeue:", queue.dequeue()); // Dequeue: 30
  queue.print(); // Queue contents: 40
  