let showNext = (element) => {
    let c = element.parentNode;
    c.style.display = `none`;
    // c.style.border = `0px`;
    let ns = next(c);
    // if (ns.id === `genderItem`) {
        ns.style.display = `block`;
        ns.style.border= `none`;
    // }
    // else {
        // ns.style.display = `flex`;
    // }
}
let next = (elem) => {
    do {
        elem = elem.nextSibling;
    } while (elem && elem.nodeType !== 1);
    return elem;
}

let setName = (element) => {
    let empName = document.getElementById(`fname`).value;
    
    if(/\d/.test(empName) || empName.length <=2){
        alert(`Invalid Name`);
    }
    else{
        document.getElementById(`genderInput`).innerHTML = `Hi, ${empName}! Can i know your gender`;
        showNext(element);
    }
}

let sectionNext = (element) => {
    let c = element.parentNode;
    let x = c.parentNode;
    let y = x.parentNode;
    let z = y.parentNode;
    z.style.display = `none`;
    let ns = next(z);
    // if (ns.id === `genderItem`) {
        ns.style.display = `block`;
    // }
    // else {
        // ns.style.display = `flex`;
    // }
}

let borderChange = (element) => {
    if(element.value.length < 8){
        element.style.border = `3px solid red`;
    }
    else if(element.value.length >= 8 && element.value.length <= 10){
        element.style.border = `3px solid orange`;
    }
    else{
        element .style.border = `3px solid green`;
    }
}

let showPass = (element) =>{
    let empMail = document.getElementById(`email`).value;
    
    if(empMail.includes(`@`) && empMail.length >=3){
        showNext(element);
    }
    else{
        alert(`Invalid E-mail ID`);
    }
}

let showContact = (element) => {
    const pattern = new RegExp(`^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[-+_!@#$%^&*.,?]).+$`);
    let empPass = document.getElementById(`password`).value;
    let empCPass = document.getElementById(`cpassword`).value;

    if(pattern.test(empPass) && empPass===empCPass){
        showNext(element);
    }
    else if(!pattern.test(empPass)){
        alert(`Password should contain atleast: \n one Uppercase character,\n atleast one  Lowercase character,\n atleast one Numeric value,\n atleast one Alphanumeric character \n\nAnd minimum length should be 8`);
    }
    else if(empPass!=empCPass){
        alert(`Passwords don't match`);
    }
}


// function showVehicle(element){
//     let contact = document.getElementById(`number`).value;

//     if(/^\d+$/.test(contact) && contact.length >= 8)
//         showNextElement(element);
//     else
//         alert(`Invalid Number`);
// }

let setVehicle = (element) => {
    selectElement = document.querySelector('#veh-type');
    output = selectElement.value;
    console.log(output);
    switch (output){
        case(`cycle`):
            document.getElementById(`cycle-price`).style.display = `block`;
            break;
        case(`motor-cycle`):
            document.getElementById(`motor-cycle-price`).style.display = `block`;
            break;
        case(`car`):
            document.getElementById(`car-price`).style.display = `block`;
            break;
    }
    showNext(element);
}

var price;

let setPrice = (element) => {
    price = element.value;
    document.getElementById(`pricing-div`).style.display = `none`;
    document.getElementById(`pass`).style.display = `block`;
    document.getElementById(`pass-price`).innerHTML = `Amount: Rs ${price}`;
}

let currencyChange = (element) => {
    if(element.id === `inr-btn`){
        document.getElementById(`pass-price`).innerHTML = `Amount: Rs ${price}`;
        document.getElementById(`usd-btn`).style.display = `block`;
        document.getElementById(`yen-btn`).style.display = `block`;
        document.getElementById(`inr-btn`).style.display = `none`;
    }
    else if(element.id === `usd-btn`){
        document.getElementById(`pass-price`).innerHTML = `Amount: ${(price/81.79).toFixed(2)}$`;
        document.getElementById(`usd-btn`).style.display = `none`;
        document.getElementById(`yen-btn`).style.display = `block`;
        document.getElementById(`inr-btn`).style.display = `block`;
    }
    else if(element.id === `yen-btn`){
        document.getElementById(`pass-price`).innerHTML = `Amount: ${(price/0.58).toFixed(2)} Yen`;
        document.getElementById(`usd-btn`).style.display = `block`;
        document.getElementById(`yen-btn`).style.display = `none`;
        document.getElementById(`inr-btn`).style.display = `block`;
    }
}

let complete = () => {
    document.getElementById(`pass`).style.display = `none`;
    document.getElementById(`final`).style.display = `block`;
}


