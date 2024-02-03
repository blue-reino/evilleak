let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

let scrollDown = document.querySelector('.scroll-down');


var modal = document.getElementById("productmodal");


var btn = document.getElementById("open-modal");

var closebtn = document.getElementsByClassName("close")[0];

// Broken Blur
// function toggle(){
//     var blur= document.getElementById('blur');
//     blur.classList.toggle('active');
// };

// When the user clicks the button, open the modal 
btn.onclick = function () {

    // toggle();
    let opacityNum = .1;
    let opacityInterval = setInterval(function () {
        opacityNum += 0.1;
        modal.style.opacity = opacityNum;
        if (opacityNum >= 1) {
            clearInterval(opacityInterval);
            modal.style.transition = "transform 0.2s ease";
            modal.style.transform = "translateY(-10%)";


        }
    }, 10);

    // Start the opacity animation immediately
    modal.style.opacity = opacityNum;

    setTimeout(function() {
        modal.style.display = "block";
    }, 10); 

}


// When the user clicks on <span> (x), close the modal
closebtn.onclick = function () {
    // toggle();
    let opacityNum = 1;
    let opacityInterval = setInterval(function () {
        opacityNum -= 0.1;
        modal.style.opacity = opacityNum;
        if (opacityNum <= 0) {
            clearInterval(opacityInterval);
            modal.style.display = "none"; // Hide the modal when opacity animation completes
        }
    }, 10);

    // Start the opacity animation immediately
    modal.style.opacity = opacityNum;

    modal.style.transition = "transform 0.2s ease";
    modal.style.transform = "translateY(20%)";


}

// When the user clicks anywhere outside of the modal, close it
// Broken
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


// const pre = document.querySelector(".hero-img")



// Back to Top Button Broken
// document.addEventListener("DOMContentLoaded", () => {
//     const toTop = document.querySelector('.top-top');


//     window.addEventListener("scroll", () => {
//         if (window.scrollY > 100) {
//             toTop.classList.add("active");
//         } else {
//             toTop.classList.remove("active");
//         }
//     });
// });



menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');

};

// Broken rotation
// document.addEventListener("mousemove", (e) => {
//     rotateElement(e, pre);
// });

// function rotateElement(event, element){

//     // getting mouse positions
//     const x = event.clientX;
//     const y = event.clientY;

//     // middle
//     const middleX = window.innerWidth / 2;
//     const middleY = window.innerHeight / 2;


//     // offset from middle
//     const offsetX = ((x - middleX)) * 45;
//     const offsetY = ((y - middleY)) * 45;

//     element.style.setProperty("--rotateX",-1* offsetY + "deg");
//     element.style.setProperty("--rotateY", offsetX + "deg");


// }


const sr = ScrollReveal({
    distance: '65px',
    duration: 2100,
    delay: 450,
    reset: false
});

const sr2 = ScrollReveal({
    distance: '65px',
    duration: 1600,
    delay: 350,
    reset: false
});

sr.reveal('.hero-text', {
    delay: 200,
    origin: 'top'
});

sr.reveal('.hero-img', {
    delay: 450,
    origin: 'bottom'
});

sr.reveal('.icons', {
    delay: 500,
    origin: 'left'
});

sr.reveal('.scroll-down', {
    delay: 500,
    origin: 'right'
});



sr2.reveal('.card a', {
    delay: 150,
    origin: 'bottom'
});

sr2.reveal('.devs:nth-child(1)', {
    delay: 120,
    origin: 'bottom'
});


sr2.reveal('.devs:nth-child(2), .devs:nth-child(3) ', {
    delay: 200,
    origin: 'bottom'
});


sr2.reveal('.showcase', {
    delay: 100,
    origin: 'bottom'
});


sr2.reveal('.text', {
    delay: 50,
    origin: 'bottom'

})


