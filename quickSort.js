let quickSort = (arr, first = 0, last = arr.length - 1) =>
{
    let i = first;
    let j = last;

    let supportedElementIndex = Math.floor((i + j) / 2);
    let supportedElement = arr[supportedElementIndex];

    while (i <= j)
    {
        while (arr[i] < supportedElement) i++;
        while (arr[j] > supportedElement) j--;

        if (i <= j)
        {
            [arr[i], arr[j]] = [arr[j], arr[i]];

            i++;
            j--;
        }
    }

    if (j > first) quickSort(arr, first, j);
    if (i < last) quickSort(arr, i, last);

    return arr;
}

let arr = quickSort([4, -24, 5, 16, 0, 200, 111, 1, 4, -4, 115, -140, 11]);
let showTmp = '';
for (let a = 0; a < arr.length; a++)
{
    showTmp += arr[a] + ' ';
}
console.log(showTmp);