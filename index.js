function traerApi() {
    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const fecha = document.getElementById("fecha").value;
  
    const datos = {
      nombre: nombre,
      apellido: apellido,
      fecha: fecha
    };
  
    fetch('https://jsonplaceholder.typicode.com/users', {
      method: "POST",
      body: JSON.stringify(datos),
      headers: { "Content-type": "application/json" }
    })
      .then((res) => res.json())
      .then((response) => console.log("Success:", response))
      .catch((error) => console.error("Error:", error));
  }