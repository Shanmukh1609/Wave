const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');
const sign_up= document.getElementById('sign_up');
const sign_in_form =document.getElementById("sign_in_form")

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

sign_up.addEventListener('click',()=>{
    password1=document.getElementById("password");
    password2=document.getElementById("password_confirmation");

    sign_up_form=document.getElementById("sign_up_form");



    if(password1.value==password2.value){
      sign_up_form.submit()
    }
    else{
        alert("Passwords donot match")
    }
})

sign_in_form.addEventListener('submit',function(event){
    event.preventDefault();

    const email = this.email.value;
    const password = this.password.value;

    if (!email || !password) {
        alert('Please enter email and password');
        return;
    }
    this.submit();
})
