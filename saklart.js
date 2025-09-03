    function saklart ( ) {
        let toggle1 = document.getElementById('default-toggle1');
        let toggle2 = document.getElementById('default-toggle2');

        let lampu1 = document.getElementById("lampu1");
        let lampu2 = document.getElementById("lampu2");

        if(toggle1.checked) {
            lampu1.src ="assets/images/on.gif";
        } else {
            lampu1.src = "assets/images/off.gif";
        }

        if(toggle2.checked) {
            lampu2.src = "assets/images/on.gif"
        } else {
            lampu2.src = "assets/images/off.gif"
        }
    }