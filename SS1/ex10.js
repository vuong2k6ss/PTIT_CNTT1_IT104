function groupArray(words){
    const map = new Map();
    for (let word of words) {
        const key = word.split('').sort().join('');

        if (!map.has(key)) {
            map.set(key, []);
        }
        map.get(key).push(word);
    }
    return Array.from(map.values());
}
const input = ["eat", "tea", "tan", "ate", "nat", "bat"];
const result = groupArray(input);
console.log(result);