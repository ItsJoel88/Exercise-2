function hitung(){
    var angka1=parseFloat(document.querySelector("#angka1").value);
    var angka2=parseFloat(document.querySelector("#angka2").value);
    var operator=document.querySelector("#op").value;
    var hasil;

    if (operator =="add"){
        hasil=angka1+angka2;
    } else if (operator == "min"){
        hasil=angka1-angka2;
    } else if (operator == "div"){
        hasil=angka1/angka2;
    }else if (operator == "mul"){
        hasil=angka1*angka2;
    }

    document.querySelector("#hasil").innerHTML=hasil;
}