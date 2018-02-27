var counter_sum = 0;
var counter_true = 0;

function show0_true(){
    document.getElementById('div0_true').style.display = 'block';
    document.getElementById('div0_0').style.display = 'none';
    counter_sum += 1;
    counter_true +=1;
  }
function show0_false(){
    document.getElementById('div0_false').style.display = 'block';
    document.getElementById('div0_0').style.display = 'none';
    counter_sum += 1;
  }

  
function show1_true(){
    document.getElementById('div1_true').style.display = 'block';
    document.getElementById('div0_1').style.display = 'none';
    counter_sum += 1;
    counter_true +=1;
  }
function show1_false(){
    document.getElementById('div1_false').style.display = 'block';
    document.getElementById('div0_1').style.display = 'none';
    counter_sum += 1;
  }

  function show2_true(){
    document.getElementById('div2_true').style.display = 'block';
    document.getElementById('div0_2').style.display = 'none';
    counter_sum += 1;
    counter_true +=1;
  }
function show2_false(){
    document.getElementById('div2_false').style.display = 'block';
    document.getElementById('div0_2').style.display = 'none';
    counter_sum += 1;
  }

  function show3_true(){
    document.getElementById('div3_true').style.display = 'block';
    document.getElementById('div0_3').style.display = 'none';
    counter_sum += 1;
    counter_true +=1;
  }
function show3_false(){
    document.getElementById('div3_false').style.display = 'block';
    document.getElementById('div0_3').style.display = 'none';
    counter_sum += 1;
  }

  function show4_true(){
    document.getElementById('div4_true').style.display = 'block';
    document.getElementById('div0_4').style.display = 'none';
    counter_sum += 1;
    counter_true +=1;
  }
function show4_false(){
    document.getElementById('div4_false').style.display = 'block';
    document.getElementById('div0_4').style.display = 'none';
    counter_sum += 1;
  }

  function show5_true(){
    document.getElementById('div5_true').style.display = 'block';
    document.getElementById('div0_5').style.display = 'none';
    counter_sum += 1;
    counter_true +=1;
  }
function show5_false(){
    document.getElementById('div5_false').style.display = 'block';
    document.getElementById('div0_5').style.display = 'none';
    counter_sum += 1;
  }

  function show6_true(){
    document.getElementById('div6_true').style.display = 'block';
    document.getElementById('div0_6').style.display = 'none';
    counter_sum += 1;
    counter_true +=1;
  }
function show6_false(){
    document.getElementById('div6_false').style.display = 'block';
    document.getElementById('div0_6').style.display = 'none';
    counter_sum += 1;
  }


  function show7_true(){
    document.getElementById('div7_true').style.display = 'block';
    document.getElementById('div0_7').style.display = 'none';
    counter_sum += 1;
    counter_true +=1;
  }
function show7_false(){
    document.getElementById('div7_false').style.display = 'block';
    document.getElementById('div0_7').style.display = 'none';
    counter_sum += 1;
  }
  
function show8_true(){
    document.getElementById('div8_true').style.display = 'block';
    document.getElementById('div0_8').style.display = 'none';
    counter_sum += 1;
    counter_true +=1;
  }
function show8_false(){
    document.getElementById('div8_false').style.display = 'block';
    document.getElementById('div0_8').style.display = 'none';
    counter_sum += 1;
  }

  
function show9_true(){
    document.getElementById('div9_true').style.display = 'block';
    document.getElementById('div0_9').style.display = 'none';
    counter_sum += 1;
    counter_true +=1;
  }
function show9_false(){
    document.getElementById('div9_false').style.display = 'block';
    document.getElementById('div0_9').style.display = 'none';
    counter_sum += 1;
  }
  
function show10_true(){
    document.getElementById('div10_true').style.display = 'block';
    document.getElementById('div0_10').style.display = 'none';
    counter_sum += 1;
    counter_true +=1;
  }
function show10_false(){
    document.getElementById('div10_false').style.display = 'block';
    document.getElementById('div0_10').style.display = 'none';
    counter_sum += 1;
  }
  
function show11_true(){
    document.getElementById('div11_true').style.display = 'block';
    document.getElementById('div0_11').style.display = 'none';
    counter_sum += 1;
    counter_true +=1;
  }
function show11_false(){
    document.getElementById('div11_false').style.display = 'block';
    document.getElementById('div0_11').style.display = 'none';
    counter_sum += 1;
  }

/*
(function ($) {
    "use strict";

    

    var name = $('.validate-input input[name="name"]');
    var email = $('.validate-input input[name="email"]');
    var subject = $('.validate-input input[name="subject"]');
    var message = $('.validate-input textarea[name="message"]');


    $('.validate-form').on('submit',function(){
        var check = true;

        if($(name).val().trim() == ''){
            showValidate(name);
            check=false;
        }

        if($(subject).val().trim() == ''){
            showValidate(subject);
            check=false;
        }


        if($(email).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
            showValidate(email);
            check=false;
        }

        if($(message).val().trim() == ''){
            showValidate(message);
            check=false;
        }

        return check;
    });


    $('.validate-form .input1').each(function(){
        $(this).focus(function(){
           hideValidate(this);
       });
    });

    function showValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).addClass('alert-validate');
    }

    function hideValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).removeClass('alert-validate');
    }
    
    

})(jQuery);*/