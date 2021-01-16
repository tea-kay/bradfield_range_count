# bradfield_csi

Bradfield take-home exercises.

'range_count_binary.py' contains the binary search algorithm from the "Range Count" portion of the exam
'range_count_linear.py' contains the linear search algorithm from the "Range Count" portion of the exam

Both files when run in the terminal will print the value of total number of occurences 'x'.
When you run the file it will also print how long the algorithm took to run.

Ex.

After running:

python range_count_binary.py

Result:

python range_count_binary.py

2
binary search takes 0.000025

--

To test each algorithm you can generate a random array using the 'random_array_generator.js' file.

Then with the array provided you can change the values inside of either search file.

Don't for get to change the 'x' value for the value you want to count occurences of.

Ex.

Open 'range_count_binary.py' in an editor of your choice

Go to line 54 to:

# Driver code

arr = [1, 1, 2, 4, 5, 5, 5, 5, 7, 7, 9, 9, 9, 10, 10, 11, 11]
n = len(arr)
x = 11

Change the x value here for the number you want to count occurences of and add the newly generated arrary to arr.

Please open and review '2_Range_Count_doc.txt' for the answer to the final question.
