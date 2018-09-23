let myBtn = document.querySelector('#btn');
myBtn.onclick = function() {
    if(myBtn.innerHTML == "Hide Header") {
        document.querySelector("#head").style.display = "none";
        myBtn.innerHTML = "Show Header";
    }
    else {
        document.querySelector("#head").style.display = "block";
        myBtn.innerHTML = "Hide Header";
    }
}