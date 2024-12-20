# Lesson #: Stacks

## Warm-up (10 minutes)

## Written Question (5 minutes)

In what areas of life have you observed examples of the "last in, first out" (LIFO) principle? Write a brief response in 3 minutes.

## Lecture Content (20 minutes)

In this lecture, we will explore the concept of stacks, which is a fundamental data structure in computer science. A stack is an abstract data type that follows the "last in, first out" (LIFO) principle.

### Definition and Operations

A stack is a collection of elements that supports two main operations:

1. **Push**: This operation adds an element to the top of the stack.
2. **Pop**: This operation removes and returns the topmost element from the stack.

Additionally, we have the following operations:

3. **Peek**: This operation returns the topmost element without removing it.
4. **IsEmpty**: This operation checks if the stack is empty.
5. **Size**: This operation returns the number of elements in the stack.

### Implementation

Stacks can be implemented using various data structures, such as arrays or linked lists. The choice of implementation depends on the specific requirements of the problem.

#### Array-based Implementation

In an array-based implementation, we use a fixed-size array to store the elements of the stack. We also maintain a variable to keep track of the topmost element's index. The push operation increments the top index and adds the element at that position, while the pop operation decrements the top index and returns the element at that position.

#### Linked List-based Implementation

In a linked list-based implementation, we use a singly linked list to store the elements of the stack. Each node in the linked list contains the element and a reference to the next node. The top of the stack is represented by the head of the linked list. The push operation creates a new node and makes it the new head, while the pop operation removes the head node and returns its element.

### Applications

Stacks have various applications in computer science and real-life scenarios. Some common examples include:

- Function call stack: Stacks are used to manage function calls in programming languages. Each function call is pushed onto the stack, and when a function completes, it is popped off the stack.
- Expression evaluation: Stacks are used to evaluate arithmetic expressions, such as infix, postfix, and prefix notations.
- Undo/Redo functionality: Stacks can be used to implement undo and redo operations in text editors or other applications.
- Backtracking algorithms: Stacks are used in backtracking algorithms, such as depth-first search, to keep track of the visited nodes.

### Time and Space Complexity

The time complexity of stack operations depends on the implementation. In the array-based implementation, push and pop operations have a time complexity of O(1). In the linked list-based implementation, the time complexity is also O(1) for push and pop operations.

The space complexity of a stack is determined by the number of elements it contains. In both array-based and linked list-based implementations, the space complexity is O(n), where n is the number of elements in the stack.

That concludes our lecture on stacks. Remember to practice implementing and using stacks in your programming projects to gain a deeper understanding of this important data structure.

## Problem Solving (35 minutes)

### Valid Parens

## Recap (15 minutes)

In this lesson, we explored the concept of stacks, which is a fundamental data structure in computer science. A stack follows the "last in, first out" (LIFO) principle, where the last element added is the first one to be removed. We learned about the definition and operations of stacks, including push, pop, peek, isEmpty, and size. Stacks can be implemented using arrays or linked lists, depending on the specific requirements of the problem. We discussed the applications of stacks in various scenarios, such as function call management, expression evaluation, undo/redo functionality, and backtracking algorithms. The time complexity of stack operations is O(1) in both array-based and linked list-based implementations, while the space complexity is O(n), where n is the number of elements in the stack. Remember to practice implementing and using stacks in your programming projects to gain a deeper understanding of this important data structure.

## Additional Resources
