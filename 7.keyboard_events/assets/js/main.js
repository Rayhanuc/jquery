// $(document).ready(function() {
//   // $("#box").click(function () {
//   //   // var a = $("#box").html();
//   //   // console.log(a);
//   // });
//   $("#box").click(function () {
//     $("#box").css("background-color", "#61bcc8");
//   });

//   $("#box").dblclick(function () {
//     $("#box").css({"background-color": "#ebebeb", "color": "black", "transition": "500ms"});
//   });

//   $("#box").contextmenu(function () {
//     $("#box").css({"background-color": "orange", "color": "black", "transition": "500ms"});
//   });

//   $("#box").mouseenter(function () {
//     $("#box").css({"background-color": "red", "color": "white", "transition": "500ms"});
//   });

//   $("#box").mouseleave(function () {
//     $("#box").css({"background-color": "purple", "color": "yellow", "transition": "500ms"});
//   });
// });


$(document).ready(function(){
  $('body').keypress(function(){
    $(this).css('background','orange');
  });

  $('body').keyup(function(){
    $(this).css('background','#2980b9');
  });

  $('body').keydown(function(){
    $(this).css('background','#808000');
  });
});