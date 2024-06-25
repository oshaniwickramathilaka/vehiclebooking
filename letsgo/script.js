function validateForm2() {
    var date1Input = document.getElementById("date1").value;
    var time1Input = document.getElementById("time1").value;
    var locationInput = document.getElementById("location").value;
    var vtypeInput = document.getElementById("vtype").value;


    // Checking if date or time or pickup-date empty
    if (date1Input == "" || time1Input == ""|| locationInput=="" || vtypeInput=="") {
        alert("Please fill every inputfields");
        return false;
    }
    //validated date pattern
    var date1pattern = /^\d{4}-\d{2}-\d{2}$/;

             if(!date1pattern.test(date1Input)){
            alert("please enter a valid date in YYYY-MM-DD format");
            return false;
             }
 // validated time pattern
    var time1Pattern = /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/;

    
    if (!time1Pattern.test(time1Input)) {
            
        alert("Please enter a valid time in HH:MM format");
        return false;
    }
    
    //validated location pattern
        const locationpattern = /^[a-zA-Z0-9\s,'-]*$/;
        if(!locationpattern.test(locationInput)){
            alert("please enter a valid address");
            return false;
        }
    }
    document.addEventListener('DOMContentLoaded', (event) => {
        function formatDate(date) {
            const options = {  day:'numeric',weekday: 'long',month:'long', year: 'numeric' };
            return date.toLocaleDateString(undefined, options);
        }
    
        const currentDate = new Date();
        const dateElement = document.getElementById('current-date');
        dateElement.textContent = `Today's date is ${formatDate(currentDate)}`;
    });





    //ovindi
    function validateFunction3() {
        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        var message = document.getElementById("message").value;
        if (name == "") {
            document.getElementById("name-small").innerHTML = "Please Enter Your Name";
            document.getElementById("name-span").style.color = "white";
        }
        if (email == "") {
            document.getElementById("email-small").innerHTML = "Please Enter Your Email";
            document.getElementById("email-span").style.color = "white";
        }
        if (message == "") {
            document.getElementById("message-small").innerHTML = "Please Enter Your Message";
            document.getElementById("message-span").style.color = "white";
        }
    
    
    }
    
    document.addEventListener("DOMContentLoaded", function () {
        var nameField = document.getElementById("name");
        var emailField = document.getElementById("email");
        var messageField = document.getElementById("message");
    
        nameField.addEventListener("input", function () {
            document.getElementById("name-small").innerHTML = "";
            document.getElementById("name-span").style.color = "black";
        });
        emailField.addEventListener("input", function () {
            document.getElementById("email-small").innerHTML = "";
            document.getElementById("email-span").style.color = "black";
        });
        messageField.addEventListener("input", function () {
            document.getElementById("message-small").innerHTML = "";
            document.getElementById("message-span").style.color = "black";
        });
    });
    
    function validateFunction4() {
        var login_email = document.getElementById("login_email");
        var login_password = document.getElementById("login_password");
    
        login_email.addEventListener("input", function () {
            document.getElementById("login_email_small").innerHTML = "";
            document.getElementById("email_label").style.color = "white";
        });
    
        login_password.addEventListener("input", function () {
            document.getElementById("login_password_small").innerHTML = "";
            document.getElementById("password_label").style.color = "white";
        });
    
        if (login_email.value == "") {
            document.getElementById("login_email_small").innerHTML = "Please Enter Your Email";
            document.getElementById("email_label").style.color = "black";
        }
        if (login_password.value == "") {
            document.getElementById("login_password_small").innerHTML = "Please Enter Your Password";
            document.getElementById("password_label").style.color = "black";
        }
    }
    form.addEventListner("submit",function(event){
        event.preventDefault();
        let emailValid=validateEmail(form.elements["email"],EMAIL_REQUIRED,EMAIL_INVALID);
        if(emailValid){
            alert("Demo only.");
        }
    
    
    
    
    });

    function toggleMenu() {
        const dropdownMenu = document.querySelector('.dropdown-menu');
        dropdownMenu.style.display = dropdownMenu.style.display === 'flex' ? 'none' : 'flex';
    }
    

        
        
    



        
    
        
            
              
        
        
        
        
    
    


     
    


     

 
















                































