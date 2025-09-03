    function saklarm ( ) {
        let toggle1 = document.getElementById('default-toggle1');
        let lampu1 = document.getElementById("lampu1");

        if(toggle1.checked) {
            lampu1.src ="assets/images/on.gif";
        } else {
            lampu1.src = "assets/images/off.gif";
        }
    }