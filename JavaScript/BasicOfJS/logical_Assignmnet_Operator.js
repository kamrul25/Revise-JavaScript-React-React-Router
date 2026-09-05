// Logical Assignment Operators are &&=, ||=, ??=

// 1: Or logical assignment operators ||= and the falsy trap
// when left is false right will assign
let score = 0;
score ||= 10;
console.log(score);

// 2: The Nullish Blind Spot (??=)
let username = "";
username ??= "Guest";
console.log(username); // Output: "" (It didn't replace the empty string)

// 3: Short-Circuiting Side Effects (&&=)
let isLoggedIn = true;
let counter = 0;

const trackVisit = () => {
  counter++;
  return "Visitor";
};

isLoggedIn && +trackVisit();
// Since isLoggedIn is true, trackVisit() runs and counter become  1

let isLoggedOut = false;
isLoggedOut &&= trackVisit();
// Since isLoggedOut is false, the right side is skipped entirelly and counter ramains 1 and tracVisit() is never executed
