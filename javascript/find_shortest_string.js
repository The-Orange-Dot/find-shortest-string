function findShortestString(arr) {
  let sorted = arr.sort((a, b) => (a.length < b.length ? -1 : 1));
  return sorted[0];
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'a'");
  console.log("=>", findShortestString(["aaa", "a", "bb", "ccc"]));

  console.log("");

  console.log("Expecting: 'hi'");
  console.log("=>", findShortestString(["cat", "hi", "dog", "an"]));

  console.log("");

  console.log("Expecting: 'lily'");
  console.log(
    "=>",
    findShortestString(["flower", "juniper", "lily", "dadelion"])
  );

  // BENCHMARK HERE
}

module.exports = findShortestString;

// Please add your pseudocode to this file
// And a written explanation of your solution

//Using the sort function, we check betwen two items in the array, and check their length.
//The shorter length would get sent to the front of the new array while the longer would get sent to the back.

//From there, once the array is sorted and put into a new variable, we take the first index [0] and return it
