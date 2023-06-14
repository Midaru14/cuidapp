const loggedOutLinks = document.querySelectorAll(".loggout-menu");
const loggedInLinks = document.querySelectorAll(".loggin-menu");

export const loginCheck = (user) => {
  if (user) {
    loggedOutLinks.forEach((link) => (link.style.display = "none"));
    loggedInLinks.forEach((link) => (link.style.display = "block"));
  } else {
    loggedOutLinks.forEach((link) => (link.style.display = "block"));
    loggedInLinks.forEach((link) => (link.style.display = "none"));
  }
};
