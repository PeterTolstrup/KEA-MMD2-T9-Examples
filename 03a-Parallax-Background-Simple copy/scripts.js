window.addEventListener("scroll", onScroll);

function onScroll() {
  var scrolled = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolledfactor = (scrolled / height) * 100;
  document.querySelector(".scroll_indicator").style.width = `${scrolledfactor}%`;
}
