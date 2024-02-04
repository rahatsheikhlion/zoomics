 $(document).ready(function(){
    //menu-on-off-button
    $(".hamburger i").click(function(){
      $(".zoomics-nav").show();
    });
    $(".crose-icon i").click(function(){
        $(".zoomics-nav").hide();
      });

      //video-play-pos-button
      $(".video-play img").click(function(){
        $(".video-box").show();
      });
      $(".video-box i").click(function(){
        $(".video-box").hide();
      });

//pplr-section-tabs

      $(".popular-comic-contant ul li:nth-child(2)").click(function(){
        $(".upcoming-comic-itm").show();
        $(".all-comic-itm, .weekly-best-comic-itm, .most-popular-comic-itm").hide();
        $('.popular-comic-contant ul li:nth-child(1), .popular-comic-contant ul li:nth-child(3), .popular-comic-contant ul li:nth-child(4)').css({
            'color': '#8D93A3',
          });
          $('.popular-comic-contant ul li:nth-child(2)').css({
            'color': 'black',
          });

      });


      $(".popular-comic-contant ul li:nth-child(1)").click(function(){
        $(".all-comic-itm").show();
        $(".upcoming-comic-itm, .weekly-best-comic-itm, .most-popular-comic-itm").hide();
        $('.popular-comic-contant ul li:nth-child(2), .popular-comic-contant ul li:nth-child(3), .popular-comic-contant ul li:nth-child(4)').css({
            'color': '#8D93A3',
          });
          $('.popular-comic-contant ul li:nth-child(1)').css({
            'color': 'black',
          });

      });

      $(".popular-comic-contant ul li:nth-child(3)").click(function(){
        $(".weekly-best-comic-itm").show();
        $(".upcoming-comic-itm, .all-comic-itm, .most-popular-comic-itm").hide();
        $('.popular-comic-contant ul li:nth-child(2), .popular-comic-contant ul li:nth-child(1), .popular-comic-contant ul li:nth-child(4)').css({
            'color': '#8D93A3',
          });
          $('.popular-comic-contant ul li:nth-child(3)').css({
            'color': 'black',
          });

      });

      $(".popular-comic-contant ul li:nth-child(4)").click(function(){
        $(".most-popular-comic-itm").show();
        $(".upcoming-comic-itm, .all-comic-itm,.weekly-best-comic-itm ").hide();
        $('.popular-comic-contant ul li:nth-child(2), .popular-comic-contant ul li:nth-child(1), .popular-comic-contant ul li:nth-child(3)').css({
            'color': '#8D93A3',
          });
          $('.popular-comic-contant ul li:nth-child(4)').css({
            'color': 'black',
          });

      });


    //  s-p-section


    $(".superhero-content ul li:nth-child(2)").click(function(){
        $(".upcoming-toggle-control").show();
        $(".all-toggle-control, .weekly-best-toggle-control, .most-popular-toggle-control").hide();
        $('.superhero-content ul li:nth-child(1), .superhero-content ul li:nth-child(3), .superhero-content ul li:nth-child(4)').css({
            'color': '#8D93A3',
          });
          $('.superhero-content ul li:nth-child(2)').css({
            'color': 'black',
          });

      });


      $(".superhero-content ul li:nth-child(1)").click(function(){
        $(".all-toggle-control").show();
        $(".upcoming-toggle-control, .weekly-best-toggle-control, .most-popular-toggle-control").hide();
        $('.superhero-content ul li:nth-child(2), .superhero-content ul li:nth-child(3), .superhero-content ul li:nth-child(4)').css({
            'color': '#8D93A3',
          });
          $('.superhero-content ul li:nth-child(1)').css({
            'color': 'black',
          });

      });

      $(".superhero-content ul li:nth-child(3)").click(function(){
        $(".weekly-best-toggle-control").show();
        $(".upcoming-toggle-control, .all-toggle-control, .most-popular-toggle-control").hide();
        $('.superhero-content ul li:nth-child(2), .superhero-content ul li:nth-child(1), .superhero-content ul li:nth-child(4)').css({
            'color': '#8D93A3',
          });
          $('.superhero-content ul li:nth-child(3)').css({
            'color': 'black',
          });

      });

      $(".superhero-content ul li:nth-child(4)").click(function(){
        $(".most-popular-toggle-control").show();
        $(".upcoming-toggle-control, .all-toggle-control, .weekly-best-toggle-control ").hide();
        $('.superhero-content ul li:nth-child(2), .superhero-content ul li:nth-child(1), .superhero-content ul li:nth-child(3)').css({
            'color': '#8D93A3',
          });
          $('.superhero-content ul li:nth-child(4)').css({
            'color': 'black',
          });

      });

     // sp-hero-video
     $(".demo-video img").click(function(){
        $(".super-hero-video").show();
      });
      $(".super-hero-video i").click(function(){
        $(".super-hero-video").hide();
      });


      //load-more-system
      $(".load-more").click(function(){
        $(".load-more-itm, .load-more-itm-tow").show();
      });


// data-toggle

      $(".data-toggle-content-ul ul li:nth-child(2)").click(function(){
        $(".data-toggle-containt p:nth-child(2)").show();
        $(".data-toggle-containt p:nth-child(1), .data-toggle-containt p:nth-child(3)").hide();
        $('.data-toggle-content-ul ul li:nth-child(1), .data-toggle-content-ul ul li:nth-child(3)').css({
            'color': '#8D93A3',
          });
          $('.data-toggle-content-ul ul li:nth-child(2)').css({
            'color': 'black',
          });

      });
      $(".data-toggle-content-ul ul li:nth-child(3)").click(function(){
        $(".data-toggle-containt p:nth-child(3)").show();
        $(".data-toggle-containt p:nth-child(1), .data-toggle-containt p:nth-child(2)").hide();
        $('.data-toggle-content-ul ul li:nth-child(1), .data-toggle-content-ul ul li:nth-child(2)').css({
            'color': '#8D93A3',
          });
          $('.data-toggle-content-ul ul li:nth-child(3)').css({
            'color': 'black',
          });

      });
      $(".data-toggle-content-ul ul li:nth-child(1)").click(function(){
        $(".data-toggle-containt p:nth-child(1)").show();
        $(".data-toggle-containt p:nth-child(2), .data-toggle-containt p:nth-child(3)").hide();
        $('.data-toggle-content-ul ul li:nth-child(2), .data-toggle-content-ul ul li:nth-child(3)').css({
            'color': '#8D93A3',
          });
          $('.data-toggle-content-ul ul li:nth-child(1)').css({
            'color': 'black',
          });

      });

  });
