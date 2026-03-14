// machine id-> input value
function getValueFromInput(id){
    const input=document.getElementById(id);
    const value=input.value;
    console.log(id,value);
    return value;
}
function getBalance(){
    const balanceElement=document.getElementById('balance');
    const balance=Number(balanceElement.textContent);
    // console.log('Current Balance:',balance);
    return balance;
} 
// machine value-> set balance
function setBalance(value){
    const balanceElement=document.getElementById('balance');
   balanceElement.innerText=value.toFixed(2);
}
