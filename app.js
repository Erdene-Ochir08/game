// function -> dahij ashiglah bolomjtoi bagts kod
hello("Bat",55);
function hello(name,age){
	console.log("Hello "+name);
	console.log("Your age " + age);
}
hello("Erdene-Ochir",23);
hello("Suvd",15);
function test(){
	alert("Button clicked");
}
function sum(a,b){
	console.log(a+b);
}
sum(50,88);
sum(880,6658);
function color(){
	document.getElementsByTagName('body')[0].style.backgroundColor="aqua";
}
var computer = document.querySelector('.computer');
var player = document.querySelector('.player');
var winner = document.querySelector('.winner');
var cCount=0,pCount=0;
function play(playerChoice){
	// 0,1,2
	random = Math.floor(Math.random()*3);
	var computerChoice;
	if(random==0){
		computerChoice="paper";
		computer.innerText="Computer choice: paper";
	}else if(random==1){
		computerChoice="scissor";
		computer.innerText="Computer choice: scissor";
	}else if(random==2){
		computerChoice="rock";
		computer.innerText="Computer choice: rock";
	}
	console.log(computerChoice);
	player.innerText = "Player choice : " + playerChoice;
	// paper->rock, rock->scissor, scissor->paper
	if(playerChoice==computerChoice){
		winner.innerText=('Tie!');
	}else if(
	(playerChoice=="paper"&&computerChoice=="rock") ||
	(playerChoice=="rock"&&computerChoice=="scissor")||
	(playerChoice=="scissor"&&computerChoice=="paper")
	){
		winner.innerText="You win!";
		pCount++;
		document.querySelector('.pCount').innerText="Player:"+pCount;
	}else{
		winner.innerText="Computer win!";
		cCount++;
		document.querySelector('.cCount').innerText="Computer:"+cCount;
	}
}
function restart(){
	pCount=0;
	cCount=0;
	
}