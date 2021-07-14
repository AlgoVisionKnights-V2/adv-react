# Overview

In-order traversal is used to print s tree in increasing order (when used on a binary search tree). It is the method used when wanting to obtain the values of the nodes in the increasing order.

# How does it work?

In-order traversal works by initially looking at the left sub-tree of a node. After the entire left sub-tree of the node has been traversed, the value of the node is then taken. Then the entire right sub-tree of the node is traversed. Hence, the following recursive function can be used to complete the in-order traversal of a tree:

- Traverse left sub-tree of a node in-order
- Take value of node
- Traverse right sub-tree of a node in-order

The iterative process for completing the in-order traversal is less efficient and more complex.

# Big O Stats

|                   | Worst Case | Average Case | Best Case |
|-------------------|------------|--------------|-----------|
| Iterative Runtime | O(n)       | O(n)         |  O(n)     |
| Recursive Runtime | O(n)       | O(n)         |  O(n)     |

