function binaryGap(n) {
    if (isNaN(n))
        return 0;

    let binary = parseInt(n, 10).toString(2);

    let gap = 0;
    let maxGap = 0;
    for (var i = 0; i < binary.length; i++) {
        if (binary[i] !== '0') {
            if (gap > maxGap)
                maxGap = gap;
            gap = 0;
        }
        else
            gap++;
    }

    return maxGap;
}

module.exports = {
    1: binaryGap
};
