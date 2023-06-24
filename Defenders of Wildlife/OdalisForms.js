document.addEventListener("DOMContentLoaded", function() {
    var form = document.getElementById("myForm");
    var thankYouMessage = document.getElementById("thankYouMessage");
 
    form.addEventListener("submit", function(event) {
      event.preventDefault(); 
 
      var nameInput = document.getElementById("name");
      var emailInput = document.getElementById("email");
      var phoneInput = document.getElementById("phone");
      var messageInput = document.getElementById("message");
 
      var nameValue = nameInput.value.trim();
      var emailValue = emailInput.value.trim();
      var phoneValue = phoneInput.value.trim();
      var messageValue = messageInput.value.trim();
 
      if (nameValue === "" || emailValue === "" || phoneValue === "" || messageValue === "") {
        alert("Please fill in all fields.");
      } else {
    
        thankYouMessage.style.display = "block";
        form.style.display = "none";
 
        
        form.reset();
      }
    });
  });