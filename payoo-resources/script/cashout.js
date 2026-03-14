document.getElementById('cashout-btn').addEventListener('click', function() {
    // Get the agent number and validate
    const cashoutNumberInput=document.getElementById('cashout-number');
    const cashoutNumber=cashoutNumberInput.value;
    if(cashoutNumber.length!==11 || !/^\d+$/.test(cashoutNumber)){
        alert('Please enter a valid 11-digit agent number.');
        return;
    }
    // get the amount and validate and convert to number
    const cashoutAmountInput=document.getElementById('cashout-amount');
    const cashoutAmount=Number(cashoutAmountInput.value);
    // get the current balance and validate if sufficient
    const balanceElement=document.getElementById('balance');
    const currentBalance=Number(balanceElement.textContent);
    if(currentBalance<cashoutAmount){
        alert('Insufficient balance for this cashout amount.');
        return;
    }
    
    // calculate the new balance and update the UI

    const newBalance=currentBalance-cashoutAmount;
    // get the pin and validate ,the pin is 1234 for testing purposes
    const cashoutPinInput=document.getElementById('cashout-pin');
    const cashoutPin=cashoutPinInput.value;
    if(cashoutPin!=='1234'){
        alert('Invalid PIN. Please enter the correct PIN to proceed with cashout.');
        return;
    } else {
    // if all validations pass, show success message and update balance
    alert(`Cashout of $${cashoutAmount} to agent number ${cashoutNumber} successful!`);
    balanceElement.textContent=newBalance.toFixed(2);}
    // history container ke anbo
    const history=document.getElementById('history-container');
    // new div create
    const newHistory=document.createElement('div');
    // inside new div add innerHtml
    newHistory.innerHTML=`
    <div class="transation-card p-5 bg-base-100 rounded-lg shadow mb-3">
       <p class="text-lg font-semibold">Cashout $${cashoutAmount} to agent number ${cashoutNumber}</p>
     

    </div>
    `
    // new div append to new div
    history.appendChild(newHistory);
    // else show appropriate error messages
});