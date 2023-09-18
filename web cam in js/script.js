let id = document.getElementById("camera");

navigator.mediaDevices
  .getUserMedia({ video: true })
  .then((stream) => (id.srcObject = stream))
  .catch((error) => console.log(error));
