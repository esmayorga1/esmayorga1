document.addEventListener("DOMContentLoaded", function() {
    const miBotonEnviar = document.getElementById("button-enviar");
    const miBotonInformacion = document.getElementById("button-informacion");
    const miBotonExperiencia = document.getElementById("button-experiencia");
    const miBotonPlanos = document.getElementById("button-planos");
    const miBotonCartografia = document.getElementById("button-cartografia");
  
    if (miBotonEnviar) {
      miBotonEnviar.addEventListener("mouseenter", function() {
        miBotonEnviar.style.backgroundColor = "rgb(140, 56, 0)";
        miBotonEnviar.style.color = "#0056b3";
        miBotonEnviar.style.cursor = "pointer";
      });
  
      miBotonEnviar.addEventListener("mouseleave", function() {
        miBotonEnviar.style.backgroundColor = "#0074f7";
        miBotonEnviar.style.color = "#FFF";
      });
  
      miBotonEnviar.addEventListener("click", function(event) {
        event.preventDefault();
  
        const modal = createModal("¡Éxito!", "La información se envió correctamente. Pronto nos comunicaremos con usted.");
        const acceptBtn = modal.querySelector(".accept-button");
  
        acceptBtn.addEventListener("click", function() {
          document.body.removeChild(modal);
        });
      });
    }
  
    if (miBotonInformacion) {
      miBotonInformacion.addEventListener("click", function(event) {
        event.preventDefault();
  
        createModal("Experiencia en Validación de Productos Cartográficos", "Poseo una sólida trayectoria de 3 años en el campo de la validación de productos cartográficos y la generación de modelos y scripts para automatizar procesos espaciales en el Instituto Geográfico Agustín Codazzi (IGAC). Durante mi tiempo en el IGAC, he adquirido una amplia experiencia en la verificación y validación de productos cartográficos, asegurando su precisión y calidad.");
      });
    }
  
    if (miBotonExperiencia) {
      miBotonExperiencia.addEventListener("click", function(event) {
        event.preventDefault();
  
        createModal("Experiencia en Captura de Imágenes Hiperespectrales", "Como encargado de la captura y operación de cámaras hiperespectrales tripuladas en aviones, he desempeñado un papel crucial en la adquisición de datos multiespectrales de alta resolución. Mi experiencia se ha centrado en el manejo de equipos y sistemas especializados para capturar imágenes hiperespectrales desde plataformas aéreas, garantizando la calidad y la integridad de los datos obtenidos.");
      });
    }
  
    if (miBotonPlanos) {
      miBotonPlanos.addEventListener("click", function(event) {
        event.preventDefault();
  
        createModal("Experiencia en Planos y Análisis Multitemporales", "Como encargado de realizar los planos y análisis multitemporales de diferentes predios en el departamento del Vichada, he desempeñado un papel fundamental en la generación de información geoespacial detallada y en el análisis de cambios a lo largo del tiempo en estas áreas.");
      });
    }
  
    if (miBotonCartografia) {
      miBotonCartografia.addEventListener("click", function(event) {
        event.preventDefault();
  
        createModal("Experiencia en Cartografía por Fotografías Aéreas", "Como encargado de realizar la cartografía base por medio de fotografías aéreas a diferentes escalas, he desempeñado un papel esencial en la creación de mapas precisos y detallados utilizando información capturada desde plataformas aéreas.");
      });
    }
  });
  
  function createModal(title, content) {
    const modal = document.createElement("div");
    modal.style.position = "fixed";
    modal.style.zIndex = "9999";
    modal.style.left = "0";
    modal.style.top = "0";
    modal.style.width = "100%";
    modal.style.height = "100%";
    modal.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
    modal.style.display = "flex";
    modal.style.justifyContent = "center";
    modal.style.alignItems = "center";
  
    const modalContent = document.createElement("div");
    modalContent.style.backgroundColor = "white";
    modalContent.style.padding = "20px";
    modalContent.style.borderRadius = "5px";
    modalContent.style.textAlign = "center";
    modalContent.style.position = "relative";
  
    const closeBtn = document.createElement("span");
    closeBtn.style.position = "absolute";
    closeBtn.style.top = "10px";
    closeBtn.style.right = "10px";
    closeBtn.style.cursor = "pointer";
    closeBtn.style.fontSize = "20px";
    closeBtn.style.fontWeight = "bold";
    closeBtn.innerHTML = "&times;";
  
    const modalTitle = document.createElement("h2");
    modalTitle.textContent = title;
  
    const modalMessage = document.createElement("p");
    modalMessage.textContent = content;
  
    const acceptBtn = document.createElement("button");
    acceptBtn.style.backgroundColor = "green";
    acceptBtn.style.color = "white";
    acceptBtn.style.padding = "10px 20px";
    acceptBtn.style.borderRadius = "5px";
    acceptBtn.style.border = "none";
    acceptBtn.style.cursor = "pointer";
    acceptBtn.textContent = "Aceptar";
  
    modalContent.appendChild(closeBtn);
    modalContent.appendChild(modalTitle);
    modalContent.appendChild(modalMessage);
    modalContent.appendChild(acceptBtn);
    modal.appendChild(modalContent);
  
    modal.style.display = "block";
  
    closeBtn.addEventListener("click", function() {
      modal.style.display = "none";
      document.body.removeChild(modal);
    });
  
    acceptBtn.addEventListener("click", function() {
      modal.style.display = "none";
      document.body.removeChild(modal);
    });
  
    document.body.appendChild(modal);
  }
  