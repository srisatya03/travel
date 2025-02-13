document.querySelectorAll('nav ul li a').forEach(anchor =>{
    anchor.addEventListener('click', function (e){
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth'
        });
    });
});
document.querySelector('.contact-form').addEventListener('submit', function(e){
    e.preventDefault();
    const name = this.querySelector('input[type="text"]').value;
    const email = this.querySelector('input[type="email"]').value;
    const message = this.querySelector('textarea').value;
    if (name && email && message){
        alert(`Thank you, ${name}! Your message has been sent successfully.`);
        this.reset();
    } else {
        alert('Please fill out all fields before submitting.');
    }
});
document.querySelectorAll('nav ul li button').forEach(button =>{
    button.addEventListener('mouseover', function(){
        this.style.backgroundColor = '#575757';
        this.style.color = '#fff';
    });
    button.addEventListener('mouseout', function(){
        this.style.backgroundColor = '#333';
        this.style.color = '#fff';
    });
});
document.querySelector('nav ul li button[onclick="location.href=\'#signin\'"]').addEventListener('click', () =>{
    document.getElementById('signin-modal').style.display = 'block';
});
document.querySelector('nav ul li button[onclick="location.href=\'#signup\'"]').addEventListener('click', () =>{
    document.getElementById('signup-modal').style.display = 'block';
});
function closeModal(modalId){
    document.getElementById(modalId).style.display = 'none';
}
window.onclick = function(event){
    if (event.target.classList.contains('modal')){
        event.target.style.display = 'none';
    }
}
document.getElementById('signin-form').addEventListener('submit', function(e){
    e.preventDefault();
    alert('Sign In successful!');
    closeModal('signin-modal');
});
document.getElementById('signup-form').addEventListener('submit', function(e){
    e.preventDefault();
    alert('Sign Up successful!');
    closeModal('signup-modal');
});

