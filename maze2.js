let n = 11;
let str = [];

for (let i = 0; i < n; i++)
{
    str[i] = i;
}

for (let i = 0; i < n + 2; i++)
{
    process.stdout.write('1');
}
process.stdout.write('\n');

for (let i = 0; i < n; i++)
{
    // Объединение (есть стена или её нету)
    for (let j = 0; j < n - 1; j++)
    {
        let toDeleteWall = Math.random() * (100 - 1) + 1;

        if (toDeleteWall >= 50)
        {
            str[j + 1] = str[j];
        }
    }

    // Множества
    process.stdout.write('1');
    for (let j = 0; j < n; j++)
    {
        // стена ставится в том случае, если элемент справа не входит в множество
        // иначе остаётся проход
        if (str[j] != str[j + 1])
        {
            process.stdout.write('1');
        }
        else
        {
            process.stdout.write('0');
        }
    }
    process.stdout.write('1');
    process.stdout.write('\n');

    // Разделители
    process.stdout.write('1');
    for (let j = 0; j < n; j++)
    {
        if (str[j] != str[j + 1])
        {
            process.stdout.write('0');
        }
        else
        {
            process.stdout.write('1');
        }
    }
    process.stdout.write('1');

    process.stdout.write('\n');
}

for (let i = 0; i < n + 2; i++)
{
    process.stdout.write('1');
}