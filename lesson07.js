function brackets(S) {
    S = S || '';
    if (S.length === 0)
        return 1;

    let bracketDict = {
        ')': '(',
        '}': '{',
        ']': '['
    };

    let stack = [];
    for (let i = 0; i < S.length; i++) {
        switch (S[i]) {
            case '(':
            case '{':
            case '[':
                stack.push(S[i]);
                break;
            case ')':
            case '}':
            case ']':
                if (stack.length === 0 || stack[stack.length - 1] !== bracketDict[S[i]])
                    return 0;
                stack.pop();
                break;
            }
    }

    return (stack.length === 0 ? 1 : 0);
}

function fish(A, B) {
    A = [4, 3, 2, 1, 5];
    B = [0, 1, 0, 0, 0];

    let C = A.map((item, index) => {
        return {
            value: item,
            direction: B[index],
            alive: true
        };
    });

    while (true) {
        let i = 0;
        let deaths = 0;
        while (i < C.length) {

            if (
                (!C[i].alive) ||
                (C[i].direction === 0 && i === 0) ||
                (C[i].direction === 1 && i === C.length - 1) ||
                (C[i].direction === 0 && (C[i].direction === C[i - 1].direction || !C[i - 1].alive)) ||
                (C[i].direction === 1 && (C[i].direction === C[i + 1].direction || !C[i + 1].alive))
            ) {
                i++;
                continue;
            }

            deaths++;

            if (C[i].direction == 0) {
                if (C[i].value > C[i - 1].value) {
                    C[i - 1].alive = false;
                }
                else {
                    C[i].alive = false;
                }
            }

            if (C[i].direction == 1) {
                if (C[i].value > C[i + 1].value) {
                    C[i + 1].alive = false;
                }
                else {
                    C[i].alive = false;
                }
            }

            i++;
        }

        if (deaths === 0)
            break;

        C = C.filter((item) => item.alive);
    }

    return C.length;
}

function nesting(S) {
    return brackets(S);
}

function stoneWall(H) {
    H = [8, 8, 5, 7, 9, 8, 7, 4];

    function getEnd(start, height) {
        let end;
        for (var i = start; i < H.length; i++) {
            if (H[i] < height) {
                end = i - 1;
                break;
            }
        }

        if (typeof end === 'undefined')
            end = H.length - 1;

        if (end < start)
            end = start;

        return end;
    }

    let finishedCount = 0;
    let blocks = 0;
    while (true) {
        let i = 0;
        while (i < H.length) {
            if (H[i] === 0) {
                i++;
                continue;
            }

            let height = H[i];
            let start = i;
            let end = getEnd(i, height);

            for (let j = start; j <= end; j++) {
                if (H[j] === height) {
                    H[j] = 0;
                    finishedCount++;
                }
            }

            i = end + 1;
            blocks++;
        }

        if (finishedCount === H.length)
            break;
    }

    return blocks;
}

module.exports = {
    1: brackets,
    2: fish,
    3: nesting,
    4: stoneWall
};
