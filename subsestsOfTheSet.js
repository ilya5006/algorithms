let n = 15;

let arr = [];

for (let i = 0; i <= n - 1; i++)
{
    arr.push(i);
}

let maxSubsetInt = Math.pow(2, n) - 1;
let maxSubsetBinary = maxSubsetInt.toString(2);

for (let i = maxSubsetInt; i >= 1; i--)
{
    let currentSubsetBinary = i.toString(2);

    let howMuchToInsert = maxSubsetBinary.length - currentSubsetBinary.length; 
    for (let insertedCount = 0; insertedCount < howMuchToInsert; insertedCount++)
    {
        currentSubsetBinary = '0' + currentSubsetBinary;
    }

    let subset = '';

    for (let currentBinaryDigitIndex = 0; currentBinaryDigitIndex < maxSubsetBinary.length; currentBinaryDigitIndex++)
    {
        if (currentSubsetBinary[currentBinaryDigitIndex] == '1')
        {
            subset = subset + arr[currentBinaryDigitIndex] + ', ';
        }
    }

    subset = '{ ' + subset + ' } ';

    console.log(subset);
}