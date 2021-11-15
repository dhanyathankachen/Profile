

$(document).ready(function(){
    

    $("#typed").typed({
        strings: ["Web Developer"],
        typeSpeed: 100,
        startDelay: 0,
        backSpeed: 60,
        backDelay: 2000,
        loop: true,
        cursorChar: "|",
        contentType: 'html'
    });

    $("#contact_form").submit(function(){
    if($("#name").val()== '')
    {
        $("#error1").html("Please enter your first name");
        $("#name").focus();
        return false;
    }
    else if($("#email").val()== ''){
        $("#error2").html("Please enter your email");
        $("#email").focus();
        return false;
    }
    else if($("#subject").val()== ''){
        $("#error3").html("Please enter Subject");
        $("#subject").focus();
        return false;
    }
    else if($("#message").val()== ''){
        $("#error4").html("Please enter your Message");
        $("#message").focus();
        return false;
    }
    else{    
        alert("Email sended successfully");   
        // return true;
    }
      });
    });