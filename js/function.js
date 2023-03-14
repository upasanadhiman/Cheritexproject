$(document).ready(function () {
    $('.progress-value > span').each(function () {
        $(this).prop('Counter', 0).animate({
            Counter: $(this).text()
        }, {
            duration: 1500,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
    });
});

$('.toggle-acc').on('click', function (e) {

    var current = $(this);
    var currentParent = current.parents('li');
    var currentContent = currentParent.find('.content')
    var currentArrow = current.find('span');

    $('.content').not(currentContent).slideUp(350);
    $('.toggle-acc span').not(currentArrow).removeClass('rotate');

    currentArrow.toggleClass('rotate');
    currentContent.slideToggle(250);

 });

// scroll to top btn 
$(document).ready(function(){
    $(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
            $('#myBtn').fadeIn();
        } else {
            $('#myBtn').fadeOut();
        }
    });
    
    $('#myBtn').click(function(){
        $('html, body').animate({scrollTop : 0},600);
        return false;
    });
    
});

// countdown timer
var countDownDate = new Date("Jan 5, 2024 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (85000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  document.getElementById("timer").innerHTML = days + "d " + ":" + " "+ hours + "h " + ":" + " "
  + minutes + "m " + ":" + " " + seconds + "s ";
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("timer").innerHTML = "EXPIRED";
  }
}, 1000);

// pop up
$('#pop-btn').click(function(e){
    e.preventDefault();
    $('#overlay').css("display" , "block");
});

$('#close').click(function(){
    e.preventDefault();
    $('#overlay').css("display" , "none");
});

