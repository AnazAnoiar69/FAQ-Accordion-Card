let accordionHead = document.querySelectorAll(".accordion-head");
// let activeClass = "accordion-active";

accordionHead.forEach((head) => {
  head.addEventListener("click", () => {
    let accordionContent = head.nextElementSibling;
    console.log(accordionContent);
    head.classList.toggle("accordion-active");

    if (head.classList.contains("accordion-active")) {
      head.style.fontWeight = "700";

      // accordionContent.style.display = "block";
      accordionContent.style.visibility = "visible";
      accordionContent.style.maxHeight = accordionContent.scrollHeight + "px";
    } else {
      head.style.fontWeight = "400";

      // accordionContent.style.display = "none";
      accordionContent.style.visibility = "hidden";
      accordionContent.style.maxHeight = 0;
    }
  });
});
