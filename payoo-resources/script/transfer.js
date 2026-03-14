document.getElementById('transfer-money-btn').addEventListener('click', function() {
// bank account number get
const bankAccount=getValueFromInput('transfer-money-bank');
if(bankAccount=="Pick a Bank"){
    alert('Please select a bank to add money.');
    return;
}
// get bank account number and validate
const accno=getValueFromInput('transfer-money-number');
if(accno.length!==11 || !/^\d+$/.test(accno)){
    alert('Please enter a valid 11-digit bank account number.');
    return;
}
 const balanceElement=document.getElementById('balance');
    const currentBalance=Number(balanceElement.textContent);
    
// get the amount and validate and convert to number
const amount=getValueFromInput('transfer-money-amount');
if(currentBalance<amount){
        alert('Insufficient balance for this transfer amount.');
        return;
    }
const newBalance=getBalance()-Number(amount);
const pin=getValueFromInput('transfer-money-pin');
if(pin!=='1234'){
    alert('Invalid PIN. Please enter the correct PIN to proceed with transferring money.');
    return;
} else {
    alert(`Successfully transferred $${amount} from your balance to bank account ${accno}.`);
    setBalance(newBalance);
    // history container ke anbo
    const history=document.getElementById('history-container');
    // new div create
    const newHistory=document.createElement('div');
    // inside new div add innerHtml
    newHistory.innerHTML=`
    <div class="transation-card p-5 bg-base-100 rounded-lg shadow mb-3">
       <p class="text-lg font-semibold">Transferred $${amount} to bank account ${accno}</p>
     

    </div>
    `
    // new div append to new div
    history.appendChild(newHistory);
} 
});