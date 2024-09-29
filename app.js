//massive/array -> [too,ug,unen/hudal,null/hooson] olon utga zereg hadgalna
var toonuud =[1,2,3,4,5,6];
console.log(toonuud);
// index -> elementiin bairshil. 0-ees ehelne.
console.log(toonuud[0]); // massiviin hamgiin ehnii utga
console.log(toonuud[toonuud.length-1]); // hamgiin suuliin utga
for(var i=0; i<=toonuud.length-1;i++){
	console.log(toonuud[i]);
}
var too=[2,3,4,5,6];
console.log(too);
console.log(too[0]); 
console.log(too[too.length-1]);
console.log(too[0]*too[too.length-1]);

var num=[3,6,7,4,2];
for(var i=0; i<=num.length-1; i++){
	if(num[i]%2==0){
		console.log(num[i]+" tegsh ");
	}else{
		console.log(num[i]+" sondgoi ");
	}
}

var number=[1,2,3,4,5,6,7,8,9,10];
var niilber=0, urjver=1;
for(i=0;i<number.length-1; i++){
	niilber=niilber+number[i];
	urjver=urjver*number[i];
}
 console.log("niilber "+niilber);
 console.log("urjver "+urjver);
var body=document.getElementsByTagName("body")[0];
var colors=["blue","pink","yellow","green","purple"];
var i=-1;
function change(){
	i++;
	if(i>4){
		i=0;
	}
	body.style.backgroundColor=colors[i];
}
function uhrah(){
	i--;
	if(i<0){
		i=4;
	}
	body.style.backgroundColor=colors[i];
}
//setTimeout-> func-iig her hugatsaanii daraa ajilihiig zaana
var s
var autoBtn= document.querySelector(".auto")
var stopBtn= document.querySelector(".stop")
function auto(){
	i++;
	if(i>4){
		i=0;
	}
	body.style.backgroundColor=colors[i];
	s=setTimeout(auto,1000);
	autoBtn.disabled=true;
}

function stop(){
	clearTimeout(s);
	stopBtn.disabled=true;
	autoBtn.disabled=false;
}