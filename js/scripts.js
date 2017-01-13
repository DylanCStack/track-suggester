$(document).ready(function(){
  var name;
  var age;
  var color;
  var currentAns;
  var java = 0;
  var php = 0;
  var ruby = 0;
  var cnet = 0;
  var design = 0;
  var css = 0;
  var night = 0;
  var ans1;
  var ans2;
  $("#intro form").submit(function(event){
    name = $("input#name").val();
    age = parseInt($("input#age").val());
    color = $("input#color").val();
    $("span.name").text($("input#name").val());

    $("#intro form").fadeToggle();
    $("#questions").fadeToggle(1000);

    event.preventDefault();

  });
  $(".col-md-4").click(function(){
    $(".col-md-4").removeClass("highlighted");
    currentAns= $(this).attr("class").substr(-3);
    $(this).addClass("highlighted");


  });

  $("div.btn.q1").click(function(){
    $(".q1").hide();
    $(".q2").show();
    $(".question").text("2");
    $(".fullQuestion").text("What would you rather work on, websites or application software?")
    if(currentAns=== "op1") {
      night -=1;
    } else if (currentAns=== "op2") {
      night +=6;
    } else if (currentAns=== "op3") {
      night +=1;
    }
  });
  $("div.btn.q2").click(function(){
    $(".q2").hide();
    $(".q3").show();
    $(".question").text("3");
    $(".fullQuestion").text("What type of company would you prefer to work for?")
    if(currentAns=== "op1") {
      php +=2;
      ruby +=2;
    } else if (currentAns=== "op2") {
      java +=2;
      cnet +=2;
      css +=2;
    } else if (currentAns=== "op3") {
      night +=.5;
    }
  });
  $("div.btn.q3").click(function(){
    $(".q3").hide();
    $(".q4").show();
    $(".question").text("4");
    $(".fullQuestion").text("Would you prefer to work front-end or back-end?")
    if(currentAns=== "op1") {
      java +=2;
      cnet +=2;
      php +=1;
    } else if (currentAns=== "op2") {
      java +=2;
      ruby +=2;
      css +=1;
    } else if (currentAns=== "op3") {
      night +=.5;
    }
  });
  $("div.btn.q4").click(function(){
    $(".q4").hide();
    $(".q5").show();
    $(".question").text("5");
    $(".fullQuestion").text("If you are working on the web, what kind of website would you want to make?")
    if(currentAns=== "op1") {
      css +=4;
    } else if (currentAns=== "op2") {
      java +=2;
      ruby +=2;
      php +=2;
    } else if (currentAns=== "op3") {
      night +=.5;
    }
  });
  $("div.btn.q5").click(function(){

    if(currentAns=== "op1") {
      php +=2;
      java +=1;
    } else if (currentAns=== "op2") {
      ruby +=2;
    } else if (currentAns=== "op3") {
      night +=.5;
    }

    if(java>php && java>ruby && java>css && java>cnet && java>night) {
      $(".firstResult").text("Java/Android");
      $(".explination1").text(" has broad appeal for both large and small enterprises. It is a high demand language with a range of uses. It is specifically vital for Android developers.");
    } else if (php>java && php>ruby && php>css && php>cnet && php>night) {
      $(".firstResult").text("Php/Drupal");
      $(".explination1").text(" is used in content-heavy, low interactivity websites. It is used widely from small buisness sites to large government operations. It is very useful for building websites for specific buisness or organizations.");
    } else if (ruby>java && ruby>php && ruby>css && ruby>cnet && ruby>night) {
      $(".firstResult").text("Ruby/Rails");
      $(".explination1").text(" is used for building interactive web applications, and dynamic websites. It is a very popular language and framework for small startup companies. It can be used to make a product very quickly.");
    } else if (css>java && css>php && css>ruby && css>cnet && css>night) {
      $(".firstResult").text("CSS/Design");
      $(".explination1").text(" is the defacto track for the front-end developers wanting to attend Epicodus. You will learn how to create various website layouts, user interfaces, and proper navigation.");
    } else if (cnet>java && cnet>php && cnet>ruby && cnet>css && cnet>night) {
      $(".firstResult").text("C#/.NET");
      $(".explination1").text(" is most popular for large businesses and corporations, particularly for use in creating internally used software.");
    } else {
      $(".firstResult").text("Intro to Programming(night)");
      $(".explination1").text(" seems like the best choice for you because you seem unsure of your future as a developer, yet you want to come to Epicodus. Therefore you should take the nighttime intro to programming class. This will allow you to familiarize yourself with coding and give you time to make up your mind on what track you will want to take in the future. Its cheap too!");
    }

    $("#survey").hide();
    $("#results").show();
  });


});
