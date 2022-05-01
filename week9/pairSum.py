# Function to find a pair in an array with a given sum using hashing
def pairSum(nums,n, target):
	# create an empty dictionary
	d = {}
	# do for each element
	for i, e in enumerate(nums):
		# check if pair (e, target - e) exists
		# if the difference is seen before, print the pair
		if target - e in d:
			return 1
		# store index of the current element in the dictionary
		d[e] = i
	# No pair with the given sum exists in the list
	return 0
