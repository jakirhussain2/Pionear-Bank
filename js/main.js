// login area
let logIn =document.getElementById("logIn").addEventListener("click",function(){
    let container = document.getElementById("cont");
    container.style.display = "none";
    let trans =document.getElementById("transcation-area");
    trans.style.display = "block";
})
// deposit area
 let depositBtn =document.getElementById("depositBtn").addEventListener("click",function(){
       let depositAmount =document.getElementById("depositAmount").value;
       let newNumber = parseFloat(depositAmount);
          
       let currentDeposit =document.getElementById("currentDeposit").innerText;
       let oldNumber =parseFloat(currentDeposit);
       let total = newNumber+oldNumber;
       document.getElementById("currentDeposit").innerText = total;
       document.getElementById("depositAmount").value = "";
       let totalBalance =document.getElementById("totalBalance").innerText;
       let totalNew = parseFloat(totalBalance);
       let totalFinal = total+totalNew;
       document.getElementById("totalBalance").innerText = totalFinal;
 })
//  withdraw
let widhdrawBtn =document.getElementById("widhdrawBtn").addEventListener("click",function (){
     let widhdraw =document.getElementById("widhdraw").value;
     let newTaka =parseFloat(widhdraw);
     let widhdrawBalance =document.getElementById("widhdrawBalance").innerText;
     let oldTaka =parseFloat(widhdrawBalance);
    let totalTaka =newTaka+oldTaka;
    document.getElementById("widhdrawBalance").innerText = totalTaka;
    document.getElementById("widhdraw").value="";
    let totalBalance =document.getElementById("totalBalance").innerText;
    let totalFinal =parseFloat(totalBalance);
    let khelkhotom = totalFinal-totalTaka;
    document.getElementById("totalBalance").innerText = khelkhotom;

})