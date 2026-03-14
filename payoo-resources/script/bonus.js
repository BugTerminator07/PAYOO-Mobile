// get current balance
const balanceElement=document.getElementById('balance');
const currentBalance=Number(balanceElement.textContent);
// get coupon from input and validate
document.getElementById('apply-bonus-btn').addEventListener('click', function() {
    const couponInput=document.getElementById('secret-coupon');
    const couponCode=couponInput.value.trim();
// chaek coupon code and apply bonus
    if(couponCode==='Cse24' || couponCode==='Huzaifa' || couponCode==='Sami' || couponCode==='Shimul' || couponCode==='Tasdid' ){
        const bonusAmount=currentBalance*0.1;
        const newBalance=currentBalance+bonusAmount;
        balanceElement.textContent=newBalance.toFixed(2);
        alert(`Congratulations! You've received a 10% bonus of $${bonusAmount.toFixed(2)}. Your new balance is $${newBalance.toFixed(2)}.`);
        // history container ke anbo
    const history=document.getElementById('history-container');
    // new div create
    const newHistory=document.createElement('div');
    // inside new div add innerHtml
    newHistory.innerHTML=`
    <div class="transation-card p-5 bg-base-100 rounded-lg shadow mb-3">
       <p class="text-lg font-semibold">Bonus Added $${bonusAmount.toFixed(2)} to bank account ${accountNumber}</p>
     

    </div>
    `
    // new div append to new div
    history.appendChild(newHistory);
    } else {
        alert('Invalid coupon code. Please enter a valid coupon to receive a bonus.');
    }

});