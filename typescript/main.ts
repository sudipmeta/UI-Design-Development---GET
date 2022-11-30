class MainClass{
    protected pattern = new RegExp(`^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[-+_!@#$%^&*.,?]).+$`);

    protected next = (elem):HTMLElement => {
        do {
            elem = elem.nextSibling;
        } while (elem && elem.nodeType !== 1);
        return elem;
    }

    protected showNext = (element):void => {
        let c: HTMLElement = element.parentNode;
        c.style.display = `none`;
        let ns: HTMLElement = this.next(c);
        if(ns.id === `genderItem` || ns.id === `passwordItem`){
            ns.style.display = `block`;
        }
        else{
            ns.style.display = `flex`;
        }
    }  

    public sectionNext = (element) => {
        let c = element.parentNode;
        let pc = c.parentNode;
        let ppc = pc.parentNode;
        let z: HTMLElement = ppc.parentNode;
        z.style.display = `none`;
        let ns: HTMLElement = this.next(z);
        ns.style.display = `block`;
    }
}

class Employee extends MainClass{

    // public name = document.getElementById(`name-btn`) as HTMLElement;
    // public gender = document.getElementById(`gender-btn`) as HTMLElement;
    // public mail = document.getElementById(`mail-btn`) as HTMLElement;
    // public passText = document.getElementById(`password`) as HTMLInputElement; 
    // public confirmPassText = document.getElementById(`cpassword`) as HTMLElement; 
    // public pass = document.getElementById(`pass-btn`) as HTMLElement; 
    // public contactNumber = document.getElementById(`contact-btn`) as HTMLElement; 

    setName = (element) => {
        
        let name = document.getElementById(`fname`) as HTMLInputElement;
        
        let empName: string = name.value
        
        if(/\d/.test(empName) || empName.length <=2){
            alert(`Invalid Name`);
        }
        else{
            document.getElementById(`genderInput`).innerHTML = `Hi, ${empName} Can i know your gender`;
            this.showNext(element);
        }
    }

    showMail = (element) => {
        let check = document.getElementsByClassName(`gender`);
        for(let i = 0; i < 3; i++){
            let flag = check[i] as HTMLElement;
            if(flag.checked){
                this.showNext(element);
                return;
            }
        }
        alert(`Please select a field`);
    }

    showPass = (element) => {
        let mail = document.getElementById(`email`) as HTMLInputElement;
        let empMail: string = mail.value;
        
        if(empMail.includes(`@`) && empMail.length >=3){
            this.showNext(element);
        }
        else{
            alert(`Invalid E-mail ID`);
        }
    }
    
    borderChange = (element) => {
        let passField: string = element.value;
        if(passField.length < 8){
            element.style.border = `3px solid red`;
        }
        else if(passField.length >= 8 && passField.length <= 10){
            element.style.border = `3px solid orange`;
        }
        else{
            element.style.border = `3px solid green`;
        }
    }

    showContact = (element) => {
        let empPass = document.getElementById(`password`) as HTMLInputElement;
        let passField: string = empPass.value;
        let empCPass = document.getElementById(`cpassword`) as HTMLInputElement;
        let cPassField: string = empCPass.value;

        if(this.pattern.test(passField) && passField===cPassField){
            this.showNext(element);
        }
        else if(!this.pattern.test(passField)){
            alert(`Password should contain atleast: \n one Uppercase character,\n atleast one  Lowercase character,\n atleast one Numeric value,\n atleast one Alphanumeric character \n\nAnd minimum length should be 8`);
        }
        else if(passField!=cPassField){
            alert(`Passwords don't match`);
        }
    }

    showVehicle = (element) => {
        let contact = document.getElementById(`number`) as HTMLInputElement;
        let num: string = contact.value;
    
        if(/^\d+$/.test(num) && num.length >= 8)
            this.sectionNext(element);
        else
            alert(`Invalid Number`);
    }
}

class Vehicle extends MainClass{

    showType = (element) => {
        let veh = document.getElementById(`vehicle-name`) as HTMLInputElement;
        let vehName = veh.value;
        
        if(vehName.length > 0)
            this.showNext(element);
        else
            alert(`Invalid input`);
    }

    setVehicle = (element) => {
        let selectElement = document.querySelector('#veh-type') as HTMLInputElement;
        let output: string = selectElement.value;
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
        this.showNext(element);
    }

    showID = (element) => {
        let n = document.getElementById(`veh-num`) as HTMLInputElement;
        let num: string = n.value;

        if(num.length > 0)
            this.showNext(element);
        else
            alert(`Invalid input`);
    }

    showIden = (element) => {
        let id = document.getElementById(`emp-id`) as HTMLInputElement;
        let idVal: string = id.value;

        if(idVal.length > 0)
            this.showNext(element);
        else
            alert(`Invalid input`);
    }

    showPrice = (element) => {
        let iden = document.getElementById(`identification`) as HTMLInputElement;
        let idenVal: string = iden.value;

        if(idenVal.length > 0)
            this.showNextElement(element);
        else
            alert(`Invalid input`);
    }
}

class Pass extends MainClass{
    public price: string;

    setPrice = (element) => {
        this.price = element.value;
        document.getElementById(`pricing-div`).style.display = `none`;
        document.getElementById(`pass`).style.display = `block`;
        document.getElementById(`pass-price`).innerHTML = `Amount: Rs ${this.price}`;
    }

    currencyChange = (element) => {
        if(element.id === `inr-btn`){
            document.getElementById(`pass-price`).innerHTML = `Amount: Rs ${this.price}`;
            document.getElementById(`usd-btn`).style.display = `block`;
            document.getElementById(`yen-btn`).style.display = `block`;
            document.getElementById(`inr-btn`).style.display = `none`;
        }
        else if(element.id === `usd-btn`){
            document.getElementById(`pass-price`).innerHTML = `Amount: ${(parseInt(this.price)/81.79).toFixed(2)}$`;
            document.getElementById(`usd-btn`).style.display = `none`;
            document.getElementById(`yen-btn`).style.display = `block`;
            document.getElementById(`inr-btn`).style.display = `block`;
        }
        else if(element.id === `yen-btn`){
            document.getElementById(`pass-price`).innerHTML = `Amount: ${(parseInt(this.price)/0.58).toFixed(2)} Yen`;
            document.getElementById(`usd-btn`).style.display = `block`;
            document.getElementById(`yen-btn`).style.display = `none`;
            document.getElementById(`inr-btn`).style.display = `block`;
        }
    }
    
    complete = () => {
        document.getElementById(`pass`).style.display = `none`;
        document.getElementById(`final`).style.display = `block`;
    }
}

let emp:Employee = new Employee();
let veh:Vehicle = new Vehicle();
let pass:Pass = new Pass;