function countFactors(N) {
    if (N === 1)
        return 1;

    let factors = 0;
    let i = 1;
    while (i * i <= N) {
        if (N % i === 0) {
            if (i * i === N)
                factors++;
            else
                factors+=2;
        }

        i++;
    }

    return factors;
}

function minPerimiterRectangle(N) {
    let minPerimiter = Number.MAX_SAFE_INTEGER;
    let currentPermiter = 0;
    let i = 1;
    while (i * i <= N) {
        if (N % i === 0) {
            currentPermiter = 2 * ((N / i) + i);
            if (currentPermiter < minPerimiter)
                minPerimiter = currentPermiter;
        }

        i++;
    }

    return minPerimiter;
}

function peaks(A) {
    A = [1, 2, 3, 4, 3, 4, 1, 2, 3, 4, 6, 2];

    let peaks = {};

    for (let i = 1; i < A.length - 1; i++) {
        if (A[i] > A[i - 1] && A[i] > A[i + 1])
            peaks[i] = true;
    }

    let blocks = [];
    let i = 1;
    let maxBlocks = Math.floor(A.length / 3);
    while (i * i <= A.length) {
        if (A.length % i === 0) {
            blocks.push(i);
            if (i * i !== A.length && A.length / i < maxBlocks)
                blocks.push(A.length / i);
        }

        i++;
    }
    blocks.sort((a, b) => a > b);

    console.log(peaks);
    console.log(blocks);

    return 12;
}

module.exports = {
    1: countFactors,
    2: minPerimiterRectangle,
    3: peaks,
};



