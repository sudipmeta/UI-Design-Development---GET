var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var MainClass = /** @class */ (function () {
    function MainClass() {
        var _this = this;
        this.pattern = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[-+_!@#$%^&*.,?]).+$");
        this.next = function (elem) {
            do {
                elem = elem.nextSibling;
            } while (elem && elem.nodeType !== 1);
            return elem;
        };
        this.showNext = function (element) {
            var c = element.parentNode;
            c.style.display = "none";
            var ns = _this.next(c);
            if (ns.id === "genderItem" || ns.id === "passwordItem") {
                ns.style.display = "block";
            }
            else {
                ns.style.display = "flex";
            }
        };
        this.sectionNext = function (element) {
            var c = element.parentNode;
            var pc = c.parentNode;
            var ppc = pc.parentNode;
            var z = ppc.parentNode;
            z.style.display = "none";
            var ns = _this.next(z);
            ns.style.display = "block";
        };
    }
    return MainClass;
}());
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee() {
        // public name = document.getElementById(`name-btn`) as HTMLElement;
        // public gender = document.getElementById(`gender-btn`) as HTMLElement;
        // public mail = document.getElementById(`mail-btn`) as HTMLElement;
        // public passText = document.getElementById(`password`) as HTMLInputElement; 
        // public confirmPassText = document.getElementById(`cpassword`) as HTMLElement; 
        // public pass = document.getElementById(`pass-btn`) as HTMLElement; 
        // public contactNumber = document.getElementById(`contact-btn`) as HTMLElement; 
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.setName = function (element) {
            var name = document.getElementById("fname");
            var empName = name.value;
            if (/\d/.test(empName) || empName.length <= 2) {
                alert("Invalid Name");
            }
            else {
                document.getElementById("genderInput").innerHTML = "Hi, ".concat(empName, " Can i know your gender");
                _this.showNext(element);
            }
        };
        _this.showMail = function (element) {
            var check = document.getElementsByClassName("gender");
            for (var i = 0; i < 3; i++) {
                var flag = check[i];
                if (flag.checked) {
                    _this.showNext(element);
                    return;
                }
            }
            alert("Please select a field");
        };
        _this.showPass = function (element) {
            var mail = document.getElementById("email");
            var empMail = mail.value;
            if (empMail.includes("@") && empMail.length >= 3) {
                _this.showNext(element);
            }
            else {
                alert("Invalid E-mail ID");
            }
        };
        _this.borderChange = function (element) {
            var passField = element.value;
            if (passField.length < 8) {
                element.style.border = "3px solid red";
            }
            else if (passField.length >= 8 && passField.length <= 10) {
                element.style.border = "3px solid orange";
            }
            else {
                element.style.border = "3px solid green";
            }
        };
        _this.showContact = function (element) {
            var empPass = document.getElementById("password");
            var passField = empPass.value;
            var empCPass = document.getElementById("cpassword");
            var cPassField = empCPass.value;
            if (_this.pattern.test(passField) && passField === cPassField) {
                _this.showNext(element);
            }
            else if (!_this.pattern.test(passField)) {
                alert("Password should contain atleast: \n one Uppercase character,\n atleast one  Lowercase character,\n atleast one Numeric value,\n atleast one Alphanumeric character \n\nAnd minimum length should be 8");
            }
            else if (passField != cPassField) {
                alert("Passwords don't match");
            }
        };
        _this.showVehicle = function (element) {
            var contact = document.getElementById("number");
            var num = contact.value;
            if (/^\d+$/.test(num) && num.length >= 8)
                _this.sectionNext(element);
            else
                alert("Invalid Number");
        };
        return _this;
    }
    return Employee;
}(MainClass));
var Vehicle = /** @class */ (function (_super) {
    __extends(Vehicle, _super);
    function Vehicle() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.showType = function (element) {
            var veh = document.getElementById("vehicle-name");
            var vehName = veh.value;
            if (vehName.length > 0)
                _this.showNext(element);
            else
                alert("Invalid input");
        };
        _this.setVehicle = function (element) {
            var selectElement = document.querySelector('#veh-type');
            var output = selectElement.value;
            switch (output) {
                case ("cycle"):
                    document.getElementById("cycle-price").style.display = "block";
                    break;
                case ("motor-cycle"):
                    document.getElementById("motor-cycle-price").style.display = "block";
                    break;
                case ("car"):
                    document.getElementById("car-price").style.display = "block";
                    break;
            }
            _this.showNext(element);
        };
        _this.showID = function (element) {
            var n = document.getElementById("veh-num");
            var num = n.value;
            if (num.length > 0)
                _this.showNext(element);
            else
                alert("Invalid input");
        };
        _this.showIden = function (element) {
            var id = document.getElementById("emp-id");
            var idVal = id.value;
            if (idVal.length > 0)
                _this.showNext(element);
            else
                alert("Invalid input");
        };
        _this.showPrice = function (element) {
            var iden = document.getElementById("identification");
            var idenVal = iden.value;
            if (idenVal.length > 0)
                _this.showNextElement(element);
            else
                alert("Invalid input");
        };
        return _this;
    }
    return Vehicle;
}(MainClass));
var Pass = /** @class */ (function (_super) {
    __extends(Pass, _super);
    function Pass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.setPrice = function (element) {
            _this.price = element.value;
            document.getElementById("pricing-div").style.display = "none";
            document.getElementById("pass").style.display = "block";
            document.getElementById("pass-price").innerHTML = "Amount: Rs ".concat(_this.price);
        };
        _this.currencyChange = function (element) {
            if (element.id === "inr-btn") {
                document.getElementById("pass-price").innerHTML = "Amount: Rs ".concat(_this.price);
                document.getElementById("usd-btn").style.display = "block";
                document.getElementById("yen-btn").style.display = "block";
                document.getElementById("inr-btn").style.display = "none";
            }
            else if (element.id === "usd-btn") {
                document.getElementById("pass-price").innerHTML = "Amount: ".concat((parseInt(_this.price) / 81.79).toFixed(2), "$");
                document.getElementById("usd-btn").style.display = "none";
                document.getElementById("yen-btn").style.display = "block";
                document.getElementById("inr-btn").style.display = "block";
            }
            else if (element.id === "yen-btn") {
                document.getElementById("pass-price").innerHTML = "Amount: ".concat((parseInt(_this.price) / 0.58).toFixed(2), " Yen");
                document.getElementById("usd-btn").style.display = "block";
                document.getElementById("yen-btn").style.display = "none";
                document.getElementById("inr-btn").style.display = "block";
            }
        };
        _this.complete = function () {
            document.getElementById("pass").style.display = "none";
            document.getElementById("final").style.display = "block";
        };
        return _this;
    }
    return Pass;
}(MainClass));
var emp = new Employee();
var veh = new Vehicle();
var pass = new Pass;
