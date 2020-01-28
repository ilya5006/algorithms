let printMaze = () =>
{
    for (let row = 0; row < n; row++)
    {
        for (let column = 0; column < n; column++)
        {
            process.stdout.write(`${maze[row][column]} `);
        }
    
        process.stdout.write('\n');
    }

    process.stdout.write('\n------\n');
}

let maze = [];
let n = 9;

let dashes = [];
for (let i = 0; i < n; i++)
{
    dashes.push('-');
}

let uniqueValue = 10;

for (let i = 0; i < n; i++)
{
    if (i % 2 == 0)
    {
        maze.push(dashes);
        continue;
    }
    let row = [];

    for (let j = 0; j < n; j++)
    { 
        let isFirstOrLastElement = (j == 0 || j == n - 1);
        let isEven = (j % 2 == 0 && j != 0);

        let isWall = isFirstOrLastElement || isEven;
    
        if (isWall)
        {
            row.push('|');
        }
        else
        {
            row.push(uniqueValue);
            uniqueValue++;
        }
    }

    maze.push(row);
}

process.stdout.write('\n--------------------\n\n');

// Случайным образом пробиваем стены в лабиринте
for (let i = 1; i < n - 1; i++)
{
    for (let j = 1; j < n - 3; j+=2)
    {    
        let toDeleteWall = Math.floor(Math.random() * (100 - 1) + 1);

        if (toDeleteWall >= 50)
        {
            if (i % 2 == 1) // с числами
            {
                maze[i][j + 1] = ' ';
                // process.stdout.write(`i: ${i};\nj + 1: ${j + 1};\n`);
            }
            else // с разделителями
            {
                maze[i][j] = ' '; 
                // process.stdout.write(`i: ${i};\nj: ${j};\n`);
            }
            printMaze();
        }
    }
}

// Объединяем в множества
for (let i = 1; i < n - 1; i++)
{
    for (let j = 1; j < n; j+=2)
    {    
        if (i % 2 == 1) // с числами
        {
            if (maze[i][j + 1] != '|')
            {
               maze[i][j + 2] = maze[i][j]; 
            }
        }
        else // с разделителями
        {
            if (maze[i][j] != '-')
            {
                maze[i + 1][j] = maze[i - 1][j];
            }
        }
    }
}

printMaze();