document.getElementById("contactForm").addEventListener("submit", async function (e) {
    e.preventDefault();
  
    const formData = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      message: document.getElementById("message").value
    };
  
    const response = await fetch("https://your-api-gateway-endpoint.com/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData)
    });
  
    const result = await response.json();
    document.getElementById("statusMessage").innerText = result.message;
  });
  