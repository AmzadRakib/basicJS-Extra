const products = [
    { id: 1, name: 'xaomi Phone', price: 10000 },
    { id: 2, name: 'iPhone', price: 10000 },
    { id: 3, name: 'Mac Book Air', price: 10000 },
    { id: 4, name: 'one Plus Phone ', price: 10000 },
    { id: 5, name: 'Lenovo Yoga Laptop', price: 10000 },
    { id: 7, name: 'wlaton laptop', price: 10000 },
    { id: 8, name: 'wlaton phone', price: 10000 },
    { id: 9, name: 'sumsung phone', price: 10000 },
    { id: 10, name: 'hp laptop', price: 10000 },
    { id: 11, name: 'dell inspirion', price: 10000 },

];
function matchedProducts(products, search) {
    let matched = [];
    for (const product of products) {
        if (product.name.toLowerCase().includes(search.toLowerCase())) {
            matched.push(product);
        }
    }
    return matched;
}

const result = matchedProducts(products, 'phone')

console.log(result);
