# Overview

Bubble sort is one of the more simple sorting algorithms. Due to the simplicity of the algorithm, the Big O runtime suffers heavily. One way to view bubble sort is to compare it to king of the hill. In terms of bubble sort, we can act as though we start from the beginning of the array and as we go through the array, 2 numbers compete with each other. The larger number is the winning number and the number that wins gets to continue going through the array until the end of the array is reached.

# How does it work?

Bubble sort is done by completing one simple step. Compare 2 adjacent values and whichever value is smaller is moved to the left, then proceed to the next element. This comparison is done along the entire array until the end is reached. A second pass of the algorithm is done to make sure that there are no more conflictions. If during the second pass a confliction is found, then the algorithm swaps the values and another pass of bubble sort will be made. A pass will keep being made until the algorithm goes through the entire array without finding any conflicts.

# Big O Stats

|            | Worst Case | Average Case | Best Case |
|------------|------------|--------------|-----------|
| Runtime    | O(n^2)     | O(n^2)       |  O(n)     |
| Comparisons| O(n^2)     | O(n^2)       |  O(n)     |
| Swaps      | O(n^2)     | O(n^2)       |  O(1)     |

# Diagram

![Bubble Sort Diagram](data:image/png;base64,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)


# Step by Step Example

Let's take a look at the following array:


| 2 | 4 | 9 | 8 | 6 |
|---|---|---|---|---|
|[0]|[1]|[2]|[3]|[4]|


Now we will use bubble sort to sort the array.

## Pass 1

| 2 | 4 | 9 | 8 | 6 |
|---|---|---|---|---|
|[0]|[1]|[2]|[3]|[4]|

We begin the algorithm by comparing index 0 and 1. As we can see the values are 2 and 4 respectively. Since these 2 values are already sorted, the algorithm will continue to the next elements of the array. Now we will compare indicies 1 and 2. Once again, since the elements are already in order, the algorithm continues through the array. Comparing index 2 and 3, we can see that the the value at index 2 is greater than the vaue at index 3. Since this is the case, we will swap the values at those indicies to get the following new array:

| 2 | 4 | 8 | 9 | 6 |
|---|---|---|---|---|
|[0]|[1]|[2]|[3]|[4]|

We then move on through the array to compare index 3 and 4. Since the value at index 3 is greater than the value at index 4, we swap the values to get the following new array:

| 2 | 4 | 8 | 6 | 9 |
|---|---|---|---|---|
|[0]|[1]|[2]|[3]|[4]|

Once we have reached the end of the array, we have completed one pass of bubble sort.

## Pass 2

We now repeat the process, starting at index 0 of the array obtained after the first pass.

| 2 | 4 | 8 | 6 | 9 |
|---|---|---|---|---|
|[0]|[1]|[2]|[3]|[4]|

We first compare index 0 and 1 to see that they do not swap since index 1 is greater than index 0. We then continue through the array to compare index 1 and 2. Again, since the indicies are already in order, the algorithm continues through the array. Now comparing index 2 and 3, we see that the value at index 2 is greater than the value at index 3. Hence, a swap of the elements occurs to get the following new array:

| 2 | 4 | 6 | 8 | 9 |
|---|---|---|---|---|
|[0]|[1]|[2]|[3]|[4]|

After swapping the elements, we now compare the values at index 3 and 4. As we can see, the elements are already in order as the value at index 3 is less than the value at index 4. Now we have completed the second pass of bubble sort.

## Pass 3

Even though we can physically see that the array is already in order, we still must make one more pass. This is because, bubble sort does not stop until it goes through the entire array one time without any swaps occuring.

On this third pass, bubble sort will compare the values at each of the indicies (as done previously) and no swaps will occur since the array is already sorted at this point. This leaves the following array to be the final outcome of bubble sort on the initial starting array:

| 2 | 4 | 6 | 8 | 9 |
|---|---|---|---|---|
|[0]|[1]|[2]|[3]|[4]|

# Further Information

For more information about bubble sort, click [here](https://en.wikipedia.org/wiki/Bubble_sort).