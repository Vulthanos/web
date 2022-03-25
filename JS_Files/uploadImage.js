let uploadButton = document.getElementById("subir-imagen");
let chosenImage = document.getElementById("seleccion-imagen");
let fileName = document.getElementById("nombre-archivo");

uploadButton.onchange = () => {
    let reader = new FileReader();
    reader.readAsDataURL(uploadButton.files[0]);
    reader.onload = () => {
        chosenImage.setAttribute("src",reader.result);
    }
    fileName.textContent = uploadButton.files[0].name;
}