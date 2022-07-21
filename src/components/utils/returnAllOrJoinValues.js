/**
 * Return "All" if every val of values array are presents in valuesNeeded array.
 * Otherwise join values with ", "
 *
 * @param values
 * @param valuesNeeded
 * @returns {string|*}
 */
const returnAllOrJoinValues = (values, valuesNeeded) => {
    if (valuesNeeded.every(el => values.includes(el))) {
        return 'all';
    }

    return values.join(', ');
}

export default returnAllOrJoinValues;
