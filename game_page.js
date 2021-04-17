var player_1name= localStorage.getItem("player1_name");

var player_2name= localStorage.getItem("player2_name");

var scare1= 0;

var scare2= 0;

document.getElementById("p1n").innerHTML=player_1name+" :";

document.getElementById("p2n").innerHTML=player_2name+" :";

document.getElementById("p1s").innerHTML=scare1;

document.getElementById("p2s").innerHTML=scare2;

document.getElementById("playerq").innerHTML="question turn-"+player_1name;

document.getElementById("playera").innerHTML="answer turn-"+player_2name;


function send() {

    var getwood=document.getElementById("word").value;

    var word=getwood.toLowerCase();

    console.log(word);

    var cy1=word.charAt(1);

    var len=Math.floor(word.length/2);

    var cy2=word.charAt(len);

    var l= word.length-1;

    var cy3=word.charAt(l);

    remove1 =word.replace(cy1,"_");

    var remove2= remove1.replace(cy2, "_");

    var remove3= remove2.replace(cy3, "_")

    console.log(remove3);

    questionword="<h4 id='word_display'> q "+ remove3+"</h4>";

    input_box = "<br><input type='text' idAnswer : ='input_check_box'>";

    var buton="<br><br><button onclick='check()'>check</button>";

    row=questionword+input_box+buton;

    document.getElementById("output").innerHTML=row;

    document.getElementById("word").value="";

}