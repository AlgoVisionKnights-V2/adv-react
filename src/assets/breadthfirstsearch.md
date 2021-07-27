# Overview
Breadth-first search traverses a tree or graph by starting at the root and checking every node in the same depth before checking the next level.

breadth-first search uses a queue to determine the search order.

# How does it work?
The starting node is flagged as visited. All nodes it can travel to are checked and if they are unvisited, they are flagged as visited and enqueued.

In each loop, the next node is dequeued and all the nodes it can travel to are checked. Any univisited neighbors are flagged as visited and enqueued.

This process repeats until the queue is empty or a particular node you're looking for is found

# Differences between trees and graphs
Trees have a root node where all traversal starts. The first node will always be the root node. Graphs do not have a root node. Breadth-first search can start with an arbitrary node if there's no particular reason to start with any node.

Breadth-first search with trees will search through each node in the same tree depth before checking the next level. Breadth-first search with graphs will search each node a certain number of jumps away from the main node.