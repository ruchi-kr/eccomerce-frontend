
// to add header and footer dynamically to every page
$(function () {
    $("#header").load("../common/header.html");
    $("#footer").load("../common/footer.html");
});

// to enable dark mode light mode with a button

function dark() {
    // const pageURLs = [
    //     '../man/allproductsmen.html',
    //     '../man/hoodies.html',
    //     '../man/pants.html',
    //     '../man/shirts.html',
    //     '../woman/allproductswomen.html',
    //     '../woman/dress.html',
    //     '../woman/pants.html',
    //     '../woman/skirts.html'
    //   ];


    // let dark1 = document.getElementById('d').value;
    // var light1 = document.getElementById('l').value;

    // if (dark1 == "dark") {
    //     document.querySelector("html").setAttribute("data-bs-theme", "dark");
    //     document.getElementById("d").value="light";
    //     console.log(dark1);
    // }
    // else {
    //     document.querySelector("html").setAttribute("data-bs-theme", "light");
    //     document.getElementById("d").value="dark";
    //     console.log(dark1);
    // }
    document.querySelector("html").setAttribute("data-bs-theme", "dark");
    // document.getElementsByClassName("box").style.backgroundColor="black"; 
    // document.querySelector("body").style.backgroundColor="grey"; 
}
function light() {
    document.querySelector("html").setAttribute("data-bs-theme", "light");
}
// to pause carousel
// $("#btnpause").on('click', function (e){
//     e.preventDefault();
// $(".carousel").carousel("pause");

// });

// function pauseCarousel() {
//     // Get the carousel element
//     var carousel1 = document.getElementById("carouselExampleRide");
//     // Pause the carousel
//     carousel1.pause();
// // document.getElementById("pauseit").value = "<i class="fa-solid fa-pause"></i>";
// }
// function clearInterval(){
//     document.querySelector('.carousel').setAttribute("interval");
// }

// function pauseCarousel() {
//   // Get the carousel element
//   var carousel = document.querySelector('.carousel');
//   // Get the carousel interval
//   var interval = carousel.getAttribute('data-bs-interval');
//   // Clear the carousel interval
//   clearInterval(interval);
//    // Add a data-paused attribute to the carousel element
//   carousel.setAttribute('data-bs-paused', 'true');
// }

// var carousel = document.querySelector('.carousel').getAttribute('data-bs-ride');
// carousel.addEventListener('mouseover', () => {
//     carousel.setAttribute('true');
//   });
//   carousel.addEventListener('mouseout', () => {
//     carousel.setAttribute('false');
//   });
// const carousel = document.querySelector('.carousel');
// carousel.addEventListener('mouseover', () => {
//   carousel.classList.add('active');
// });
// carousel.addEventListener('mouseout', () => {
//   carousel.classList.remove('active');
// });

// var carouselInterval;

// function startCarousel() {
//   // Define your carousel elements and set their initial display properties
//   var carouselElements = document.getElementsByClassName('carousel-item');
//   for (var i = 0; i < carouselElements.length; i++) {
//       carouselElements[i].style.display = 'none';
//   }

//   // Set the display property of the first carousel element to 'block'
//   carouselElements[0].style.display = 'block';

//   // Define your interval duration in milliseconds
//   var intervalDuration = 3000; // 3 seconds

//   // Start the carousel
//   carouselInterval = setInterval(function() {
//       // Hide the current carousel element
//       carouselElements[0].style.display = 'none';

//       // If the current carousel element is the last one,
//       // set the display property of the first carousel element to 'block'
//       // Otherwise, set the display property of the next carousel element to 'block'
//       if (carouselElements[0] === carouselElements[carouselElements.length - 1]) {
//           carouselElements[0].style.display = 'block';
//       } else {
//           carouselElements[1].style.display = 'block';
//       }

//       // Update the array of carousel elements
//       carouselElements = Array.from(carouselElements).slice(1);
//       carouselElements.push(carouselElements[carouselElements.length - 1]);
//   }, intervalDuration);
// }

// // function startCarousel() {
// //  // Your code to start the carousel animation goes here
// //  // For example:
// //  carouselInterval = setInterval(function() {
// //     // Code to change the displayed carousel item
// //  }, 2000); // Adjust the time interval as needed
// // }

// function pauseCarousel() {
//  clearInterval(carouselInterval);
// }

// document.getElementById('carousel-container').addEventListener('mouseover', startCarousel );
// document.getElementById('carousel-container').addEventListener('mouseout', pauseCarousel );





