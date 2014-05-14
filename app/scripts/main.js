console.log('\'Holy \'Moly!');

//first event
$(".button-one").click(function(){
	$('.click-one').html("wow")
})
//.html
//end

//second event
$(".button-two").click(function(){
	$('.click-two').html("wow")
})
//fadeIn()
//end


//third event
$( ".button-three" ).click(function() {
  $( ".click-three" ).animate({
	left: "+=50",
    height: "toggle"
  }, 3500, function() {
  });
});
//animate()
//end

//fourth event
$( ".button-four" ).click(function() {
  $( ".click-four" ).toggle( "slow", function() {
  });
});
//.toggle
//end


//fifth event
$( ".button-five" ).click(function() {
  $(".click-five").fadeToggle( "slow", "linear" );
});
//.fadeToggle
//end

//sixth event
$(".button-six").click(function(){
	$('.click-six').html("WOW!")
})
//.not???
//end

//seventh event
$(".button-seven").click(function(){
	$( ".click-seven" ).hide( "slow", function() {
  });
});
//does the same as .toggle
//.hide
//end

//eighth event
$('.button-eight').click(function(){
	$(".click-eight").css('background-color', 'lightblue');
});
//.css 
//end

//ninth event
$('.button-nine').click(function(){
	// $(this).parent().append($(this).clone()); //This would work as well
	$('.click-nine').clone().appendTo( $(this).parent() );
	$('.click-nine').css('margin-bottom', '1px');
});
//.clone
//end

//tenth event
$(".button-ten").click(function(){
	$('.click-ten').html("wow")
})
//
//end

//eleventh event
$(".button-eleven").click(function(){
	$('.click-eleven').html("wow")
})
//
//end

//twelth event
$(".button-twelve").click(function(){
	$('.click-twelve').html("wow")
})
//
//end

//thirtenth event
$(".button-thirteen").click(function(){
	$('.click-thirteen').html("wow")
})
//
//end

//fourtenth event
$(".button-fourteen").click(function(){
	$('.click-fourteen').html("wow")
})
//
//end

//fiftenth event
$(".button-fifteen").click(function(){
	$('.click-fifteen').html("wow")
})
//
//end




