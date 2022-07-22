document.getElementById("Dem").onclick = function(){
    // Đầu vào
    var soThu1 = document.getElementById("sothu1").value*1;
    var soThu2 = document.getElementById("sothu2").value*1;
    var soThu3 = document.getElementById("sothu3").value*1;
    // Xử lý
    var soChan = 0;
    var soLe = 0;
    if (soThu1 % 2 == 0){
        soChan++; 
    }
    else{
        soLe++;
    }
    if (soThu2 % 2 == 0){
        soChan++;
    }
    else{
        soLe++;
    }
    if (soThu3 % 2 ==0){
        soChan++;
    }
    else{
        soLe++;
    }
    var result = "<div>";
    result += "<p> Bạn có : " + soChan +" số chẵn</p>";
    result += "<p> Và : " + soLe +" số lẻ </p>";
    result += "</div>";
    //Đầu ra
    document.getElementById("showInfoTotal").innerHTML = result;
}