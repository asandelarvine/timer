
$(document).ready(function() {
    var time = $(".time").text();
    var interval = setInterval(function() {
        var count = time.split(":");
        var hour = count[0];
        var min = count[1];
        var sec = count[2];
        var counter = $(".timer").find("span");
        counter.eq(0).text(hour);
        counter.eq(1).text(min);
        counter.eq(2).text(sec);
        if(hour == 0 && min == 0) {
            $(".timer").css("color","#00ff00");
        }
        if(sec == 0) {
            if (min != 0) {
                counter.eq(1).text(min--);
                sec = 59;
            }
            else if (min == 0 && hour != 0) {
                counter.eq(0).text(hour--);
                counter.eq(1).text(min = 59);
                sec = 59;
            }
            else if (hour == 0 && min == 0 && sec == 0){
                counter.eq(2).text(0);
            }
            if (hour == 0 && min == 0) {
                $(".timer").css("color","#00ff00");
            }
        }
        counter.eq(0).text (hour);
        counter.eq(1).text (min);
        counter.eq(2).text (--sec);
        time = counter.eq(0).text()+":"+counter.eq(1).text()+":"+counter.eq(2).text();
        if(hour == 0 && min == 0 && sec == 0){
            clearInterval(interval);
            alert("Time Up");       
            }
    },1000);
   
    window.onload = () => {
        let hour = 00;
        let minute = 00;
        let seconds = 00;
        let totalSeconds = 00;
        
        let intervalId = null;
        
        function startTimer() {
            ++totalSeconds;
            hour = Math.floor(totalSeconds /3600);
            minute = Math.floor((totalSeconds - hour*3600)/60);
            seconds = totalSeconds - (hour*3600 + minute*60);
        
            document.getElementById("hour").innerHTML = hour;
            document.getElementById("minute").innerHTML = minute;
            document.getElementById("seconds").innerHTML = seconds;
        }
    
        document.getElementById('start-btn').addEventListener('click', () => {
            intervalId = setInterval(startTimer, 1000);
        });
        
        document.getElementById('stop-btn').addEventListener('click', () => {
            if (intervalId)
            clearInterval(intervalId);
        });
        
        
        document.getElementById('reset-btn').addEventListener('click', () => {
            totalSeconds = 0;
            document.getElementById("hour").innerHTML = '0';
            document.getElementById("minute").innerHTML = '0';
            document.getElementById("seconds").innerHTML = '0';
        });
    }  
});
    
