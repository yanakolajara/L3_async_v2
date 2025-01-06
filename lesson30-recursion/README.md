# Lesson 30: Introduction to Recursion

## Warm-up (10 minutes)

### Written Question
In your own words, explain the difference between a recursive solution and an iterative solution. Provide a simple example where recursion might be more intuitive than iteration.

## Lecture Content (20 minutes)

### What is Recursion?
Recursion occurs when a function calls itself in order to solve a problem. It often involves:
1. A **base case** – the condition that stops the recursion.
2. A **recursive case** – the part where the function calls itself with modified inputs.

### Key Elements of Recursion
- **Base Case**: Prevents infinite loops by providing a stopping condition.
- **Call Stack**: Each recursive call is placed on the call stack until it hits a base case.
- **Recursive Case**: The function operates on a smaller portion of the problem, gradually approaching the base case.

### Example: Factorial: 3! => 3 * 2 * 1

- **factorial(0) = 1** (base case)
- **factorial(n) = n * factorial(n - 1)** (recursive case)

### Advantages of Recursion
- Code can be cleaner and more intuitive for problems that are naturally hierarchical or repetitive in structure.
- Can simplify logic for tasks like tree traversal or divide-and-conquer algorithms.

### Disadvantages of Recursion
- Overhead of multiple function calls.
- Can lead to stack overflow if not carefully implemented or if the input is too large.

## Problem Solving (35 minutes)

### Practice Problem
Write a recursive function that sums up all elements in an array. Make sure to identify and handle your base case (e.g., empty array).

## Recap (15 minutes)
- Recursion vs. Iteration
- Base case importance
- Stack management
- Practical scenarios where recursion shines (divide-and-conquer, tree/graph traversals)

## Additional Resources
- [MDN Web Docs: Recursion Explained](https://developer.mozilla.org/en-US/docs/Glossary/Recursion)
- [GeeksforGeeks: Recursion Basics](https://www.geeksforgeeks.org/recursion/)
