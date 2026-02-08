
function newPrice(currentPrice , discount ) {
         if(typeof currentPrice!='number' || typeof discount!='number'){
            return "Invalid" ;
         }
         if(discount < 0 || discount > 100){
            return "Invalid";
         }
         const productDiscount = (currentPrice*discount)/100;
         const paymentPrice= currentPrice - productDiscount;
         return paymentPrice.toFixed(3) ;
}
const paymentPrice= newPrice(1500, 20);
const paymentPrice1= newPrice(2000, 15);
const paymentPrice2= newPrice(1200, 7);
const paymentPrice3= newPrice("1000", 10);
const paymentPrice4= newPrice(2000, 17.17);
const paymentPrice5= newPrice(500, "5");
console.log(paymentPrice);
console.log(paymentPrice1);
console.log(paymentPrice2);
console.log(paymentPrice3);
console.log(paymentPrice4);
console.log(paymentPrice5);

/** 
 *output ------>
 *  1200.000
1700.000
1116.000
Invalid
1656.600
Invalid
 */
