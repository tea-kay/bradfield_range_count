from time import time
t0 = time()
# Returns number of times x  
# occurs in arr[0..n-1] 
def countOccurrences(arr, n, x): 
    res = 0
    for i in range(n): 
        if x == arr[i]: 
            res += 1
    return res 
   
# Driver code 
arr = [1, 1, 2, 4, 5, 5, 5, 5, 7, 7, 9, 9, 9, 10, 10, 11, 11]
n = len(arr) 
x = 11
print (countOccurrences(arr, n, x)) 
t1 = time()
print 'linear search takes %f' %(t1-t0)