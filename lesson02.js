function oddOccurrencesInArray(Ak) {
    A = [9, 3, 9, 3, 9, 7, 9];

    let d = new Set();

    for (var i = 0; i < A.length; i++) {
        const value = A[i];
        if (d.has(value))
            d.delete(value);
        else
            d.add(value);
    }

    return d.values().next().value;
}

function cyclicRotation(A, K) {
    A = ['a','b','c','d','e','f'];
    K = 5;

    if (!Array.isArray(A))
        A = [];

    if (isNaN(K))
        K = 0;

    if (K > A.length)
        K = K % A.length;

    const newArray = A.map(function(element, index, array) {
        if ((index - K) >= 0)
            return array[index-K];
        else
            return array[index - K + array.length];

    });

    return newArray;
}

module.exports = {
    1: oddOccurrencesInArray,
    2: cyclicRotation
};
