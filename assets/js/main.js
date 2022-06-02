const notifPanel = document.querySelector(".notification-panel"),
accBtn = document.querySelector(".notification-btn");

accBtn.onclick = ()=>{
    document.cookie = "CookieBy=LukmanAhromi; max-age="+60*60*24*30;
    if(document.cookie){
      notifPanel.classList.add("hide");
    }else{
      alert("Cookie can't be set! Please unblock this site from the cookie setting of your browser.");
    }
}

let checkCookie = document.cookie.indexOf("CookieBy=LukmanAhromi"); 
checkCookie != -1 ? notifPanel.classList.add("hide") : notifPanel.classList.remove("hide");


// Newsletter

const newsletter = document.querySelector(".newsletter"),
closeBtn = document.querySelector(".close-icon");

closeBtn.onclick = ()=>{
    newsletter.classList.add("hide");
}
