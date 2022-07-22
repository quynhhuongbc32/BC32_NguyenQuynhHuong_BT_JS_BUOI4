document.getElementById("hello").onclick = function(){
    // Đầu vào
    var choose = +document.getElementById('choose').value ;
    
    //Xử lí
    var result = '';
    switch(choose){
        case 1: {
            result = 'Hello Bố';
        };
        break;
        case 2: {
            result = 'Hello Mẹ';
        };
        break;
        case 3: {
            result = 'Hello Anh Trai';
        };
        break;
        default: {
            result = 'Hello Em Gái';
        }
    }
    // Đầu ra
    document.getElementById("showInfoTotal").innerHTML = result;
}