// Register Validation
function validateForm() {
   let name = document.getElementById("name").value.trim();
   let email = document.getElementById("email").value.trim();
   let phone = document.getElementById("phone").value.trim();
   let pass = document.getElementById("pass").value.trim();
   let cpass = document.getElementById("c_pass").value.trim();
   let gender = document.querySelector('input[name="gender"]:checked');
   let dob = document.getElementById("dob").value;
   let address = document.getElementById("address").value.trim();
   let occupation = document.getElementById("occupation").value;
   let terms = document.getElementById("terms").checked;

   let valid = true;
   let firstErrorField = null;

   // Clear old errors
   document.querySelectorAll(".error").forEach(el => el.innerHTML = "");

   // Name
   if (name == "") {
      document.getElementById("err-name").innerHTML = "Please enter your name";
      valid = false;
      if (!firstErrorField) firstErrorField = document.getElementById("name");
   } else if (!isNaN(name)) {
      document.getElementById("err-name").innerHTML = "Name should contain only letters";
      valid = false;
      if (!firstErrorField) firstErrorField = document.getElementById("name");
   }

   // Email
   if (email == "") {
      document.getElementById("err-email").innerHTML = "Please enter your email";
      valid = false;
      if (!firstErrorField) firstErrorField = document.getElementById("email");
   } else {
      let pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,}$/;
      if (!pattern.test(email)) {
         document.getElementById("err-email").innerHTML = "Invalid email format";
         valid = false;
         if (!firstErrorField) firstErrorField = document.getElementById("email");
      }
   }

   // Password
   if (pass == "") {
      document.getElementById("err-pass").innerHTML = "Please enter a password";
      valid = false;
      if (!firstErrorField) firstErrorField = document.getElementById("pass");
   } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>]).{8,}$/.test(pass)) {
      document.getElementById("err-pass").innerHTML =
         "Password must be 8+ chars with 1 uppercase, 1 lowercase, 1 number & 1 special symbol";
      valid = false;
      if (!firstErrorField) firstErrorField = document.getElementById("pass");
   }

   // Confirm Password
   if (cpass == "") {
      document.getElementById("err-cpass").innerHTML = "Please confirm your password";
      valid = false;
      if (!firstErrorField) firstErrorField = document.getElementById("c_pass");
   } else if (pass !== cpass) {
      document.getElementById("err-cpass").innerHTML = "Passwords do not match";
      valid = false;
      if (!firstErrorField) firstErrorField = document.getElementById("c_pass");
   }

   // Phone
   if (phone == "") {
      document.getElementById("err-phone").innerHTML = "Please enter your phone number";
      valid = false;
      if (!firstErrorField) firstErrorField = document.getElementById("phone");
   } else if (isNaN(phone)) {
      document.getElementById("err-phone").innerHTML = "Phone number must contain digits only";
      valid = false;
      if (!firstErrorField) firstErrorField = document.getElementById("phone");
   } else if (phone.length !== 10) {
      document.getElementById("err-phone").innerHTML = "Phone number must be 10 digits";
      valid = false;
      if (!firstErrorField) firstErrorField = document.getElementById("phone");
   }

   // Gender
   if (!gender) {
      document.getElementById("err-gender").innerHTML = "Please select your gender";
      valid = false;
      if (!firstErrorField) firstErrorField = document.querySelector('input[name="gender"]');
   }

   // DOB
   if (dob == "") {
      document.getElementById("err-dob").innerHTML = "Please select your date of birth";
      valid = false;
      if (!firstErrorField) firstErrorField = document.getElementById("dob");
   }

   // Address
   if (address == "") {
      document.getElementById("err-address").innerHTML = "Please enter your address";
      valid = false;
      if (!firstErrorField) firstErrorField = document.getElementById("address");
   }

   // Occupation
   if (occupation == "") {
      document.getElementById("err-occupation").innerHTML = "Please select your occupation";
      valid = false;
      if (!firstErrorField) firstErrorField = document.getElementById("occupation");
   }

   // Terms
   if (!terms) {
      document.getElementById("err-terms").innerHTML = "You must accept Terms & Privacy";
      valid = false;
      if (!firstErrorField) firstErrorField = document.getElementById("terms");
   }

   // Scroll to first error if invalid
   if (!valid && firstErrorField) {
      firstErrorField.scrollIntoView({ behavior: "smooth", block: "center" });
      firstErrorField.focus();
   }

   // Terms
   if (!terms) {
      document.getElementById("err-terms").innerHTML = "You must accept Terms & Privacy";
      valid = false;
   }

   // ✅ If everything is valid
   if (valid) {
      alert("✅ Registered Successfully!");
      window.location.href = "login.html"; // redirect to login page
   }

   return false; // prevents form from submitting/reloading

   return valid;
}


// Login Validation
function validateLogin() {
   let email = document.getElementById("email").value.trim();
   let pass = document.getElementById("pass").value.trim();
   let valid = true;

   // Clear previous errors
   document.getElementById("err-email").innerHTML = "";
   document.getElementById("err-pass").innerHTML = "";

   // Email validation
   if (email == "") {
      document.getElementById("err-email").innerHTML = "Please enter your email";
      valid = false;
   } else {
      let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,}$/;
      if (!emailPattern.test(email)) {
         document.getElementById("err-email").innerHTML = "Invalid email";
         valid = false;
      }
   }

   // Password validation
   if (pass == "") {
      document.getElementById("err-pass").innerHTML = "Please enter your password";
      valid = false;
   } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>]).{8,}$/.test(pass)) {
      document.getElementById("err-pass").innerHTML =
         "Invalid Password";
      valid = false;
   }

   // If invalid → scroll to top to show errors
   if (!valid) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return false;
   }

   // Success message and redirect
   alert("✅ Logged in successfully!");
   window.location.href = "home.html"; // redirect after success

   return false; // prevent actual submission (remove if using backend)
}


// Contact Validation
function validateContact() {
   let valid = true;

   // Get fields
   const name = document.getElementById("name").value.trim();
   const email = document.getElementById("email").value.trim();
   const number = document.getElementById("number").value.trim();
   const message = document.getElementById("message").value.trim();

   // Reset errors
   document.querySelectorAll(".error").forEach(e => e.innerHTML = "");

   // Validate name
   if (name == "") {
      document.getElementById("err-name").innerHTML = "Please enter your name";
      valid = false;
   }

   // Validate email
   const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
   if (email == "") {
      document.getElementById("err-email").innerHTML = "Please enter your email";
      valid = false;
   } else if (!emailPattern.test(email)) {
      document.getElementById("err-email").innerHTML = "Invalid email format";
      valid = false;
   }

   // Validate number
   const numPattern = /^[0-9]{10}$/;
   if (number == "") {
      document.getElementById("err-number").innerHTML = "Please enter your phone number";
      valid = false;
   } else if (!numPattern.test(number)) {
      document.getElementById("err-number").innerHTML = "Enter a valid 10-digit number";
      valid = false;
   }

   // Validate message
   if (message == "") {
      document.getElementById("err-message").innerHTML = "Please enter your message";
      valid = false;
   }

   // Scroll to first error
   if (!valid) {
      const firstError = document.querySelector(".error:not(:empty)");
      if (firstError) firstError.scrollIntoView({ behavior: "smooth", block: "center" });
      return false;
   }

   // If all valid
   alert("Message sent successfully!");
   document.getElementById("contact-form").reset();
   return true;
}


// Admin update Validation
function validateUpdateForm() {
   let valid = true;

   let name = document.getElementById("name").value.trim();
   let old_pass = document.getElementById("old_pass").value.trim();
   let new_pass = document.getElementById("new_pass").value.trim();
   let c_pass = document.getElementById("c_pass").value.trim();

   // clear previous error messages
   document.getElementById("err-name").textContent = "";
   document.getElementById("err-old").textContent = "";
   document.getElementById("err-new").textContent = "";
   document.getElementById("err-cpass").textContent = "";

   // username validation
   if (name == "") {
      document.getElementById("err-name").textContent = "Please enter username";
      valid = false;
   }

   // old password validation
   if (old_pass == "") {
      document.getElementById("err-old").textContent = "Please enter old password";
      valid = false;
   }

   // new password validation
   if (new_pass == "") {
      document.getElementById("err-new").textContent = "Please enter new password";
      valid = false;
   } else {
      // Password must be 8+ chars with uppercase, lowercase, number & special char
      const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
      if (!passwordPattern.test(new_pass)) {
         document.getElementById("err-new").textContent =
            "Password must be 8+ chars with 1 uppercase, 1 lowercase, 1 number & 1 special symbol";
         valid = false;
      }
   }

   // confirm password validation
   if (c_pass == "") {
      document.getElementById("err-cpass").textContent = "Please confirm new password";
      valid = false;
   } else if (new_pass !== c_pass) {
      document.getElementById("err-cpass").textContent = "Passwords do not match";
      valid = false;
   }

   if (!valid) return false;

   // success message
   alert("Profile updated successfully!");
   window.location.href = "dashboard.html";
   return false;
}


// Admin Register Validation
function validateAdminRegister() {
   let valid = true;

   let name = document.getElementById("name").value.trim();
   let pass = document.getElementById("pass").value.trim();
   let c_pass = document.getElementById("c_pass").value.trim();

   // Clear errors
   document.getElementById("err-name").textContent = "";
   document.getElementById("err-pass").textContent = "";
   document.getElementById("err-cpass").textContent = "";

   // Username validation
   if (name == "") {
      document.getElementById("err-name").textContent = "Please enter username";
      valid = false;
   }

   // Password validation
   if (pass == "") {
      document.getElementById("err-pass").textContent = "Please enter password";
      valid = false;
   } else {
      // 8+ chars, uppercase, lowercase, number, symbol
      const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
      if (!passwordPattern.test(pass)) {
         document.getElementById("err-pass").textContent =
            "Password must be 8+ chars with 1 uppercase, 1 lowercase, 1 number & 1 special symbol";
         valid = false;
      }
   }

   // Confirm password
   if (c_pass == "") {
      document.getElementById("err-cpass").textContent = "Please confirm password";
      valid = false;
   } else if (pass !== c_pass) {
      document.getElementById("err-cpass").textContent = "Passwords do not match";
      valid = false;
   }

   // Stop submit if invalid
   if (!valid) return false;

   alert("✅ Admin Registered Successfully!");
   window.location.href = "login.html";
   return false;
}



// Admin Login Validation
function validateAdminLogin() {
   let username = document.getElementById("username").value.trim();
   let password = document.getElementById("password").value.trim();
   let valid = true;

   // Clear old errors
   document.getElementById("err-username").textContent = "";
   document.getElementById("err-password").textContent = "";

   // Username check
   if (username == "") {
      document.getElementById("err-username").textContent = "Please enter your username";
      valid = false;
   }

   // Password check
   if (password == "") {
      document.getElementById("err-password").textContent = "Please enter your password";
      valid = false;
   }

   if (!valid) {
      const firstError = document.querySelector(".error:not(:empty)");
      if (firstError) firstError.scrollIntoView({ behavior: "smooth", block: "center" });
      return false;
   }

   alert("✅ Admin Logged in Successfully!");
   window.location.href = "dashboard.html";
   return false;
}


//validateLocation
function validateLocation() {
   const locationInput = document.getElementById("location");
   const errorMsg = document.getElementById("err-location");

   // clear previous error
   errorMsg.textContent = "";

   if (locationInput.value.trim() === "") {
      errorMsg.textContent = "Please enter a location.";
      locationInput.focus();
      return false; // stop form submission
   }

   // success alert
   alert("✅ Searching properties...");

   // redirect to listings.html
   window.location.href = "listings.html";

   return false; // prevent default form submission (no 405 error)
}


//validateFilterLocation
function validateFilterLocation() {
   const locationInput = document.getElementById("filter-location");
   const errorMsg = document.getElementById("err-filter-location");

   // clear old error
   errorMsg.textContent = "";

   if (locationInput.value.trim() === "") {
      errorMsg.textContent = "Please enter a location.";
      locationInput.focus();
      return false;
   }

   alert("✅ Searching properties...");

   // Redirect to listings.html instead of POSTing (prevents 405 error)
   window.location.href = "listings.html";

   return false; // stop form from actually submitting
}