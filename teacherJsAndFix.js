let i = 0;
let n = 6;
let arr = [];
let counter = 0;

for (i = 0; i < n; i++)
{
    arr[i] = 0;
}
arr[arr.length - 1] = 1;

while (counter < Math.pow(2, n) - 1)
{
    console.log('{');
    for (i = 0; i < arr.length; i++)
    {
        if (arr[i] == 1)
        {
            console.log(' ', i);
        }
    }
    console.log('}');
    i = arr.length - 1;

    while (arr[i] == 1)
    {
        arr[i] = 0;
        i--;
    }

    arr[i]++;
    counter++;
}
console.log('Подмножеств = ', counter);