document.getElementById("SapXep").onclick = function(){
    //Đầu vào
    var soThu1 = +document.getElementById("sothu1").value;
    var soThu2 = +document.getElementById("sothu2").value;
    var soThu3 = +document.getElementById("sothu3").value;

    //Xử lý
    var result = '';
    if (soThu1 > soThu2 && soThu2 > soThu3) {
        result = soThu3 + " < " + soThu2 + " < " + soThu1;
    }
    else if (soThu1 > soThu3 && soThu3 > soThu2){
        result = soThu2 + " < " + soThu3 + " < " + soThu1;
    }
    else if (soThu2 > soThu1 && soThu1 > soThu3){
        result = soThu3 + " < " + soThu1 + " < " + soThu2;
    }
    else if (soThu2 > soThu3 && soThu3 > soThu1){
        result = soThu1 + " < " + soThu3 + " < " + soThu2;
    }
    else if (soThu3 > soThu2 && soThu2 > soThu1){
        result = soThu1 + " < " + soThu2 + " < " + soThu3;
    }
    else{
        result = soThu2 + " < " + soThu1 + " < " + soThu3;
    }
    
    // Đầu ra
    document.getElementById('showInfoTotal').innerHTML = "Các số theo thứ tự tăng dần là : " + result;
}