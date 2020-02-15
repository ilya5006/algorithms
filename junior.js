let dec2bin = (dec, bin = '') =>
{
    if (dec < 2) return dec + bin;
    bin = dec % 2 + bin;
    dec = Math.floor(dec / 2);
   
    return dec2bin(dec, bin);
}

let isPowerOfTwo = (num) =>
{
    return Math.log2(num) % 1 === 0;
}

let reverseWords = (str) =>
{
    let strArr = str.split(' ');
    for (let i = 0; i < strArr.length; i++)
    {
        strArr[i] = strArr[i].split('').reverse().join('');
    }
    return strArr.join(' ');
}

let isAnagram = (str1, str2) =>
{
    let str1Sorted = str1.split('').sort().join('');
    let str2Sorted = str2.split('').sort().join('');

    return str1Sorted === str2Sorted;
}

let isPalindrome = (str) =>
{
    let strLowerCaseNoSpaces = str.toLowerCase().replace(/\s/gi, '');

    console.log(strLowerCaseNoSpaces);
    return strLowerCaseNoSpaces === strLowerCaseNoSpaces.split('').reverse().join('');
}

let isIsomorphic = (str1, str2) =>
{
    let map = {};

    if (str1.length !== str2.length) return false;

    for (let i = 0; i < str1.length; i++)
    {
        let charStr1 = str1[i];
        let charStr2 = str2[i];

        if (!map[charStr1]) map[charStr1] = charStr2;
        if (map[charStr1] !== charStr2) return false;
    }

    return true;
}

let findLargestDifference = (arr) =>
{
    for (let i = 1; i < arr.length; i++)
    {
        
    }
}

console.log(findLargestDifference([1, 2, 5, 6, 4, 20, 152, 11]));