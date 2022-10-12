const products = [
    {
        productName: 'Gucci Round Bucklet Belt',
        price: 400
    },
    {
        productName: 'Gucci Round Bucklet Belt',
        price: 450
    },
    {
        productName: 'Gucci Round Bucklet Belt',
        price: 300
    },
    {
        productName: 'Gucci Round Bucklet Belt',
        price: 420
    },
    {
        productName: 'Smiley T-Shirt',
        price: 350
    },
    {
        productName: 'Smiley T-Shirt',
        price: 150
    },
    {
        productName: 'Shinie Nail Paint',
        price: 100
    },
    {
        productName: 'Shinie Nail Paint',
        price: 250
    },
    {
        productName: 'Esbeda Wallet',
        price: 250
    }
];

//Find the discounted price fro non-premium products
let  arrayOfNonPremiumProducts = products.filter(nonPrimiumProduct=>{
     return (nonPrimiumProduct.price < 300)} )
console.log(arrayOfNonPremiumProducts)


///Write code here


let mapArray = arrayOfNonPremiumProducts.map(item =>{return(item.price - ((item.price * 15 ) / 100))})
console.log(" the array of non-premium products with discounted rates.")
console.log( mapArray)

