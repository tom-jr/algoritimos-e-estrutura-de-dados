function considerOnyNumber(input: string): string {
    const regex = /\D/g;
    return input.replace(regex, '');
}

const doc1 = '87409217293';
const doc2 = '874092172-93';
const doc3 = '874.092.172-93';

console.log("######")
console.log(`In: ${doc1}\t\tout: ${considerOnyNumber(doc1)}`);
console.log(`In: ${doc2}\tout: ${considerOnyNumber(doc2)}`);
console.log(`In: ${doc3}\tout: ${considerOnyNumber(doc3)}`);