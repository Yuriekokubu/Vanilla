window.addEventListener('paste', (e) => {
  const FileIncoming = e.clipboardData.files;
  if (FileIncoming.length > 0) {
    const fileInput = document.querySelector('#myFile');

    fileInput.files = FileIncoming;

    let image = FileIncoming[0];
    if (image.type.startsWith('image/')) {
      setPreviewImage(image);
    }
  }
});

function setPreviewImage(file) {
  const fileReader = new FileReader();

  fileReader.readAsDataURL(file);
  fileReader.onload = () => {
    document.querySelector('#imagePreview').src = fileReader.result;
  };
}
