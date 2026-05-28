/**
 * Transaction possivelmente inválida se:
 *   - O montante execeder 1000 , Ou
 *   - Se ocorrer entre 60 min(inclusivo) de outra transacao como mesmo nome em diferente cidade
 * 
 * [name, time, amount, city]
 */

class Transaction {
    name;
    time;
    amount;
    city;
    assigner;

    constructor(trans) {
        const [name, time, amount, city] = trans.split(',');
        this.name = name;
        this.time = parseInt(time);
        this.amount = parseInt(amount);
        this.city = city;
        this.assigner = trans;
    }
}
function invalidTransactions(transactions) {
    const invalids = [];
    const myMap = new Map();
    for (let trans of transactions) {
        const transaction = new Transaction(trans);
        if (transaction.amount > 1000) {
            invalids.push(trans);
            continue;
        }

        if (myMap.has(transaction.name)) {
            const previousTrans = myMap.get(transaction.name);

            if (transaction.city !== previousTrans.city
                && (transaction.time - previousTrans.time) <= 60) {
                invalids.push(trans, previousTrans.assigner);
            } else {
                myMap.set(transaction.name, transaction);
            }
        } else {
            myMap.set(transaction.name, transaction);
        }


    }
    return invalids;
}

console.log(invalidTransactions(["alice,20,800,mtv", "alice,50,100,beijing"]));
console.log(invalidTransactions(["alice,20,800,mtv", "alice,50,1200,mtv"]));
console.log(invalidTransactions(["alice,20,800,mtv", "bob,50,1200,mtv"]));
console.log(invalidTransactions(["alice,20,800,mtv","alice,50,100,mtv","alice,51,100,frankfurt"]));


