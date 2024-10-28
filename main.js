function toggleDetail(e) {
  const target = $(e.target);

  // Toggle button text
  if (target.hasClass("active")) {
    target.html("More Info").removeClass("active");
  } else {
    target.html("Less Info").addClass("active");
  }

  // Find the closest .about-exp-item and toggle the detail for that item
  const item = target.closest(".about-exp-item");
  const detail = item.find(".about-exp-item-detail");

  detail.slideToggle();
}
