function total(visitors) {

    const res = new Set();
    for (const item of visitors) {
        res.add(item.split(',')[0]);
    }
    return res;
}



const res = total([
    "ana,2024-07-04T21:42:40.353283800Z,https://blog.com/login",
    "bob,2024-07-04T21:42:44.571283800Z,https://blog.com/news",
    "maria,2024-07-04T21:42:46.394283800Z,https://blog.com/shop",
    "ana,2024-07-04T21:42:50.026283800Z,https://blog.com/news"
]);

console.log(res.size);
