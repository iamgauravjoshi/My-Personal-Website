let calcScrollvalue = () => {
    let scrollProgress = document.getElementById("progress");
    let progressValue = document.getElementById("progress-value");
    let pos = document.documentElement.scrollTop;
    let calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;

    let scrollValue = Math.round((pos*100) / calcHeight);

    if(pos > 100){
        scrollProgress.style.display = "grid";
    } else{
        scrollProgress.style.display = "none";
    }

    scrollProgress.addEventListener("click", () => {
        document.documentElement.scrollTop = 0;
    });
    scrollProgress.style.background = "conic-gradient(#03cc65 ${scrollValue}%, #d7d7d7 %{scrollValue}%)";
};

window.onscroll = calcScrollvalue;
window.onload = calcScrollvalue;









const mobile_nav = document.querySelector(".mobile-navbar-btn");

// const toggleNavbar =
//     ()alert(message?: any): void
//     alert("Please Subscribe");
// };

mobile_nav.addEventListener("click", () => toggleNavbar());