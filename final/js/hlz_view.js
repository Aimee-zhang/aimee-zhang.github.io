 var left = $('.btn .left');
 var right = $('.btn .right');
 var selected1 = $('.selected1');
  var selected2 = $('.selected2');
  console.log(selected1);

 left.on('click',function () {
 	$(this).addClass("selected2");
 	$(this).removeClass("selected1");
 	right.removeClass("selected2");
 	right.addClass("selected1");

 })

 right.on('click',function () {
 	$(this).addClass("selected2");
 	$(this).removeClass("selected1");
 	left.addClass("selected1");
 	left.removeClass("selected2");
 })