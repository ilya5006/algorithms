let grid = [];

const SIZE = 25;

let makeBorder = (leftBorder = 0, rightBorder = SIZE - 1, topBorder = 0, bottomBorder = SIZE - 1) =>
{
    if (rightBorder - leftBorder <= 6 || bottomBorder - topBorder <= 6)
    {
        return;
    }
    
    let startCell =
    {
        x: 0,
        y: 0,
        verticalOrHorizontal: 0    // 0 - vertical, 1 - horizontal
    }

    startCell.verticalOrHorizontal = Math.round(Math.random());
    let isBorderVertical = startCell.verticalOrHorizontal === 0;

    if (isBorderVertical)
    {
        startCell.x = Math.floor(Math.random() * ((rightBorder - 3) - (leftBorder + 3) + 1)) + (leftBorder + 3);
        startCell.y = topBorder;

        for (let i = startCell.y; i <= bottomBorder; i++)
        {
            let x = startCell.x;
            let y = i;
            grid[y][x] = '1';
        }

        makeBorder(leftBorder, startCell.x - 1, topBorder, bottomBorder);
        makeBorder(startCell.x + 1, rightBorder, topBorder, bottomBorder);
    }
    else
    {
        startCell.y = Math.floor(Math.random() * ((bottomBorder - 3) - (topBorder + 3) + 1)) + (topBorder + 3);
        startCell.x = leftBorder;

        for (let i = startCell.x; i <= rightBorder; i++)
        {
            let x = i;
            let y = startCell.y;
            grid[y][x] = '1';
        }

        makeBorder(leftBorder, rightBorder, topBorder, startCell.y - 1);
        makeBorder(leftBorder, rightBorder, startCell.y + 1 , bottomBorder);
    }
}

for (let i = 0; i < SIZE; i++)
{
    grid.push([]);
    let oneOrZero = '0';
    for (let j = 0; j < SIZE; j++)
    {
        oneOrZero = (i === 0 || i === SIZE - 1) || (j === 0 || j === SIZE - 1) ? '1' : '0';
        grid[i].push(oneOrZero);
    }
}

makeBorder();

for (let i = 0; i < SIZE; i++)
{
    let tmpStr = '';
    for (let j = 0; j < SIZE; j++)
    {
        tmpStr += grid[i][j] + ' ';
    }
    console.log(tmpStr);
}