/**
 * Anagrama
 * ancora
 * arocna
 */

function isAnagram(str1: string, str2: string) {
    if (str1.length != str2.length) return false;

    let concated = str1.concat(str2).split('').sort();
    for (let i = 0; i < concated.length; i += 2) {
        if (concated[i] != concated[i + 1]) return false;
    }
    return true;
}

let res = isAnagram('DIVA', 'VIDA');
console.log(res)