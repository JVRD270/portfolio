let card = $(".wrapper");
let projects = $(".projects");

let imgs = ["./assets/img/1.gif", "./assets/img/2.gif", "./assets/img/3.gif"];

let descs = [
  "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas aliquid excepturi quia commodi saepe dolores fugiat iusto enim vero repudiandae corporis, consequuntur doloribus veritatis. Ex.",
  "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas aliquid excepturi quia commodi saepe dolores fugiat iusto enim vero repudiandae corporis, consequuntur doloribus veritatis. Ex.",
  "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas aliquid excepturi quia commodi saepe dolores fugiat iusto enim vero repudiandae corporis, consequuntur doloribus veritatis. Ex.",
];

let links1 = [
  "https://jvrd270.github.io/",
  "https://jvrd270.github.io/Trivia-Game/",
  "https://jvrd270.github.io/github-repo-ranking/",
];

let links2 = [
  "https://github.com/JVRD270/JVRD270.github.io",
  "https://github.com/JVRD270/Trivia-Game",
  "https://github.com/JVRD270/github-repo-ranking",
];

function Project(img, description, link1, link2) {
  this.img = img;
  this.description = description;
  this.link1 = link1;
  this.link2 = link2;
}

let CurrentProject = new Project(imgs[0], descs[0], links1[0], links2[0]);

projects.on("click", function () {
  if ($(this).hasClass("proj1")) {
    CurrentProject = new Project(imgs[0], descs[0], links1[0], links2[0]);
  } else if ($(this).hasClass("proj2")) {
    CurrentProject = new Project(imgs[1], descs[1], links1[1], links2[1]);
  } else if ($(this).hasClass("proj3")) {
    CurrentProject = new Project(imgs[2], descs[2], links1[2], links2[2]);
  }
  card.addClass("slideIn");
  card.removeClass("slideOut");
  $(".overlay").addClass("darken");
  $(".popup .projectImg").attr("src", CurrentProject.img);
  $(".popup p").text(CurrentProject.description);
  $(".popup .btn-primary a").attr("href", CurrentProject.link1);
  $(".popup .btn-success a").attr("href", CurrentProject.link2);
});

$(".popup i").on("click", function () {
  card.addClass("slideOut");
  card.removeClass("slideIn");
  $(".overlay").removeClass("darken");
});

/* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
function openNav() {
  document.getElementById("mySidebar").style.width = "200px";
  document.getElementById("main").style.marginLeft = "200px";
}

/* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}
