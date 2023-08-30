const kmPrice = 0.21;
let flag = false;
let element = document.getElementById("ticket");
function confirm()
{
    element.classList.remove("d-none");
    console.log(document.getElementById("ticket").className.remove="d-none");
    let customerName = document.getElementById("customerName").value;
    let age = parseInt(document.getElementById("userAge").value);
    let distance = parseFloat(document.getElementById("distance").value);
    let prezzo = (distance*kmPrice).toFixed(2);
    if(age<18)
    {
        prezzo-=(prezzo*20/100).toFixed(2);
        flag = true;
    }
        
    else if(age>65)
    {
        prezzo-=(prezzo*40/100).toFixed(2);
        flag= true;
    }

    document.getElementById("name").innerHTML=customerName;
    document.getElementById("cabina").innerHTML=Math.floor(Math.random()*10)+1;
    document.getElementById("cpCode").innerHTML=Math.floor(Math.random()*9999)+1;
    document.getElementById("finalPrice").innerHTML=prezzo.toFixed(2);
    if(flag==true)
        document.getElementById("ticketType").innerHTML="Biglietto Ridotto";
    else
        document.getElementById("ticketType").innerHTML="Biglietto Standard";

    console.log(customerName,prezzo);
}

function cancel(){
    element.classList.add("d-none");
}
