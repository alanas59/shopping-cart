function updateCaseNumber(product,price,isIncreasing){
      const productInput=document.getElementById(product + "-number");
      let productNumber=productInput.value;
      if(isIncreasing)
      {
        productNumber=parseInt(productNumber) + 1;
      }
      else if(productNumber>0){
        productNumber=parseInt(productNumber) - 1;
      }
      productInput.value=productNumber;
      const productTotal=document.getElementById(product + "-total");
      productTotal.innerText=productNumber*price;
      calculateTotal();
      
}
function inputValue(product)
{
    const productInput=document.getElementById(product + "-number");
    const productNumber=parseInt(productInput.value);
    return productNumber;
}
function calculateTotal()
{
    const caseTotal=inputValue("phone")*1219;
    const phoneTotal=inputValue("case")*59;
    const subTotal=caseTotal + phoneTotal;
    const tax=subTotal / 10;
    const totalPrice=subTotal + tax;
    document.getElementById("sub-total").innerText=subTotal;
    document.getElementById("tax-amount").innerText=tax;
    document.getElementById("total-price").innerText=totalPrice;
}
document.getElementById("case-plus").addEventListener("click",function(){
  updateCaseNumber("case",59,true);    
      
});

document.getElementById("case-minus").addEventListener("click",function(){
    updateCaseNumber("case",59,false);
    
})

document.getElementById("phone-plus").addEventListener("click",function(){
    updateCaseNumber("phone",1200,true);
});
document.getElementById("phone-minus").addEventListener("click",function(){
    updateCaseNumber("phone",1200,false);
});
