$(document).ready(function () {
	var screen = [];
	var res=0;
	var som =0;
	var sym ;
	var s=[] ;
	var a=0;







	$("#1").click(function (){
		if(a==1){
			screen=[];
			a=0;
			s=[];
			$(".all").text(s.join(''));
		}
		screen.push(1);

		$(".text").text(screen.join(''));
	});
	$("#2").click(function (){
		if(a==1){
			screen=[];
			a=0;
			s=[];
			$(".all").text(s.join(''));
		}
		screen.push(2);
		$(".text").text(screen.join(''));
	});
	$("#3").click(function (){
		if(a==1){
			screen=[];
			a=0;
			s=[];
			$(".all").text(s.join(''));
		}
		screen.push(3);
		$(".text").text(screen.join(''));
	});
	$("#4").click(function (){
		if(a==1){
			screen=[];
			a=0;
			s=[];
			$(".all").text(s.join(''));
		}
		screen.push(4);
		$(".text").text(screen.join(''));
	});
	$("#5").click(function (){
		if(a==1){
			screen=[];
			a=0;
			s=[];
			$(".all").text(s.join(''));
		}
		screen.push(5);
		$(".text").text(screen.join(''));
	});
	$("#6").click(function (){
		if(a==1){
			screen=[];
			a=0;
			s=[];
			$(".all").text(s.join(''));
		}
		screen.push(6);
		$(".text").text(screen.join(''));
	});
	$("#7").click(function (){
		if(a==1){
			screen=[];
			a=0;
			s=[];
			$(".all").text(s.join(''));
		}
		screen.push(7);
		$(".text").text(screen.join(''));
	});
	$("#8").click(function (){
		if(a==1){
			screen=[];
			a=0;
			s=[];
			$(".all").text(s.join(''));
		}
		screen.push(8);
		$(".text").text(screen.join(''));
	});
	$("#9").click(function (){
		if(a==1){
			screen=[];
			a=0;
			s=[];
			$(".all").text(s.join(''));
		}
		screen.push(9);
		$(".text").text(screen.join(''));
	});
	$("#0").click(function (){
		if(a==1){
			screen=[];
			a=0;
			s=[];
			$(".all").text(s.join(''));
		}
		screen.push(0);
		$(".text").text(screen.join(''));
	});
	$("#p").click(function (){
		if(screen.indexOf(".") == -1){
		screen.push(".");
		}
		$(".text").text(screen.join(''));
	});
	$("#pm").click(function (){
		if(screen.indexOf("-") == -1){
		screen.unshift("-");
		}else{
			screen.shift();
		}
		$(".text").text(screen.join(''));
	});

	$("#ce").click(function (){
		screen = [];
		s=[];
		res=0;
		som=0;
		$(".all").text(s.join(''));
		$(".text").text(screen.join(''));
	});

	$("#c").click(function (){
		screen.pop();
		$(".text").text(screen.join(''));
	});

	$("#plus").click(function (){
		res+=parseFloat(screen.join(''));
		if(a!=1){
		s.push(screen.join(''));
		}
		screen =[];
		sym="+";
		s.push(sym);
		$(".text").text(screen.join(''));
		$(".all").text(s.join(''));
		a=0;

	});

	$("#moins").click(function (){

			if(res == 0){
			res=parseFloat(screen.join(''));
		}else{
		res-=parseFloat(screen.join(''));
		}
		if(a!=1){
		s.push(screen.join(''));
		}
		screen =[];
		sym="-";
		s.push(sym);
		$(".text").text(screen.join(''));
		$(".all").text(s.join(''));
		a=0;
	});

	$("#egal").click(function (){
		switch(sym){
			case "+": som = res + parseFloat(screen.join(''));
				break;
			case "-": som = res - parseFloat(screen.join(''));
				break;
			case "*": som = res * parseFloat(screen.join(''));
				break;
		    case "/": som = res / parseFloat(screen.join(''));
				break;
		}
		if(a!=1){
		s.push(screen.join(''));
		}
		screen=[];
		screen.push(som);
		res=0;
		$(".text").text(screen.join(''));
		$(".all").text(s.join(''));
		//s=[];
		a=1;
	});

	$("#fois").click(function (){
		if(res == 0){
			res=parseFloat(screen.join(''));
		}else{
		res*=parseFloat(screen.join(''));
		}
		if(a!=1){
		s.push(screen.join(''));
		}
		screen =[];
		sym="*";
		s.push(sym);
		$(".text").text(screen.join(''));
		$(".all").text(s.join(''));
		a=0;
	});

	$("#div").click(function (){
		if(res == 0){
			res=parseFloat(screen.join(''));
		}else{
		res/=parseFloat(screen.join(''));
		}
		if(a!=1){
		s.push(screen.join(''));
		}
		screen =[];
		sym="/";
		s.push(sym);
		$(".text").text(screen.join(''));
		$(".all").text(s.join(''));
		a=0;
	});
	/*
	$("#pr").click(function (){
		var = parseFloat(screen.join(''))
		screen.push(2);
		$(".text").text(screen.join(''));
	});

	$("#2").click(function (){
		screen.push(2);
		$(".text").text(screen.join(''));
	});
	*/





});
