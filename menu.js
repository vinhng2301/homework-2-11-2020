class Number {
    constructor(num, array) {
        this.num = num;
        this.arr = arr;
    }
}

function checkNumber() {
    let n = document.getElementById("number").value;
    if (n % 2 !== 1) {
        alert("Nhập lại số khác")
    }
}

function checkPrime() {
    let n = document.getElementById("number").value;
    for (let i = 2 ; i <= Math.sqrt(n) ; i++) {
        if (n % i === 0 || n < 2) {
            return document.getElementById("result").innerHTML = "Không phải số nguyên tố"
        }
    }
    return document.getElementById("result").innerHTML = "Là số nguyên tố";
}

function showPrime() {
    let count = 0;
    let i = 0;
    let str = "";
    while (count < this.num) {
        if (checkPrime(i) === true) {
            str += i + ",";
            count++;
        }
        i++;
    }
    document.getElementById("list-prime").innerHTML = str;
}

function requestArray(){
    let quantity = +document.getElementById("number").value;
    let arr = [];
    for (let i = 0; i < quantity ; i++) {
        arr[i] = prompt("nhập vào " + quantity + " phần tử")
    }
    document.getElementById("list-array").innerHTML = arr;
}