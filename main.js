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

function onFormSubmit(e) {
  e.preventDefault();
  const email = $("#email");
  const fullName = $("#fullname");
  const phone = $("#phone");

  console.log($(email).val());
  console.log($(fullName).val());
  console.log($(phone).val());

  if (email.val() == "") {
    alert("Email harus di isi!");
  } else if (fullName.val() == "") {
    alert("Fullname harus di isi!");
  } else if (phone.val() == "") {
    alert("Phone harus di isi!");
  } else {
    alert("Submit terkirim!");
  }

  // if(email.val)
}

$(document).ready(function () {
  $(".nav-link").click(function () {
    $(".nav-link").removeClass("active");
    $(this).addClass("active");
  });
});
