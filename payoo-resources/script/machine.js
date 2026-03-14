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
// this funtion will take id and wiil hide all except the clicked one
function showOnly(id){ 
    const addmoney=document.getElementById('add-money');
    const cashout=document.getElementById('cashout');
    const transfer=document.getElementById('transfer-money');
    const pay=document.getElementById('pay-money');
    const history=document.getElementById('history');
    history.style.display='none';
    addmoney.style.display='none';
    cashout.style.display='none';
    transfer.style.display='none';
    pay.style.display='none';
    const element=document.getElementById(id);
    element.style.display='block';
}