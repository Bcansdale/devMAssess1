function itemsWithLength(items, length) {
    let result = [];

    for (let i = 0; i < items.length; i++) {
        if (items[i].length === length) {
            result.push(items[i]);
        }
    }
    return result;
}

console.log(itemsWithLength(['a', 'bbb', 'cccc', 'dddddd', 'eee'], 3));