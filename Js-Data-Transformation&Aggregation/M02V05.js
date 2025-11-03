
// count subtotal

const cartItems = [
    { id: 1, name: "Wireless Mouse", price: 750, quantity: 1 },
    { id: 2, name: "Mechanical Keyboard", price: 2800, quantity: 1 },
    { id: 3, name: "USB-C Charger", price: 1200, quantity: 2 },
    { id: 4, name: "Bluetooth Headphones", price: 3500, quantity: 1 },
    { id: 5, name: "Laptop Stand", price: 900, quantity: 1 }
];

const subtotal = cartItems.reduce((subtotal, product) => {
    // console.log(subtotal, product);
    return subtotal + (product.price * product.quantity);
}, 0);
// console.log(subtotal);


// Find best scorer

const players = [
    { name: "Kylian Mbappe", score: 87 },
    { name: "Erling Haaland", score: 85 },
    { name: "Cristiano Ronaldo", score: 89 },
    { name: "Neymar Jr", score: 83 },
    { name: "Lionel Messi", score: 92 },
]

const bestScorer = players.reduce((bestPlayer, player) => {
    console.log(bestPlayer, player);
    if (bestPlayer.score > player.score) {
        return bestPlayer;
    }
    return player;

}, players[0])

console.log(bestScorer);