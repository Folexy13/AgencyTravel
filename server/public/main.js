var timesClicked = 0;
var dropDown = document.getElementsByClassName("drop")[0];
var doSome = document.getElementsByClassName("dbutton");
function dShow() {
  timesClicked++;
  if (timesClicked == 3) {
    timesClicked = 1;
  }
  // dropDown.classList.add('show');
  if (timesClicked > 1) {
    //run second function
    dropDown.classList.remove("show");
  } else {
    //run first function
    dropDown.classList.add("show");
  }
}
// HANDBURGER
const dashboard = document.getElementsByClassName("dashboard__color")[0];
const dismiss = document.getElementsByClassName("dismiss")[0];
const handBurger = document.getElementsByClassName("handburger")[0];
const dashBlur = document.getElementsByClassName("dashboard__container")[0];
handBurger.addEventListener("click", function () {
  dismiss.classList.remove("d-none");
  dismiss.classList.add("d-block");
  dashboard.classList.remove("d-none");
  dashboard.classList.remove("col-lg-3");
  dashboard.classList.add("side");
  console.log(dashboard);
});
dismiss.addEventListener("click", function () {
  dashboard.classList.add("d-none");
  dismiss.classList.add("d-none");
});

// function myFunction() {
//   /* Get the text field */
//   var copyText = document.getElementById("ref");
//   var copy = document.getElementById("copy");
//   /* Select the text field */
//   // copyText.select();
//   // copyText.setSelectionRange(0, 99999); /* For mobile devices */
//   const myTimeout = setTimeout(() => {}, 1000);
//   /* Copy the text inside the text field */
//   navigator.clipboard.writeText(copyText.innerText);
// }
