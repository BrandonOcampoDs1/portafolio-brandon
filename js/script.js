$(function () {

/* ---------- Smooth scroll & active nav ---------- */
$(".nav-link").on("click", function (e) {
    e.preventDefault();
    const target = $(this).attr("href");
    $("html, body").animate(
    { scrollTop: $(target).offset().top - 70 },
    600,
    "swing"
    );
    // Close mobile menu
    $("#mobileMenu").slideUp();
});

/* ---------- Mobile hamburger ---------- */
$("#burger").on("click", () => $("#mobileMenu").slideToggle());

/* ---------- WhatsApp & Email buttons ---------- */
function buildMessage() {
    const name = $("#name").val().trim();
    const email = $("#email").val().trim();
    const msg = $("#message").val().trim();
    return `Hola Brandon, soy ${name}. (${email})%0A%0A${encodeURIComponent(msg)}%0A%0ACV: https://tusitio.com/assets/HV-BRANDONOCAMPO-2025.pdf`;
    //  ^^^ TODO: cambia la URL completa a donde vayas a hostear el sitio
}

$("#btnWhatsApp").on("click", function () {
    const phone   = "573004540574"; // TODO: tu número en formato internacional
    const message = buildMessage();
    window.open(`https://wa.me/${phone}?text=${message}`, "_blank");
});

$("#btnEmail").on("click", function () {
    const subject = encodeURIComponent("Oportunidad laboral – Portafolio Brandon");
    const body    = buildMessage().replace(/%0A/g, "\n");
    const mailTo  = "brandonocampods1@gmail.com"; // TODO: tu correo
    window.location.href = `mailto:${mailTo}?subject=${subject}&body=${body}`;
});

/* ---------- Scroll‑spy para resaltar nav (opcional) ---------- */
const sections = $("section[id]");
$(window).on("scroll", function () {
    const pos = $(document).scrollTop() + 100;
    sections.each(function () {
    const top = $(this).offset().top;
    const id = $(this).attr("id");
    if (pos >= top) {
        $(".nav-link").removeClass("text-cyan-400");
        $(`a[href="#${id}"]`).addClass("text-cyan-400");
    }
    });
});

});