const routes = {
  404: "pages/404.html",
  "": "pages/index.html",
  "#2023-july": "pages/2023-july.html",
};

const handleRouteChange = async () => {
  const path = window.location.hash;
  const route = routes[path] || routes[404];
  const html = await fetch(route).then((data) => data.text());
  document.getElementById("content").innerHTML = html;
  checkLanguage();
};

window.addEventListener("hashchange", handleRouteChange);

handleRouteChange();