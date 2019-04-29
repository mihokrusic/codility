function distinct(A) {
    A = [2,1,1,2,3,1];

    let distincts = {};

    for (var i = 0; i < A.length; i++) {
        let element = A[i];
        if (!distincts[element]) {
            distincts[element] = true;
        }
    }

    return Object.keys(distincts).length;
}

function maxProductOfThree(A) {
    A = [-3, 1, 2, -2, 5, 6];
    A = [-5, -6, -4, -7, -10];
    sortedA = A.sort((a, b) => a - b);

    let twoNegativesEdgeCase = sortedA[0] * sortedA[1] * sortedA[sortedA.length - 1];
    let usualResult = sortedA[sortedA.length - 1] * sortedA[sortedA.length - 2] * sortedA[sortedA.length - 3];
    return Math.max(twoNegativesEdgeCase, usualResult);
}

module.exports = {
    1: distinct,
    2: maxProductOfThree
};
