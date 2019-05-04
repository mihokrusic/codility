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

    let peaks = [];

    // Get peaks
    for (let i = 1; i < A.length - 1; i++)
        if (A[i] > A[i - 1] && A[i] > A[i + 1])
            peaks.push(i);

    if (peaks.length === 0)
        return 0;

    // Get blocks
    let blocks = [];
    let i = 2;
    while (i * i <= A.length) {
        if (A.length % i === 0) {
            blocks.push(i);
            if (i * i !== A.length)
                blocks.push(A.length / i);
        }
        i++;
    }
    blocks.sort((a, b) => a > b);

    // Check blocks
    let maxPossibleBlock = 1;
    for (let i = 0; i < blocks.length; i++) {
        let blockIsOk = true;
        let block = blocks[i];
        let blockSize = A.length / block;
        for (let b = 0; b < block; b++) {
            let blockSectionStart = blockSize * b;
            let blockSectionEnd = blockSize * (b + 1) - 1;
            let blockSectionHasPeak = false;
            for (let k = 0; k < peaks.length; k++) {
                if (peaks[k] < blockSectionStart)
                    continue;

                if (peaks[k] >= blockSectionStart && peaks[k] <= blockSectionEnd) {
                    blockSectionHasPeak = true;
                    break;
                }

                if (peaks[k] > blockSectionEnd)
                    break;
            }
            if (!blockSectionHasPeak) {
                blockIsOk = false;
                break;
            }
        }

        if (blockIsOk)
            maxPossibleBlock = block;
    }

    return maxPossibleBlock;
}

function flags(A) {
    A = [1, 5, 3, 4, 3, 4, 1, 2, 3, 4, 6, 2];

    let peaks = [];

    // Get peaks
    for (let i = 1; i < A.length - 1; i++)
        if (A[i] > A[i - 1] && A[i] > A[i + 1])
            peaks.push(i);

    if (peaks.length === 0)
        return 0;

    let maxFlags = 1;
    for (let i = 2; i <= peaks.length; i++) {
        let currentFlagCount = 1;
        let lastFlagPeak = peaks[0];
        let flagsCanBePlaced = false;
        for (let j = 1; j < peaks.length; j++) {

            if (peaks[j] - lastFlagPeak >= i) {
                currentFlagCount++;
                lastFlagPeak = peaks[j];
            }

            if (currentFlagCount === i)
                flagsCanBePlaced = true;
        }

        if (flagsCanBePlaced)
            maxFlags = i;
        else
            break;
    }

    return maxFlags;
}

module.exports = {
    1: countFactors,
    2: minPerimiterRectangle,
    3: peaks,
    4: flags
};



