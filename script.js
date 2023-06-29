var qvebi = [
    "0-0.png", "0-1.png", "0-2.png", "0-3.png", "0-4.png", "0-5.png", "0-6.png", 
    "1-1.png", "1-2.png", "1-3.png", "1-4.png", "1-5.png", "1-6.png", 
    "2-2.png", "2-3.png", "2-4.png", "2-5.png", "2-6.png", 
    "3-3.png", "3-4.png", "3-5.png", "3-6.png", 
    "4-4.png", "4-5.png", "4-6.png", 
    "5-5.png", "5-6.png", 
    "6-6.png"];
var qulebi = [
    0, 1, 2, 3, 4, 5, 6,
    2, 3, 4, 5, 6, 7, 
    4, 5, 6, 7, 8, 
    6, 7, 8, 9, 
    8, 9, 10, 
    10, 11, 
    12];
var r = Math.floor(Math.random()*27);
document.images[0].src="images/"+qvebi[r];
var pirveli = qulebi[r];
var qulaup = 0;
var quladown = 0;
var i = 0;
function change(){
    var r = Math.floor(Math.random()*27);
    document.images[0].src="images/"+qvebi[r];
    pirveli = qulebi[r];
    document.getElementById("btn").disabled = true;
}

function up(){
    i++;
    if(i<5){
        var r = Math.floor(Math.random()*27);
        document.images[i].src="images/"+qvebi[r];
        qulaup = qulebi[r];
        document.getElementById("btn").disabled = true;
        if(qulaup > pirveli){
            document.getElementById("result").innerHTML="არის მაღალი!";
            pirveli = qulaup;
        }else
        {
            document.getElementById("result").innerHTML="არ არის მაღალი! თქვენ წააგეთ.";
            document.getElementById("magla").disabled = true;
            document.getElementById("dabla").disabled = true;   
        }
    }else
    {
        document.getElementById("result").innerHTML="გილოცავთ, თქვენ მოიგეთ.";
        document.getElementById("magla").disabled = true;
        document.getElementById("dabla").disabled = true;
    }
}

function down(){
    i++;
    if(i<5){ 
        var r = Math.floor(Math.random()*27);
        document.images[i].src="images/"+qvebi[r];
        quladown = qulebi[r];
        document.getElementById("btn").disabled = true;
        if(quladown < pirveli){
            document.getElementById("result").innerHTML="არის დაბალი!";
            pirveli = quladown;
        }else
        {
            document.getElementById("result").innerHTML="არ არის დაბალი! თქვენ წააგეთ.";
            document.getElementById("magla").disabled = true;
            document.getElementById("dabla").disabled = true;
        }
    }else{
        document.getElementById("result").innerHTML="გილოცავთ, თქვენ მოიგეთ.";
        document.getElementById("magla").disabled = true;
        document.getElementById("dabla").disabled = true;
    }
}