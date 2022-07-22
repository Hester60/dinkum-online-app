/**
 * Return "All" if every val of values array are presents in valuesNeeded array.
 * Otherwise join values with ", "
 *
 * @param values
 * @param valuesNeeded
 * @param allWord
 * @returns {string|*}
 */
const returnAllOrJoinValues = (values, valuesNeeded, allWord = 'all') => {
    if (valuesNeeded.every(el => values.includes(el))) {
        return allWord;
    }

    return values.join(', ');
}

export default returnAllOrJoinValues;
