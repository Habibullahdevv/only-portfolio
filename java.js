const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});


function hoveraanim1(){
var mainC = document.querySelector("#elem1")
var fixed = document.querySelector("#fixed-image")
var fix1 = document.querySelector("#fiximg1")
mainC.addEventListener("mouseenter", function(){

fixed.style.display = "block" 
fix1.style.display = "block" 

})
mainC.addEventListener("mouseleave", function(){

    fixed.style.display = "none" 
    fix1.style.display = "none"
    })
        // var elems = document.querySelectorAll("#elem")
        // elems.forEach(function(e){
        // e.addEventListener("mouseenter", function(){
        //     var images = e.getAttribute("data-image")
        
        // fixed.style.backgroundImage = `url(${images})`
        
        // })
        
        // })
}

function hoveranim2(){
    var main = document.querySelector("#elem2")
    var fixe = document.querySelector("#fixed-image")
    var fix2 = document.querySelector("#fiximg2")
    main.addEventListener("mouseenter", function(){
    
    fixe.style.display = "block" 
    fix2.style.display = "block" 
    
    })
    main.addEventListener("mouseleave", function(){
    
        fixe.style.display = "none" 
        fix2.style.display = "none" 
        })
            // var elems = document.querySelectorAll("#elem")
            // elems.forEach(function(e){
            // e.addEventListener("mouseenter", function(){
            //     var images = e.getAttribute("data-image")
            
            // fixed.style.backgroundImage = `url(${images})`
            
            // })
            
            // })
    }
function hoveranim3(){
        var main = document.querySelector("#elem3")
        var fixe3 = document.querySelector("#fixed-image")
        var fix3 = document.querySelector("#fiximg3")
        main.addEventListener("mouseenter", function(){
        
        fixe3.style.display = "block" 
        fix3.style.display = "block" 
        
        })
        main.addEventListener("mouseleave", function(){
        
            fixe3.style.display = "none" 
            fix3.style.display = "none" 
            })
                // var elems = document.querySelectorAll("#elem")
                // elems.forEach(function(e){
                // e.addEventListener("mouseenter", function(){
                //     var images = e.getAttribute("data-image")
                
                // fixed.style.backgroundImage = `url(${images})`
                
                // })
                
                // })
        }
function hoveranim4(){
            var main = document.querySelector("#elem4")
            var fixe4 = document.querySelector("#fixed-image")
            var fix4 = document.querySelector("#fiximg4")
            main.addEventListener("mouseenter", function(){
            
            fixe4.style.display = "block" 
            fix4.style.display = "block" 
            
            })
            main.addEventListener("mouseleave", function(){
            
                fixe4.style.display = "none" 
                fix4.style.display = "none" 
                })
                    // var elems = document.querySelectorAll("#elem")
                    // elems.forEach(function(e){
                    // e.addEventListener("mouseenter", function(){
                    //     var images = e.getAttribute("data-image")
                    
                    // fixed.style.backgroundImage = `url(${images})`
                    
                    // })
                    
                    // })
            }

 function hoveranim5(){
                var main = document.querySelector("#elem5")
                var fixe5 = document.querySelector("#fixed-image")
                var fix5 = document.querySelector("#fiximg5")
                main.addEventListener("mouseenter", function(){
                
                fixe5.style.display = "block" 
                fix5.style.display = "block" 
                
                })
                main.addEventListener("mouseleave", function(){
                
                    fixe5.style.display = "none" 
                    fix5.style.display = "none" 
                    })
                     
                }            

 function swiperAnimation()
                {
                    var swiper = new Swiper(".mySwiper", {
                        slidesPerView: "auto",
                        centeredSlides: false,
                        spaceBetween: 10,
                        
                      });
                }


function loaderAnimation(){
                    var loader = document.querySelector("#loader")
                
                    setTimeout(function(){
                    
                    loader.style.top = "-100%"
                    
                    
                    },4100)
                }
// function footer(){

//     gsap.to("#page4", {
//         scrollTrigger: {
//           trigger: "#page4",
//           start: "top bottom",
//         //   end: "bottom bottom",
//           scrub: 0.1,
//           markers: true
//         },
//         y: 31000,
//       });


// }

    hoveraanim1()
    hoveranim2()
    hoveranim3()
    hoveranim4()
    hoveranim5()
    swiperAnimation()
    loaderAnimation()
// footer();
