function stickyCase(string) {
    return string
        .split('')
        .map((char, index) => {
            if (index % 2 === 0) {
                return char.toUpperCase();
            } else {
                return char.toLowerCase();
            }
        })
        .join('');
}

console.log(stickyCase('hello world'));