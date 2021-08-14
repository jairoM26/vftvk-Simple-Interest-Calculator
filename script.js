

function compute()
{
    var principal = document.getElementById("principal").value;
    if(principal == ""){
        alert("Amount is empty please enter a number");
        fname.focus();
        return false;
    }
    else if(parseInt(principal) <= 0){
        alert("Please enter a positive number");
        fname.focus();
        return false;
    }
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var amount = principal * years * rate / 100;
    var year = new Date().getFullYear()+parseInt(years);
    console.log(year, rate, principal)
    document.getElementById("result").innerHTML="If you deposit "+principal+",\<br\>at an interest rate of "+rate+"%\<br\>You will recieve an amount of "+amount+",\<br\>in the year "+year+"\<br\>"
}

function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerHTML = rateval + "%";
}
