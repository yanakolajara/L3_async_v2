# Lesson 6: Big O Notation

## Warm-up Written Question (15 minutes)
Why is it important to analyze the efficiency of algorithms? Provide an example where two different approaches to the same problem might have significantly different performance characteristics.

## Lecture Content (20 minutes)

### Understanding Big O Notation
1. What is Big O?
   - Measuring algorithm efficiency
   - Time complexity vs Space complexity
   - Best case, Average case, Worst case

2. Common Time Complexities
   - O(1): Constant time
   - O(log n): Logarithmic time
   - O(n): Linear time
   - O(n log n): Linearithmic time
   - O(n²): Quadratic time
   - O(2ⁿ): Exponential time

3. Space Complexity
   - Memory usage analysis
   - Stack space vs Heap space
   - Recursive call stack implications

### Analysis Techniques
1. Identifying Loops and Nested Operations
   - Single loops: Usually O(n)
   - Nested loops: Usually O(n²)
   - Divide and conquer: Usually O(log n)

2. Common Patterns
   - Array/String traversal: O(n)
   - Binary Search: O(log n)
   - Sorting algorithms: O(n log n) to O(n²)
   - Hash table operations: O(1) average

3. Optimization Strategies
   - Space-time tradeoffs
   - Choosing appropriate data structures
   - Recognizing optimization opportunities

## Problem Solving (35 minutes)
Today's problem focuses on analyzing and optimizing a solution's time complexity, moving from a brute force approach to an optimized solution.

## Recap (15 minutes)
- Review of Big O concepts
- Analysis of different approaches
- Best practices for optimization
