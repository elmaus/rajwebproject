const btn = document.querySelector('button');


function sendEmail() {
    let name = document.getElementById("name").value;
    let surname = document.getElementById("surname").value;
    let email = document.getElementById("email").value;
    let number = document.getElementById("number").value;
    let message = document.getElementById("name");
    
    console.log(name);

    Email.send({
        SecureToken:"9e85c1e9-cb45-4251-97b2-e06eba0d5077",
        To:"fortempoweb@gmail.com",
        From:"elmauscamus@gmail.com",
        Subject:"Testing Sending Email", 
        Body: "Name: ${name} ${surname}\nEmail: ${email}\nPhone Number: ${number}\nMessage:\n${message}"
    }).then(
        message => alert("Name: ${name} ${surname}\nEmail: ${email}\nPhone Number: ${number}\nMessage:\n${message}")
      );

}

//btn.addEventListener('click', sendEmail);
