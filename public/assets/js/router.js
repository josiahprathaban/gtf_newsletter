const routes = {
  404: "pages/404.html",
  "": "pages/index.html",
  "#2023-july": "pages/2023-july.html",
  "#2023-august": "pages/2023-august.html",
  "#2022-may": "pages/2022-may.html",
  "#2021-november": "pages/2021-november.html",
  "#2023-october": "pages/2023-october.html",
};

const handleRouteChange = async () => {
  const path = window.location.hash;
  const route = routes[path] || routes[404];
  const html = await fetch(route).then((data) => data.text());
  document.getElementById("content").innerHTML = html;
  window.scrollTo({
    top: 0,
    // behavior: 'smooth' // This makes the scrolling smooth
});
  checkLanguage();
};

window.addEventListener("hashchange", handleRouteChange);

handleRouteChange();
