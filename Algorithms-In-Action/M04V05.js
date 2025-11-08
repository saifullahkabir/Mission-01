//Problem Statement

//A palindrome is a word, phrase, or sequence of characters that reads the same backward as it does forward.

//Your task is to write a JavaScript function, isPalindrome(str), that takes a string str
//and returns true if the string is a palindrome, and false otherwise.

//The function must work for complex phrases, not just single words. To do this, your function must:
//   Be case-insensitive (i.e., 'R' is treated the same as 'r').
//   Ignore all non-alphanumeric characters (i.e., spaces, punctuation like commas, colons, periods, etc.).

//? Input and Output
// "A man, a plan, a canal: Panama" -> true
// "Level" -> true
// "car" -> false

//* Time Complexity: O(n)
//* Space Complexity: O(n)
const isPalindrome = (str) => {
    // O(n)
    const normalized = str.toLowerCase().replace(/[^a-z0-9]/g, "");

    // O(n)
    const reversed = normalized.split("").reverse().join("");

    console.log(normalized);
    console.log(reversed);

    if (reversed === normalized) {
        return true;
    }

    return false;

}
// console.log((isPalindrome('car')));


//* Time Complexity: O(n)
//* Space Complexity: O(n)
const isPalindromeTwoPointer = (str) => {
    // O(n)
    const normalized = str.toLowerCase().replace(/[^a-z0-9]/g, "");

    let left = 0;
    let right = normalized.length - 1;

    console.log('left', left);
    console.log('right', right);

    while (left < right) {
        if (normalized[left] !== normalized[right]) {
            return false;
        }

        left++;
        right--;

    }

    return true;
}

console.log(isPalindromeTwoPointer("A man, a plan, a canal: Panama"));