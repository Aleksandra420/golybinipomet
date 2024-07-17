window.onload = function(){
	init();
}

function init(){
	game = new Game();
}

function startClick(){
	game.start();
	play();
}

function play(){
	game.update();
	game.draw();
	game.miliseconds += 40;
	setTimeout(play,40);
}

playbtn.addEventListener('click', ()=>{
	startClick();
	var mainTheme = new Audio("main-theme.mp3");
    mainTheme.loop = true;
    mainTheme.volume = 0.5;
    mainTheme.play();
});

instruction.addEventListener('click', ()=>{
	playbtn.style.display = 'none';
	instruction.style.display = 'none';
	pomt.style.display = 'none';
	back.style.display = 'block';
	textinstr.style.display = 'block';
	playbtn.style.marginLeft= '50px';
	

	back.addEventListener('click', ()=>{
		playbtn.style.display = 'block';
		instruction.style.display = 'block';
		pomt.style.display = 'block';
		back.style.display = 'none';
		textinstr.style.display = 'none';
	});

	

});


document.addEventListener('keyup',function(e){
	if(e.keyCode == 32){
		game.dragon.up();
	}
})
restart.addEventListener('click',()=>{
	location.reload();
})