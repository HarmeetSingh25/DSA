let a = "hello";

let palindrome = true;

let start = 0;
let end = a.length - 1;

while (start < end) {
  if (a[start] !== a[end]) {
    palindrome = false;
    break;
  }
  start++;
  end--;
}

if (palindrome) {
  console.log("palindrome");
} else {
  console.log("not palindrome");
}
