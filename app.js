// login button event handler..
const loginBtn = document.getElementById("login");
loginBtn.addEventListener("click", function () {
    const loginArea = document.getElementById("login-area");
    loginArea.style.display = "none";
    const transactionArea = document.getElementById("transaction-area");
    transactionArea.style.display = "block";
})

function getInputNumber(id) {
    const Amount = document.getElementById(id).value;
    const withdrawNumber = parseFloat(Amount);
    return withdrawNumber;
}

// deposit button event handler..
const depositBtn = document.getElementById("deposit");
depositBtn.addEventListener("click", function () {
    const depositAmountNumber = getInputNumber("deposit-amount");
    if (depositAmountNumber < 0) {
        alert("deposit amount can't be negative");
    }
    else {
        updateAmount("current-deposit", depositAmountNumber);
        updateAmount("current-balance", depositAmountNumber);
    }


    // const currentDeposit = document.getElementById("current-deposit").innerText;
    // const currentDepositNumber = parseFloat(currentDeposit);
    // const totalDeposit = currentDepositNumber + depositAmountNumber;
    // document.getElementById("current-deposit").innerText = totalDeposit;

    document.getElementById("deposit-amount").value = "";

    // const currentBalance = document.getElementById("current-balance").innerText;
    // const currentBalanceNumber = parseFloat(currentBalance);
    // const totalBalance = currentBalanceNumber + depositAmountNumber;
    // document.getElementById("current-balance").innerText = totalBalance;

})
function updateAmount(id, AmountNumber) {
    const currentAmount = document.getElementById(id).innerText;
    const currentAmountNumber = parseFloat(currentAmount);
    const totalAmount = currentAmountNumber + AmountNumber;
    document.getElementById(id).innerText = totalAmount;
}
// withdraw button event handler...


const withdrawBtn = document.getElementById("withdraw");
withdrawBtn.addEventListener("click", function () {
    const withdrawAmountNumber = getInputNumber("withdraw-amount");
    updateAmount("current-withdraw", withdrawAmountNumber);
    // const currentWithdraw = document.getElementById("current-withdraw").innerText;
    // const currentWithdrawNumber = parseFloat(currentWithdraw);

    // const totalWithdraw = currentWithdrawNumber + withdrawAmountNumber;
    // document.getElementById("current-withdraw").innerText = totalWithdraw;


    document.getElementById("withdraw-amount").value = "";

    updateAmount("current-balance", -1 * withdrawAmountNumber)
})


 // login setup area
 //} 
 // else {
 //     const loginBtn = document.getElementById("login");
 //     loginBtn.addEventListener("click", function(){
 //         console.log("Your E-mail or password is Incorrect !!!");
 // })    
 // }
