// Print numbers from 1 to 100.

// for (let i = 0; i <= 100; i++) {
//     console.log(i);
// }

// Print numbers from 100 to 1.
// for (let i = 100; i > 0; i--) {
//     console.log(i);
// }

// Print all even numbers from 1 to 50.

// for (let i = 0; i <= 50; i++) {
//     if (i % 2 == 0) console.log(i)

// }

// Print all odd numbers from 1 to 50.
// for (let i = 0; i <= 50; i++) {
//     if (i % 2 != 0) console.log(i)

// }


// Check whether a number is prime.

// let number = 2
// let isprime = true
// for (let i = 2; i < number; i++) {
//     if (number % i == 0) {
//         isprime = false
//         break
//     }

// }
// isprime ? console.log("prime") : console.log("not prime");


// Check whether a number is a palindrome.
// let input = "121"
// let reverse = ""
// for (let i = 0; i < input.length; i++) {
//     reverse += input[i]
// }
// if (input == reverse) console.log("palindrome");
// else console.log("not palindrome");

// Check whether a number is an Armstrong number.

// let number = "153"
// let result = 0
// // console.log(number.length);
// for (let i = 0; i < number.length; i++) {
//     let temp = 1
//     for (let j = 0; j < number.length; j++) {
//         temp *= (number[i])
//     }

//     result += temp
// }
// console.log(result);



// Find the greatest common divisor (GCD) of two numbers.
// let first = 8
// let second = 12
// let result = 0
// if (first < second) {
//     for (let i = 2; i < first; i++) {
//         if (first % i == 0 && second % i == 0) result = i
//         // console.log(result);

//     }
// } else {
//     for (let i = 2; i < second; i++) {
//         if (first % i == 0 && second % i == 0) result = i

//     }

// }
// console.log(result);




// Find the least common multiple (LCM) of two numbers.



// *
// **
// ***
// ****
// *****
// let star = ""
// for (let i = 1; i < 5; i++) {
//     star += "*"
//     console.log(star);
// }



// *****
// ****
// ***
// **
// *
// for (let i = 5; i > 0; i--) {
//     let star = ""
//     for (let j = 0; j < i; j++) {
//         star += "*"
//     }
//     console.log(star);
// }



// 1
// 12
// 123
// 1234
// 12345
// for (let i = 1; i <=5; i++) {
//     let print = ""
//     for (let j = 1; j <= i; j++) {
//         print += j


//     }
//     console.log(print);

// }



// 1
// 22
// 333
// 4444
// 55555

// for (let i = 1; i <= 5; i++) {
//     let print = ""
//     let number = i
//     for (let j = 1; j <= i; j++) {
//         print += number
//     }
//     console.log(print);

// }





//     *
//    ***
//   *****
//  *******
// *********

// for (let i = 1; i <= 5; i++) {
//     let star = ""
//     for (let k = 0; k < 5 - i; k++) {
//         star += " "

//     }
//     for (let j = 1; j <= 2 * i - 1; j++) {
//         star += "*"
//     }
//     console.log(star);

// }

// 1. Find the largest element
// let arr = [10, 5, 20, 8, 15];
// let greatest=0
// for (let i = 0; i < arr.length; i++) {
// if(greatest<arr[i]) greatest= arr[i]   
// }
// console.log(greatest);


// 2. Find the smallest element
// let arr = [10, 5, 20, 8, 15];
// let smallest = 0
// for (let i = 0; i < arr.length; i++) {
//     if (i == 0) {
//         smallest = arr[i]
//         continue
//     }
//     if (smallest > arr[i]) smallest = arr[i]


// }
// console.log(smallest);


// 3. Reverse an array
// let arr = [10, 5, 20, 8, 15];
// let start=0
// let end = arr.length-1
// while (start<end) {
//     let temp = arr[start]
//     arr[start]= arr[end]
//     arr[end]=temp
//     start++
//     end--
// }
// console.log(arr);

// 4. Find the second largest element
// let arr = [10, 5, 20, 8, 15];
// let high = 0
// let second = 0
// for (let i = 0; i < arr.length; i++) {
//     if (i == 0) {
//         high = arr[i]
//         continue
//     }
//     if (high > arr[i]) {
//         let temmp = high
//         high = arr[i]
//         second = temmp
//     } else {
//         second = arr[i]
//     }

// }
// console.log(second);

// 5. Find duplicate elements
// let arr = [1, 2, 3, 2, 4, 1, 5];
// let duplicate = []
// for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//         if (arr[i] == arr[j]) {
//             duplicate.push(arr[i])
//         }
//     }

// }
// console.log(duplicate);


// 6. Find the sum of array elements
// let arr = [10, 20, 30, 40];
// let sum = 0
// for (let i = 0; i < arr.length; i++) {
//     sum += arr[i]

// }
// console.log(sum);



// 7. Count even and odd numbers
// let arr = [1, 2, 3, 4, 5, 6, 7, 8];

// let even =0
// let odd = 0
// for (let i = 0; i < arr.length; i++) {
// if(arr[i]%2 == 0){
//     even++
// }else{
//     odd++
// }

// }
// console.log(odd, even);


// 8. Find the frequency of each element
// let arr = [1, 2, 2, 3, 1, 4, 2];
// const obj = {};
// for (let i = 0; i < arr.length; i++) {
//     if (i == 0) {
//         obj[arr[i]] = 1
//     }
// if (obj[arr[i] == 0]) {
//     console.log(obj[arr[i]]);

//     obj[arr[i]] = obj[arr[i] ?? 0] + 1
// }
// else {
//     console.log(obj[arr[i]]);

// }
// }


// 9. Remove duplicates from an array

// let arr = [1, 2, 2, 3, 4, 4, 5];

// for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//         if (arr[i] == arr[j]) arr.splice(i, 1)

//     }
// }
// console.log(arr);


// 10. Find the missing number
// let arr = [1, 2, 4, 5, 6];
// let miss = 0
// for (let i = 0; i < arr.length; i++) {

//     if (arr[i] + 1 != arr[i + 1]) {
//         miss = arr[i] + 1
//         break
//     }

// }
// console.log(miss);



// 1. Frequency of elements
// let arr = [1, 2, 2, 3, 1, 4, 2];
// let obj = {}
// for (let i = 0; i < arr.length; i++) {
//     if (!obj[arr[i]]) {
//         obj[arr[i]] = 1
//     } else {
//         obj[arr[i]]++
//     }
// }
// console.log(obj);


// 2. Frequency of characters
// let str = "javascript";
// let obj = {}
// for (let i = 0; i < str.length; i++) {
//     if (!obj[str[i]]) {
//         obj[str[i]] = 1
//     } else {
//         obj[str[i]]++
//     }
// }
// console.log(obj);


// 3. Find the first non-repeating character

// let str = "aabbcdd";
// let obj = {}
// for (let i = 0; i < str.length; i++) {
//     if (!obj[str[i]]) {
//         obj[str[i]] = 1
//     } else {
//         obj[str[i]]++
//     }
// }

// for (const key of Object.keys(obj)) {
//     if (obj[key] == 1) {
//         console.log(key)
//     }

// }

// 4. Find duplicate elements using an object
// let arr = [1, 2, 3, 2, 4, 1, 5];
// let obj = {}
// for (let i = 0; i < arr.length; i++) {
//     if (!obj[arr[i]]) {
//         obj[arr[i]] = 1
//     } else {
//         obj[arr[i]]++
//     }
// }

// for (const key of Object.keys(obj)) {
//     if (obj[key] > 1) {
//         console.log(key);
//     }
// }

// 5. Two Sum

// let arr = [2, 7, 11, 15];
// let target = 9;
// outerLoop: for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length; j++) {
//         if (arr[i] + arr[j] == target) {
//             console.log(i, j);
//             break outerLoop
//         }
//     }

// }


// 6. Find the first repeated element
// let arr = [5, 3, 4, 3, 2, 5];
// let obj = {}
// outerloop: for (let i = 0; i < arr.length; i++) {
//     if (!obj[arr[i]]) {
//         obj[arr[i]] = 1
//     } else if (obj[arr[i]] >= 1) {
//         console.log(arr[i])
//         break outerloop

//     }
// }


// 7. Count vowels using an object
let str = "hello world";
let arr = ["a", "e", "i", "o", "u"]
let obj = {}