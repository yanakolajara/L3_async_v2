# Lesson 31: Intermediate Recursion

## Warm-up (10 minutes)

### Written Question
In your own words, describe what backtracking is and how it differs from a simple recursive approach. Provide a brief example of a problem where you would use backtracking.

## Lecture Content (20 minutes)

### What is Backtracking?
Backtracking is a refinement of recursion used to explore all possible solutions to a problem. If a particular path does not yield a valid result, the algorithm backtracks (reverses its last step) and tries a different path.

1. **Key Characteristics**  
   - Systematically explores multiple paths to find a solution.  
   - Often used to solve combinatorial problems (e.g., generating permutations, combinations, or solving puzzles like Sudoku).  
   - Involves “trying” a choice, then recursing to see if that choice leads to a solution. If not, the choice is undone (backtracked) and another path is explored.

2. **When to Use Backtracking**  
   - Problems with many potential configurations or paths.  
   - Must systematically explore or generate these paths (e.g., maze-solving, N-Queens problem, generating permutations).

3. **Typical Approach**  
   - **Choice**: Decide on the next element or step.  
   - **Explore**: Recursively explore what follows from that choice.  
   - **Backtrack**: If the choice leads to a dead end, undo it and make a different choice.

### Example: Maze Navigation (Conceptual)
Imagine a grid-based maze with open cells and blocked cells. We can use backtracking by moving in one direction at a time and “backtracking” if we reach a dead end.

### Advantages of Backtracking
- Allows you to systematically explore all solutions.  
- Can handle complex, multi-step problems like pathfinding, permutations, or puzzle-solving.

### Disadvantages of Backtracking
- Potentially expensive in terms of time complexity, especially for large problems.  
- Must be careful to prune paths or detect dead ends early to avoid excessive computation.

## Problem Solving (35 minutes)
- Implement a **maze solver** that uses backtracking to find a path from the top-left corner to the bottom-right corner of a grid.

## Recap (15 minutes)
- Compare a straightforward recursion approach to one that requires backtracking.  
- Discuss strategies to optimize backtracking solutions (e.g., pruning).  
- Emphasize understanding the call stack and the process of undoing decisions.

## Additional Resources
- [GeeksforGeeks: Backtracking](https://www.geeksforgeeks.org/backtracking-algorithm/)  
- [MDN Web Docs: Recursion and Stack](https://developer.mozilla.org/en-US/docs/Glossary/Recursion)  
