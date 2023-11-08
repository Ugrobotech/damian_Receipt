const spans = document.querySelectorAll("span");
spans.forEach((span) => {
  span.addEventListener("click", () => {
    span.setAttribute("contenteditable", "true");
    span.focus();
  });
  span.addEventListener("blur", () => {
    span.removeAttribute("contenteditable");
  });
});
