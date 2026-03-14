document.getElementById('add-money-btn').addEventListener('click', function() {
// bank account number get
const bankAccount=getValueFromInput('add-money-bank');
if(bankAccount=="Pick a Bank"){
    alert('Please select a bank to add money.');
    return;
}
// get bank account number and validate
const accno=getValueFromInput('add-money-number');
if(accno.length!==11 || !/^\d+$/.test(accno)){
    alert('Please enter a valid 10-digit bank account number.');
    return;
}
// get the amount and validate and convert to number
const amount=getValueFromInput('add-money-amount');
const newBalance=getBalance()+Number(amount);
const pin=getValueFromInput('add-money-pin');
if(pin!=='1234'){
    alert('Invalid PIN. Please enter the correct PIN to proceed with adding money.');
    return;
} else {
    alert(`Successfully added $${amount} to your balance from bank account ${accno}.`);
    setBalance(newBalance);
} 
});