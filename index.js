$(() => {
  let isOpen = true;

  $(".search , .search2 , .search3 , .search4 , .search5 , .search6, .search7 , .search8 , .search9 , .search10 ").click(() => {
    if (isOpen == true) {
      $(".search__blog").css({
        transform: "translateY(0)",
        opacity: "100%",
      });
      $(".search").css({
        "color": "#46A358",
        "transition": "all 0.5s"

      });
      isOpen = false;
    } else {
      $(".search__blog").css({
        transform: "translateY(-100%)",
        opacity: "0%",
      });
      $(".search").css({
        "color": "#3D3D3D",
        "transition": "all 0.5s"

      });
      isOpen = true;
    }
  });
 

  $(".three-span").click(() => {
    $(".one-span").css({
      width: "15px",
      height: "15px",
      transition: "all 0.5s",
    });
    $(".two-span").css({
      background: "#46A358",
    });
    $(".three-span").css({
      width: "20px",
      height: "20px",
      background: "#46A358",
      transition: "all 0.5s",
    });

    $(".span__result").html("$115 - $39");
  });

  $(".one-span").click(() => {
    $(".one-span").css({
      width: "20px",
      height: "20px",
      transition: "all 0.5s",
    });
    $(".two-span").css({
      background: "#C4D5C7",
      transition: "all 0.5s",
    });
    $(".three-span").css({
      width: "15px",
      height: "15px",
      background: "#C4D5C7",
      transition: "all 0.5s",
    });

    $(".span__result").html("$115 ");
  });

  let twoOpen = true;
  $(".next__header__aside__center__btn").click(() => {
    if (twoOpen == true) {
      $(".span__result").html("$76");
      twoOpen = false;
    } else {
      $(".span__result").html("$115");
      twoOpen = true;
    }
  });


  $(".heart1").click(()=>{
    $(".heart2").css({
      "display": "block",
      "transition": "all 0.5s"

    });
    $(".heart1").css({
      "display": "none",
      "transition": "all 0.5s"

    });
  });


  $(".heart2").click(()=>{
    $(".heart1").css({
      "display": "block",
      "transition": "all 0.5s"

    });
    $(".heart2").css({
      "display": "none",
      "transition": "all 0.5s"

    });
  });
  $(".heart1").click(()=>{
    $(".heart2").css({
      "display": "block",
      "transition": "all 0.5s"

    });
    $(".heart1").css({
      "display": "none",
      "transition": "all 0.5s"

    });
  });


  

  let ThreeOpen = true;

     $(".shop1").click(()=>{
      if(ThreeOpen == true)
      {
        $(".shop1").css({
          "color":"#46A358",
          "transition": "all 0.5s"

        });
        ThreeOpen = false;
      }
      else
      {
        $(".shop1").css({
          "color":"#3D3D3D",
          "transition": "all 0.5s"
        });
        ThreeOpen = true;
      }
     });


});
