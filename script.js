function canBeEqual(target, arr) {
    return target.sort().join(' ') === arr.sort().join(' ');
}

console.log(canBeEqual([9],[8])); // false
console.log(canBeEqual([9],[9])); // ture