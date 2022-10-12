//Write code here
const product ={
    productid : 101,
    productName : "mobile",
    description : "5g,4g",
    unitPrice : 15000,
    productCategory : function(){
        return this.product + " " + this.description + " " + this.unitPrice;
    }
    
}
