class Order {
    wordCount;
    word;
    constructor(word, wordCount) {
        this.word = word;
        this.wordCount = wordCount;
    }
}

function wordCount(text) {
    text = normalize(text);
    const myMap = new Map();
    for (let item of text.split(' ')) {
        if (myMap.has(item)) {
            myMap.set(item, (myMap.get(item) + 1))
        } else {
            myMap.set(item, 1);
        }
    }
    const res = [];
    myMap.forEach((value, key) => { res.push(new Order(key, value)) })

    return res.sort((a,b) => {
        const compare = b.wordCount - a.wordCount ;
        return compare !=0 ? compare: a.word.localeCompare(b.word);
    });
    
}

function normalize(text) {
    const words = text.replace(/[^\p{L}\p{N}\s]/gu, " ");
    return words.replace(/\s+/g, " ").trim().toLowerCase();
}

const res = wordCount('O vento sussurra sons entre as árvores, sons que fazem animais correrem. A floresta e a natureza vibram com segredos e sons.');

console.log(res);
