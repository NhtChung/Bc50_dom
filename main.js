/**
 * Mô hình 3 khối bài 1:
 * - Đầu vào: 
 *    + Có số ngày công thực tế đi làm
 *    + Cố số lương 1 ngày đi làm
 * - Xử lí
 *    + Số ngày công thực tế * với lương 1 ngày 
 * - Đầu ra
 *    + Tổng tiền lương dựa trên số ngày công.
 * 
 */
var money = document.getElementById("money")
money.onclick = function(){
    
    var day = document.getElementById("day").value*1;
    
    var salary = document.getElementById("salary").value*1;
    
    var result = day * salary;
    console.log(result);
    var content = "Tổng tiền lương là: " + result + "vnđ";
    var totalSalary = document.getElementById("totalSalary").innerHTML = content;
    
}
/**
 * Mô hình 3 khối bài 2:
 *  - Đầu vào:
 *     + Có dữ liệu của 5 số cần tính tb
 *  - Xử lí:
 *     + Lấy tổng 5 số chia 5
 *  - Đầu ra:
 *     + Có được giá trị trung bình của 5 số
 */
var btnAverage = document.getElementById("btnAverage");
btnAverage.onclick = function(){
    var number1 = document.getElementById("number1").value*1;
    var number2 = document.getElementById("number2").value*1;
    var number3 = document.getElementById("number3").value*1;
    var number4 = document.getElementById("number4").value*1;
    var number5 = document.getElementById("number5").value*1;
    
    var final= (number1+number2+number3+number4+number5)/5;
    console.log(final);
    var nd = "Giá trị trung bình là: " + final;
    var average= document.getElementById("average").innerHTML = nd;

}

/**
 * Mô hình 3 khối bài 3:
 *  - Đầu vào:
 *     + có dữ liệu số tiền cần đổi
 *     + Có dữ liệu 1$ = 23.500vnd
 *  - Xử lí:
 *     +Lấy số tiền $ cần đổi * với 23500
 *  - Đầu ra:
 *     + Có được số tiền vnd được quy đổi từ tiền $
 */
var btnDolar = document.getElementById("btnDolar");
btnDolar.onclick = function(){
    var number6=document.getElementById("number6").value*1;
    
    var money = number6 * 23500
    console.log(money);
    var change = "Số tiền VND là: " +money+ " vnd";
    var exchange = document.getElementById("exchange").innerHTML=change;
}

/**
 * Mô hình 3 khối bài 4:
 *  - Đầu vào:
 *     + có dữ liệu số đo cạnh chiều dài
 *     + có dữ liệu số đo cạnh chiều rộng
 *  - Xử lí:
 *     + áp dụng công thức chu vi = (dài+rộng)*2;
 *     + áp dụng công thức diện tích = dài * rộng;
 *  - Đầu ra:
 *     + Có được kết quả của Chu vi và diện tích hcn
 */
var btnCalc= document.getElementById("btnCalc");
btnCalc.onclick = function(){
    var number7= document.getElementById("number7").value*1;
    var number8= document.getElementById("number8").value*1;

    var perimeter = (number7+number8)*2;
    console.log(perimeter);
    var superficies = number7 * number8;
    console.log(superficies);
    var KQua="Chu vi là: :" + perimeter + " Diện tích là: " + superficies;
    var KQ= document.getElementById("KQ").innerHTML=KQua;
}

/**
 * Mô hình 3 khối bài 5"
 *  - Đầu vào:
 *     + có dữ liệu của số có 2 chữ số
 *  - Xử lí:
 *     + Lấy số hàng chục.
 *     + Lấy số hàng đơn vị
 *     + tổng 2 số lại   
 * 
 *  - Đầu ra:
 *     + Có được kết quả của 2 số
 */
var btnTotal = document.getElementById("btnTotal");
btnTotal.onclick = function(){
    var number9= document.getElementById("number9").value*1;
    var total= 0;
    var num= number9;
    var arr=Array.from(String(num), Number);
    arr.map((item) =>{
        total+=item;
    })
    console.log(total);
    var KetQ = "Tổng 2 ký số là: " + total;
    var tong=document.getElementById("tong").innerHTML=KetQ;
}