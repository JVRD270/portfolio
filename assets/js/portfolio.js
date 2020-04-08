let card = $(".wrapper");
let projects = $(".projects");

$(window).scroll(function () {
  let scrollPosition1 = $("#about").offset().top;
  let scrollPosition2 = $("#work").offset().top;
  let scrollPosition3 = $("#contact").offset().top;
  if ($(this).scrollTop() < scrollPosition2 - 30) {
    $("#sidebarBtnAbout").addClass("active");
    $("#sidebarBtnWork").removeClass("active");
    $("#sidebarBtnContact").removeClass("active");
  } else if (
    $(this).scrollTop() > scrollPosition1 &&
    $(this).scrollTop() < scrollPosition3 - 50
  ) {
    $("#sidebarBtnAbout").removeClass("active");
    $("#sidebarBtnWork").addClass("active");
    $("#sidebarBtnContact").removeClass("active");
  } else if ($(this).scrollTop() > scrollPosition2 - 50) {
    $("#sidebarBtnAbout").removeClass("active");
    $("#sidebarBtnWork").removeClass("active");
    $("#sidebarBtnContact").addClass("active");
  }
});

let titles = ["Pomodoro App", "Soccer Trivia Game", "Github Repos Ranking"];

let imgs = ["./assets/img/1.gif", "./assets/img/2.gif", "./assets/img/3.gif"];

let descs = [
  "Pomodoro App with expected functionalities. These involve setting a work and break time, along with a set ratio between them, to make setting longer intervals easier. Very useful for effective working.",
  "Soccer Trivia Game inspired on mobile game Trivia Crack. Main functionalities work perfectly, but is still a work in progress without a menu. Since the game was made with a Brazillian audience in mind, it is in Portuguese (right/wrong labels for questions are enabled for English Speakers to test the functionality). An API for the game is also currently in development.",
  "App that gathers info from Github's API to rank repositories according to number of stars. Rankings displayed are for repos created last week, month, year and all time.",
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

function Project(title, img, description, link1, link2) {
  this.title = title;
  this.img = img;
  this.description = description;
  this.link1 = link1;
  this.link2 = link2;
}

let CurrentProject = new Project(
  titles[0],
  imgs[0],
  descs[0],
  links1[0],
  links2[0]
);

projects.on("click", function () {
  if ($(this).hasClass("proj1")) {
    CurrentProject = new Project(
      titles[0],
      imgs[0],
      descs[0],
      links1[0],
      links2[0]
    );
  } else if ($(this).hasClass("proj2")) {
    CurrentProject = new Project(
      titles[1],
      imgs[1],
      descs[1],
      links1[1],
      links2[1]
    );
  } else if ($(this).hasClass("proj3")) {
    CurrentProject = new Project(
      titles[2],
      imgs[2],
      descs[2],
      links1[2],
      links2[2]
    );
  }
  card.addClass("slideIn");
  card.removeClass("slideOut");
  $(".overlay").addClass("darken");
  $(".popup h3").text(CurrentProject.title);
  $(".popup .projectImg").attr("src", CurrentProject.img);
  $(".popup p").text(CurrentProject.description);
  $(".popup .btn1").attr("href", CurrentProject.link1);
  $(".popup .repo").attr("href", CurrentProject.link2);
  console.log($(".popup .btn-success a").attr("href"));
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
