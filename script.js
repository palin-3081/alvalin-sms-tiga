window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    
    let logoImage = document.getElementById('logoImage');
    let tugasNamaNimKelas = document.getElementById('tugasNamaNimKelas');
    let containerNavbar2 = document.getElementById('containerNavbar2');
    let triggerPoint = window.innerHeight * .85;
    
    if (document.body.scrollTop > 1 || document.documentElement.scrollTop > 1) {
        logoImage.style.opacity = "0%";
        tugasNamaNimKelas.style.opacity = "0%"
    } else {
        logoImage.style.opacity = "100%";
        tugasNamaNimKelas.style.opacity = "100%"
    }
    
    if (window.innerWidth > 767) {
        if (document.body.scrollTop > triggerPoint || document.documentElement.scrollTop > triggerPoint) {
            containerNavbar2.style.top = "0px";
            containerNavbar2.style.bottom = "auto"
            setTimeout(function() {
                containerNavbar2.style.opacity = "100%";
            }, 50);
        } else {
            containerNavbar2.style.opacity = "0%";
            setTimeout(function() {
                containerNavbar2.style.top = "-75px";
                containerNavbar2.style.bottom = "auto"
            }, 250);
        }
    } if (window.innerWidth <768) {
        if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
            containerNavbar2.style.opacity = "100%";
            containerNavbar2.style.top = "auto";
            containerNavbar2.style.bottom = "0px";
        } else {
            containerNavbar2.style.top = "auto";
            containerNavbar2.style.bottom = "-75px";
            setTimeout(function() {
                containerNavbar2.style.opacity = "100%";
            }, 250);
        }
    }
}
