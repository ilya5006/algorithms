let printArr = (arr) =>
{
    for (let row = 0; row < n; row++)
    {
        process.stdout.write(arr[row] + ' ');
    }

    process.stdout.write('\n');
}

let n = 7;

let arrSets = [];
let uniqueValue = 0;

for (let i = 0; i < n; i++)
{
    arrSets[i] = uniqueValue;
    uniqueValue++;
}

for (let row = 0; row < n; row++)
{
    let arrDashes = [];

    // Случайным образом объединяем множества
    for (let elem = 0; elem < n; elem++)
    {
        let rand = Math.random() * (100 - 1) + 1;

        if (rand >= 60)
        {
            arrSets[elem + 1] = arrSets[elem];
        }
    }

    for (let i = 0; i < n; i++)
    {
        if (arrSets[i] != arrSets[i - 1])
        {
            arrDashes[i] = '0';
        }
        else
        {
            arrDashes[i] = '1';
        }
    }

    printArr(arrSets);
    printArr(arrDashes);

    let lastEl = arrSets[n-1];

    for (let i = 0; i < n; i++)
    {
        if (arrDashes[i] == '1')
        {
            arrSets[i] = uniqueValue;
            uniqueValue++;
        }
    }
    // printArr(arrSets);
    if (arrSets[n-1] == lastEl)
    {
        arrSets[n-1] = uniqueValue;
        uniqueValue++;
    }
}