  $(document).ready(function(){
    $("#all").click(function(){
        $(".prof").show();
        $(".far").show();
        $(".oth").show();
    })
    
    $("#professional").click(function(){
        //alert();
        $(".prof").fadeIn(2000);
        $(".far").hide();
        $(".oth").hide();
    })
    $("#farwall").click(function(){
        $(".prof").hide();
        $(".far").fadeIn(1000);
        $(".oth").hide();
    })

    $("#other").click(function(){
        $(".prof").hide();
        $(".far").hide();
        $(".oth").fadeIn(1000);
    })
})
// <!-- </script> -->
