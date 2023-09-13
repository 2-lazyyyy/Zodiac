
    const checkCompatibilityBtn = document.getElementById("checkCompatibility");
 
    checkCompatibilityBtn.addEventListener("click", function() {
        const sign1 = document.getElementById("sign1").value;
        const sign2 = document.getElementById("sign2").value;
        
        sessionStorage.setItem("sign1",sign1);
        sessionStorage.setItem("sign2",sign2);
        
        location.href= "./heartBeat/beat.html";
});


