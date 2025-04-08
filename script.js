window.onload = function () {
    const nameElement = document.getElementById("name");
    const text = nameElement.innerText;
    nameElement.innerText = "";
  
    let i = 0;
    function typeWriter() {
      if (i < text.length) {
        nameElement.innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
      }
    }
  
    typeWriter();
  };
  