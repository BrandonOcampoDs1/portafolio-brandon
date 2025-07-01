$(function () {

  /* ---------- Intro overlay logic ---------- */
  $("#skipIntro").on("click", function () {
    $("#introOverlay").css("animation-delay", "0s");
  });
  // After overlay gone, show FAB
  setTimeout(() => $("#fab").addClass("show"), 2600);

  /* ---------- Nav smooth scroll ---------- */
  $(".nav-link").on("click", function (e) {
    e.preventDefault();
    const target = $(this).attr("href");
    $("html, body").animate(
      { scrollTop: $(target).offset().top - 70 },
      600,
      "swing"
    );
    $("#mobileMenu").slideUp();
  });

  /* ---------- Mobile hamburger ---------- */
  $("#burger").on("click", () => $("#mobileMenu").slideToggle());

  /* ---------- EmailJS  (Replace YOUR_*) ---------- */
  emailjs.init("YOUR_PUBLIC_KEY"); // TODO: pon tu public key

  $("#contactForm").on("submit", function (e) {
    e.preventDefault();
    $("#btnSend").prop("disabled", true).text("Enviando…");

    const templateParams = {
      from_name: $("#name").val(),
      from_email: $("#email").val(),
      message: $("#message").val()
    };

    emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", templateParams)
      .then(() => {
        alert("¡Mensaje enviado correctamente! 🚀");
        $("#contactForm")[0].reset();
      })
      .catch((err) => {
        console.error(err);
        alert("Hubo un error, intenta más tarde.");
      })
      .finally(() => {
        $("#btnSend").prop("disabled", false).text("Enviar mensaje");
      });
  });

});
