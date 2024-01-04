// The answer to the problem is using .filter() to sort the array of names for those with exactly 4 letters. I stored those names into a 
// variable named result and then returned it. 

function friend(friends){
  const result = friends.filter((name) => name.length === 4);
  return result;
}
