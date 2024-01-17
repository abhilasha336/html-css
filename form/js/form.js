 let firstname = document.getElementById('fname');
 lastname = document.getElementById('lname');
 email = document.getElementById('mail');
 password = document.getElementById('pass');
 telephone = document.getElementById('tele');
 country = document.getElementById('country');
 address = document.getElementById('address');
 file = document.getElementById('file');
 // small = document.querySelector('.error');
 //small1 = document.querySelector('.error');
 male = document.getElementById('m');
 female = document.getElementById('f');
 date = document.getElementById('date');
 form = document.getElementById('formid');



 // success = document.querySelector('.fa-circle-check');
 //failure = document.querySelector('.fa-circle-exclamation');
 //fname = document.querySelector('.firstname');
 // lname = document.querySelector('.lastname');
 // eemail = document.querySelector('.email');
 //passs = document.querySelector('.passs');


 //teleee = document.querySelector('.teleee');
 //fasolid = document.querySelector('.fa-solid');


 //let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;


 //let nodigit = /^[a-zA-Z]*$/;
 //let previous = lname.previousElementSibling;
 //let previousemail = eemail.previousElementSibling;
 // let passs1previous = passs.previousElementSibling;
 //let teleee1previous = teleee.previousElementSibling;
 //let country1previous = country.previousElementSibling;


 let input = document.querySelector('input');
 let parent = input.parentElement;
 //let success = document.querySelector('.fa-circle-check');
 //let failure = document.querySelector('.fa-circle-exclamation');
 let small = document.querySelector('.error');
 // let fname = document.querySelector('.firstname');


 form.addEventListener("submit", (e) => {
     e.preventDefault();
     validateForm();

 });
 firstname.addEventListener("blur", validateForm);

 function validateForm() {
     let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
     let nodigit = /^[a-zA-Z]*$/;
     let passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
     let phoneno = /^\d{10}$/;
     let lab = document.querySelector('.lab');

     if (firstname.value.trim() == '' || firstname.value.length < 3 || firstname.value.length > 25 || !firstname.value.match(nodigit)) {
         //  small.innerHTML = "Invalid first name, should contain min 3 and max 25 letters";
         //  fname.classList.add('border');
         //  failure.classList.add('failurered');
         //  success.classList.remove('successgreen');
         //  fname.classList.remove('border1');
         newfailuree(firstname, "*Invalid first name, should contain min 3 and max 25 letters");


     } else {

         //   small.innerHTML = " ";
         //   fname.classList.add('border1');
         //   fname.classList.remove('border');
         //   failure.classList.remove('failurered');
         //   success.classList.add('successgreen');
         newsuccess(firstname, "");
     }
     if (lastname.value.trim() == '' || lastname.value.length < 3 || lastname.value.length > 25 || !lastname.value.match(nodigit)) {
         //      //  lastname.nextElementSibling.innerHTML = "Invalid first name, should contain min 3 and max 25 letters";
         //      //  lname.previousElementSibling.classList.add('failurered');
         //      //  previous.previousElementSibling.classList.remove('successgreen');
         //      //  lname.classList.add('border');
         //      //  lname.classList.remove('border1');
         newfailuree(lastname, "*Invalid first name, should contain min 3 and max 25 letters");

     } else {
         //      //  lastname.nextElementSibling.innerHTML = " ";
         //      //  lname.classList.add('border1');
         //      //  lname.classList.remove('border');
         //      //  previous.previousElementSibling.classList.add('successgreen');
         //      //  lname.classList.remove('border');
         //      //  lname.previousElementSibling.classList.remove('failurered');
         newsuccess(lastname, "");

     }
     if (email.value == '' || !email.value.match(validRegex)) {

         //      email.nextElementSibling.innerHTML = "Invalid email, should contain examplae@gmail.com";
         //      eemail.previousElementSibling.classList.add('failurered');
         //      previousemail.previousElementSibling.classList.remove('successgreen');
         //      eemail.classList.add('border');
         //      eemail.classList.remove('border1');
         newfailuree(email, "*Invalid first name, should contain min 3 and max 25 letters");

     } else {
         //      email.nextElementSibling.innerHTML = " ";
         //      eemail.classList.add('border1');
         //      eemail.classList.remove('border');
         //      previousemail.previousElementSibling.classList.add('successgreen');
         //      eemail.classList.remove('border');
         //      eemail.previousElementSibling.classList.remove('failurered');
         newsuccess(email, "");
     }
     if (password.value == '' || !password.value.match(passw)) {
         //      password.nextElementSibling.innerHTML = "Invalid password, should contain @,digit,upper,lowecase";
         //      passs.previousElementSibling.classList.add('failurered');
         //      passs1previous.previousElementSibling.classList.remove('successgreen');
         //      passs.classList.add('border');
         //      passs.classList.remove('border1');
         newfailuree(password, "*Invalid first name, should contain min 3 and max 25 letters");

     } else {
         //      password.nextElementSibling.innerHTML = " ";
         //      passs.classList.add('border1');
         //      passs.classList.remove('border');
         //      passs1previous.previousElementSibling.classList.add('successgreen');
         //      passs.classList.remove('border');
         //      passs.previousElementSibling.classList.remove('failurered');
         newsuccess(password, "");
     }
     if (telephone.value == '' || !telephone.value.match(phoneno)) {
         //      telephone.nextElementSibling.innerHTML = "Invalid number, should contain 10 digits";
         //      teleee.previousElementSibling.classList.add('failurered');
         //      teleee1previous.previousElementSibling.classList.remove('successgreen');
         //      teleee.classList.add('border');
         //      teleee.classList.remove('border1');
         newfailuree(telephone, "*Invalid first name, should contain min 3 and max 25 letters");

     } else {
         //      telephone.nextElementSibling.innerHTML = " ";
         //      teleee.classList.add('border1');
         //      teleee.classList.remove('border');
         //      teleee1previous.previousElementSibling.classList.add('successgreen');
         //      teleee.classList.remove('border');
         //      teleee.previousElementSibling.classList.remove('failurered');
         newsuccess(telephone, "");
     }
     if (country.value === "Select Country") {
         //      country.nextElementSibling.innerHTML = "Choose a country";
         //      country.classList.add('border');
         //      country.classList.remove('border1');
         newfailuree(country, "*Invalid first name, should contain min 3 and max 25 letters");

     } else {
         //      country.nextElementSibling.innerHTML = "";
         //      country.classList.add('border1');
         //      country.classList.remove('border');
         newsuccess(country, "");
     }
     if (male.checked || female.checked) {
         lab.nextElementSibling.innerText = "";
     } else {
         lab.nextElementSibling.innerText = "*Choose a gender";
     }

     if (date.value === "") {
         //      date.nextElementSibling.innerHTML = "Select a date";
         //      date.classList.add('border');
         //      date.classList.remove('border1');
         newfailuree1(date, "*Select a date");
     } else {
         //      date.nextElementSibling.innerHTML = "";
         //      date.classList.add('border1');
         //      date.classList.remove('border');
         newsuccess1(date, "");
     }
     if (address.value === "" || address.value > 10 || address.value < 50) {
         //      address.nextElementSibling.innerHTML = "Please enter address between 10-25 characters";
         //      address.classList.add('border');
         //      address.classList.remove('border1');
         newfailuree1(address, "*Please enter address between 10-25 characters")
     } else {
         //      address.nextElementSibling.innerHTML = "";
         //      address.classList.add('border1');
         //      address.classList.remove('border');
         newsuccess1(address, "")
     }
     if (file.value === "") {
         file.nextElementSibling.innerText = "Please upload image";
     } else {
         let validImageExtension = ["jpeg", "jpg"];
         file.nextElementSibling.innerHTML = "";
         let extensionPosition = file.value.lastIndexOf(".");
         let inputGetExtension = file.value.substring(extensionPosition + 1);
         let checkValue = validImageExtension.includes(inputGetExtension);
         if (!checkValue) {
             file.nextElementSibling.innerText = "Please upload valid jpeg file";
         } else {
             file.nextElementSibling.innerText = "";
         }
     }
 }

 function newsuccess(i, message) {
     i.classList.remove("border");
     i.classList.add("border1");
     i.nextElementSibling.nextElementSibling.classList.remove("failurered");
     // i.className = "border1";
     i.nextElementSibling.className = "fa-solid fa-circle-check successgreen";
     i.parentElement.querySelector("small").innerText = message;


 }

 function newfailuree(i, message) {
     i.classList.add("border");
     i.classList.remove("border1");
     i.nextElementSibling.nextElementSibling.classList.add("failurered");
     //  i.className = "border";
     //  i.nextElementSibling.className = "fa-solid fa-circle-exclamation failurered";
     i.parentElement.querySelector("small").innerText = message;
     i.nextElementSibling.className = "fa-solid fa-circle-check";
 }

 function newfailuree1(i, message) {
     i.nextElementSibling.innerText = message;
     i.classList.add('border');
     i.classList.remove('border1');
 }

 function newsuccess1(i, message) {
     i.nextElementSibling.innerText = message;
     i.classList.add('border1');
     i.classList.remove('border');

 }