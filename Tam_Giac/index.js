document.getElementById("tamgiac").onclick = function(){
    // Đầu vào
    var canhThu1 = document.getElementById("canhthu1").value * 1;
    var canhThu2 = document.getElementById("canhthu2").value * 1;
    var canhThu3 = document.getElementById("canhthu3").value * 1;
     
    // Xử lí
    var canh1 = Math.sqrt(canhThu1 * canhThu1 + canhThu2 * canhThu2);
    var canh2 = Math.sqrt(canhThu2 * canhThu2 + canhThu3 * canhThu3);
    var canh3 = Math.sqrt(canhThu1 * canhThu1 + canhThu3 * canhThu3);
    var result = "";
    if (canhThu1 === canhThu2 && canhThu2 === canhThu3 ){
        result = "Tam giác đều";
    }else if(canhThu1 === canhThu2 || canhThu2 === canhThu3 || canhThu1 === canhThu3){
        result = "Tam giác cân";
    }else if ( canhThu1 === canh1 || canhThu1 === canh2 || canhThu1 === canh3){
        result = "Tam giác vuông";
    }else if ( canhThu2 === canh1 || canhThu2 === canh2 || canhThu2 === canh3){
        result = "Tam giác vuông";
    }else if ( canhThu3 === canh1 || canhThu3 === canh2 || canhThu3 === canh3){
        result = "Tam giác vuông";
    }else{
        result = "Hổng phải tam giác nhọn <br> Hổng phải tam giác vuông <br> Cũng hổng phải tam giác cân";
    }
    
    // Đầu ra
    document.getElementById("showInfoTotal").innerHTML = result;
}
