let registered = false;

function registerIris() {
  const status = document.getElementById("registerStatus");
  status.innerText = "Registering iris pattern...";
  status.style.color = "white";

  setTimeout(() => {
    registered = true;
    status.innerText = "Iris registration successful.";
    status.style.color = "#6dd5ed";
  }, 2000);
}

function verifyIris() {
  const status = document.getElementById("verifyStatus");

  if (!registered) {
    status.innerText = "No iris registered. Please register first.";
    status.style.color = "orange";
    return;
  }

  status.innerText = "Verifying identity...";
  status.style.color = "white";

  setTimeout(() => {
    status.innerText = "Identity verified successfully.";
    status.style.color = "#6dd5ed";
  }, 2000);
}
