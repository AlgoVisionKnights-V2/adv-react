# Overview

Bubble sort is one of the more simple sorting algorithms. Due to the simplicity of the algorithm, the Big O runtime suffers heavily.

# How does it work?

Bubble sort is done by completing one simple step. Compare 2 adjacent values and whichever value is smaller is moved to the left, then proceed to the next element. This comparison is done along the entire array until the end is reached. A second pass of the algorithm is done to make sure that there are no more conflictions. If during the second pass a confliction is found, then the algorithm swaps the values and another pass of bubble sort will be made. A pass will keep being made until the algorithm goes through the entire array without finding any conflicts.

# Big O Runtime