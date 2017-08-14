function splash_screen() {
	var splash = $('#splash');
	TweenMax.to(splash, 0.5, 
	{
		height: '200vh',
		width: '200vw',
		opacity: 1,
		transform: 'translate(-50vw, -50vh)',
		delay: 0.5,
		ease: Circ.easeIn,
		onComplete: second
	}
	);
};
function second() {
	var tedx = $('#ted_logo');
	var college = $('#college');
	TweenMax.to(tedx, 0.5, 
	{
		x: '0px'
	}
	);
	TweenMax.to(college, 1, 
	{
		transform: 'rotateX(0deg)',
		ease: Bounce.easeOut,
		delay: 0.5
	}
	);
	TweenMax.to(tedx, 1, 
	{
		scale: 1.1,
		delay: 1,
		repeat: -1,
		yoyo: true
	}
	);
	TweenMax.to('#coming_label', 1, 
	{
		opacity: 1,
		delay: 1
	}
	);
	TweenMax.to('#logo', 1, 
	{
		scale: 0.95,
		delay: 1,
		repeat: -1,
		yoyo: true
	}
	);
		
}