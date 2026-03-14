document.getElementById('login-btn').addEventListener("click",
    function(){
        // get the mobile number
        const numberInput=document.getElementById('input-number');
        const contactNumber=numberInput.value;

        // get the pin
        const inputPin=document.getElementById('input-pin');
        const pin=inputPin.value;

        // match the mobile number and pin
        if(contactNumber=="01730633804" && pin=="1234"){
         // if true:::alert>homepage
         alert('Login Successful');
         window.location.assign("https://bugterminator07.github.io/PAYOO-Mobile/home.html");
        }
        // if false:::alert>return
        else{
            alert("Log-In Failed");
            return;
        }
    }
)