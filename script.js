//number ekak click karala aye number  ekak click karama ara number eka clear vela e number eka awith harriynne na ekata api mulin hadana one function ekak
//create function
function fn0(){
    //meken karanne previous kiyana variable ekata dan api number1 dunnoth eka dagannava
    let previouse = document.getElementById("display").innerHTML;
    //meken karanne danata click karana number eka pitipassen 0 vatena ekata
    document.getElementById("display").innerHTML = previouse + 0;
}

//mewage hama number ekatama hadaganvva itapasse

function fn1(){
    //meken karanne previous kiyana variable ekata dan api number1 dunnoth eka dagannava
    let previouse = document.getElementById("display").innerHTML;
    //meken karanne danata click karana number eka pitipassen 0 vatena ekata
    document.getElementById("display").innerHTML = previouse + 1;
}

function fn2(){
    //meken karanne previous kiyana variable ekata dan api number1 dunnoth eka dagannava
    let previouse = document.getElementById("display").innerHTML;
    //meken karanne danata click karana number eka pitipassen 0 vatena ekata
    document.getElementById("display").innerHTML = previouse + 2;
}

function fn3(){
    //meken karanne previous kiyana variable ekata dan api number1 dunnoth eka dagannava
    let previouse = document.getElementById("display").innerHTML;
    //meken karanne danata click karana number eka pitipassen 0 vatena ekata
    document.getElementById("display").innerHTML = previouse + 3;
}

function fn4(){
    //meken karanne previous kiyana variable ekata dan api number1 dunnoth eka dagannava
    let previouse = document.getElementById("display").innerHTML;
    //meken karanne danata click karana number eka pitipassen 0 vatena ekata
    document.getElementById("display").innerHTML = previouse + 4;
}

function fn5(){
    //meken karanne previous kiyana variable ekata dan api number1 dunnoth eka dagannava
    let previouse = document.getElementById("display").innerHTML;
    //meken karanne danata click karana number eka pitipassen 0 vatena ekata
    document.getElementById("display").innerHTML = previouse + 5;
}

function fn6(){
    //meken karanne previous kiyana variable ekata dan api number1 dunnoth eka dagannava
    let previouse = document.getElementById("display").innerHTML;
    //meken karanne danata click karana number eka pitipassen 0 vatena ekata
    document.getElementById("display").innerHTML = previouse + 6;
}

function fn7(){
    //meken karanne previous kiyana variable ekata dan api number1 dunnoth eka dagannava
    let previouse = document.getElementById("display").innerHTML;
    //meken karanne danata click karana number eka pitipassen 0 vatena ekata
    document.getElementById("display").innerHTML = previouse + 7;
}

function fn8(){
    //meken karanne previous kiyana variable ekata dan api number1 dunnoth eka dagannava
    let previouse = document.getElementById("display").innerHTML;
    //meken karanne danata click karana number eka pitipassen 0 vatena ekata
    document.getElementById("display").innerHTML = previouse + 8;
}

function fn9(){
    //meken karanne previous kiyana variable ekata dan api number1 dunnoth eka dagannava
    let previouse = document.getElementById("display").innerHTML;
    //meken karanne danata click karana number eka pitipassen 0 vatena ekata
    document.getElementById("display").innerHTML = previouse + 9;
}

//erase karanna function ekak hadanava
function feraser(){
    //danata display eka thina tika variable ekakata aragathatha
    let previouse = document.getElementById("display").innerHTML;
    //mekedi aluth variable ekak create karanava erase karanna ekta use karanne sclice kiyana function eka meke slic(0,-1)anthima number eka delete karanna hadnne
    let eraser = previouse.slice(0,-1)
    //itapasse display karanne erase karagaththu eka
    document.getElementById("display").innerHTML = eraser
}

let firstSave;
let op;
//+
function addition(){
    //danata display vena eka gaththa
    firstSave = document.getElementById("display").innerHTML;
    //api dan + eka click karama ui eka clear venna one ne aluth number ekthu venne
    document.getElementById("display").innerHTML = "";

    op =1;
}

//thawa me vage thunak hadagannva
function mn(){
    //danata display vena eka gaththa
    firstSave = document.getElementById("display").innerHTML;
    //api dan + eka click karama ui eka clear venna one ne aluth number ekthu venne
    document.getElementById("display").innerHTML = "";

    op =2;
}

function ml(){
    //danata display vena eka gaththa
    firstSave = document.getElementById("display").innerHTML;
    //api dan + eka click karama ui eka clear venna one ne aluth number ekthu venne
    document.getElementById("display").innerHTML = "";

    op =3;
}

function dv(){
    //danata display vena eka gaththa
    firstSave = document.getElementById("display").innerHTML;
    //api dan + eka click karama ui eka clear venna one ne aluth number ekthu venne
    document.getElementById("display").innerHTML = "";

    op =4;
}

function fnDecimal() {
    let previouse = document.getElementById("display").innerHTML;
    // Check if there's already a decimal point in the current number
    if (!previouse.includes('.')) {
        document.getElementById("display").innerHTML = previouse + '.';
    }
}

function moduloOperation() {
    //danata display vena eka gaththa
    firstSave = document.getElementById("display").innerHTML;
    //api dan + eka click karama ui eka clear venna one ne aluth number ekthu venne
    document.getElementById("display").innerHTML = "";

    op = 5;
}

function eq(){
    let seconSave = document.getElementById("display").innerHTML;
    if(op == 1){
        document.getElementById("display").innerHTML = parseFloat(firstSave) + parseFloat(seconSave);
    } else if (op == 2){
        document.getElementById("display").innerHTML = parseFloat(firstSave) - parseFloat(seconSave);
    } else if (op == 3){
        document.getElementById("display").innerHTML = parseFloat(firstSave) * parseFloat(seconSave);
    } else if (op == 4) {
        document.getElementById("display").innerHTML = parseFloat(firstSave) / parseFloat(seconSave);
    }else if(op == 5){
        document.getElementById("display").innerHTML = parseFloat(firstSave) % parseFloat(seconSave);
    } else {
        document.getElementById("display").innerHTML= "invalid";
    }
}