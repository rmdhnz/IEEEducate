const scriptURL =
  "https://script.google.com/macros/s/AKfycbyIMmyQ3fbTfBcJsvI_Su8m4_Kj47JYJh7tfFhIRmXJmfxxDXOpxscEj1QxP5Mooffi/exec";
const form = document.forms["contact-form"];
const btnKirim = document.querySelector(".btn-kirim");
const btnLoading = document.querySelector(".btn-loading");
const myAlert = document.querySelector(".my-alert");
const section = document.querySelectorAll("section");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  btnLoading.classList.toggle("d-none");
  btnKirim.classList.toggle("d-none");
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      console.log("Success!", response);
      btnLoading.classList.toggle("d-none");
      btnKirim.classList.toggle("d-none");
      myAlert.classList.toggle("d-none");
      form.reset();
      for (let i = 0; i < section.length; ++i) {
        section[i].classList.toggle("d-none");
      }
      document.querySelector(".overlayer").classList.toggle("d-none");
    })
    .catch((error) => console.error("Error!", error.message));
});
