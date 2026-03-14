document.getElementById('pay-money-btn').addEventListener('click', function() {
// bank account number get
const bankAccount=getValueFromInput('pay-money-bank');
if(bankAccount=="Pick a Bank"){
    alert('Please select a bank to add money.');
    return;
}
// get bank account number and validate
const accno=getValueFromInput('pay-money-number');
if(accno.length!==11 || !/^\d+$/.test(accno)){
    alert('Please enter a valid 11-digit bank account number.');
    return;
}  
// get the amount and validate and convert to number
const amount=getValueFromInput('pay-money-amount');
const newBalance=getBalance()-Number(amount);
const balanceElement=document.getElementById('balance');
    const currentBalance=Number(balanceElement.textContent);
    if(currentBalance<amount){
        alert('Insufficient balance for this pay amount.');
        return;
    }
const pin=getValueFromInput('pay-money-pin');
if(pin!=='1234'){
    alert('Invalid PIN. Please enter the correct PIN to proceed with paying money.');
    return;
} else {
    alert(`Successfully paid $${amount} from your balance to bank account ${accno}.`);
    setBalance(newBalance);
} 
}); 