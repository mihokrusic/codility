function passingCars(A) {
    A = [0, 1, 0, 1, 1];

    let goingEastCars = 0;
    let goingWestCars = 0;
    let passingCars = 0;
    for (let i = 0; i < A.length; i++) {
        if (i === 0) {
            for (let j = 0; j < A.length; j++) {
                if (A[j] === 0)
                    goingEastCars++;
                else
                    goingWestCars++;
            }
        }

        if (A[i] === 0) {
            goingEastCars--;
            passingCars += goingWestCars;
        }
        else {
            goingWestCars--;
        }

        if (passingCars > 1000000000)
            return -1;
    }

    return passingCars;
}

function genomicRangeQuery(S, P, Q) {
    S = 'CAGCCTA';
    P = [2, 5, 0];
    Q = [4, 5, 6];

    let genes = [];
    let results = [];

    // Setup
    let totalMinImpact = 5;
    for (let i = 0; i < S.length; i++) {
        let geneValue = 0;
        switch (S[i]) {
            case 'A':
                geneValue = 1;
                totalMinImpact = 1;
                break;
            case 'C':
                geneValue = 2;
                if (geneValue < totalMinImpact)
                    totalMinImpact = geneValue;
                break;
            case 'G':
                geneValue = 3;
                if (geneValue < totalMinImpact)
                    totalMinImpact = geneValue;
                break;
            case 'T':
                geneValue = 4;
                if (geneValue < totalMinImpact)
                    totalMinImpact = geneValue;
                break;
        }
        genes.push(geneValue);
    }

    // Running
    for (let i = 0; i < P.length; i++) {
        let minImpact = 5;
        for (let j = P[i]; j <= Q[i]; j++) {
            if (minImpact === totalMinImpact)
                break;

            if (genes[j] < minImpact)
                minImpact = genes[j];
        }
        results.push(minImpact);
    }

    return results;
}

function minAvgTwoSlice() {

}

function countDiv(A, B, K) {
    A = 101;
    B = 29000;
    K = 10000;

    let remainderForA = (A % K);
    let newA = remainderForA === 0
        ? A
        : A + (K - remainderForA);

    if (newA > B)
        return 0;

    let numberOfDivs = Math.floor((B - newA) / K) + 1;

    return numberOfDivs;
}

module.exports = {
    1: passingCars,
    2: genomicRangeQuery,
    3: minAvgTwoSlice,
    4: countDiv
};
