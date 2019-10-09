First loop through the given array of scores.
Then store the values in a new temp array.
Then store the new sorted values in nums array.
Find the index of the middle element of nums array.
If the nums - array length is odd, push the value of the middle element in a new array-medians.
If the nums- array length is even, push into the medians array the average value of the sum of: the middle element (nums[mid]) plus the value of the one before it (nums[mid-1]);
Return the  final medians array with all median score values rounded up to the closest integer.
