
    var prevScrollpos = window.pageYOffset;
    window.onscroll = function () {
        var currentScrollPos = window.pageYOffset;
        console.log("Current scroll position:" + currentScrollPos)
        if (prevScrollpos > currentScrollPos) {
            document.querySelector("nav").style.top = "0";
        } else {
            document.querySelector("nav").style.top = "-125px";
        }
        prevScrollpos = currentScrollPos;
    }

    
    var menuToogle = function () {
        
        var mainNav = document.querySelector(".main-nav");
        var closedNavIcon = document.querySelector(".closeNavIcon")
        var openNavIcon = document.querySelector(".openNavIcon")
        
        if(mainNav.style.display == "") {
            mainNav.style.display = "block";
            openNavIcon.style.display = "none";
            closedNavIcon.style.display = "block"
            
        }
        else {
            mainNav.style.display = "";
            openNavIcon.style.display = "block";
            closedNavIcon.style.display = "none"
            
        }
         
    }




