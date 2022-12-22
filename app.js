// Testing apakah sudah terkoneksi
// alert('oke')

// Tangkap element
const getForm = document.querySelector("form");
const getUsername = document.querySelector("#username");
const getPassword = document.querySelector("#password");

// Static Password
const USERNAME = "iyan@gmail.com";
const PASSWORD = "ini_passwordku";

getForm.addEventListener("submit", (e) => {
  // Agar mencegah form tidak reload
  e.preventDefault();

  // cek menggunakan alert
  //   alert(getUsername);

  //  Tampung nilai yang diinputkan user kedalam variabel
  const getUsernameValue = getUsername.value;
  const getPasswordValue = getPassword.value;

  // check alert apakah variabel tersebut
  //   alert(getUsernameValue);

  //   Lakukan percabangan untuk melihat apakah user input data username / email sudah benar
  if (getUsernameValue !== USERNAME) {
    alert("Invalid Credentials");
  } else if (getPasswordValue !== PASSWORD) {
    alert("Invalid Credentials");
  } else {
    alert("Berhasil Login");
  }

  //   if (getUsernameValue !== USERNAME || getPasswordValue !== PASSWORD) {
  //     alert("Invalid Credentials");
  //   } else {
  //     alert("Berhasil Login !");
  //   }
});
