const email1 = 'joao.silva23@yahoo.com.br';
const email2 = 'maria123@gmail.com';

function getUserAndDomain(email: string): User {
    if (!email) return null;
    const split = email.split('@');
    const regex = /.br$/;
    return  {user: split[0], domain: split[1], brazilian: (regex.test(split[1])) ? 'sim' : 'não'};
}

console.log('##')
const u1: User = getUserAndDomain(email1);
console.log(`In:${email1}\t\tOut: [User: ${u1.user}, Domain: ${u1.domain}, Brazilian: ${u1.brazilian}]`)

console.log('##')
const u2: User = getUserAndDomain(email2);
console.log(`In:${email2}\t\tOut: [User: ${u2.user}, Domain: ${u2.domain}, Brazilian: ${u2.brazilian}]`)


interface User {
    user: string,
    domain: string,
    brazilian: string

}