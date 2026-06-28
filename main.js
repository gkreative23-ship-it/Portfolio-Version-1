

window.onload = function checkThemeChange(){
    const savedTheme = localStorage.getItem('websiteTheme');

    if(savedTheme=== 'purple-theme'){
        document.documentElement.classList.add('girly-theme');
    }
};

function changeTheme(){
     document.documentElement.classList.toggle('girly-theme');

     if(document.documentElement.classList.contains('girly-theme')) {
        localStorage.setItem('websiteTheme', 'purple-theme');
     } else{
        localStorage.setItem('websiteTheme', 'default')
     }
}

function contactPage(){
    window.location.href="contact-form.html"
}

