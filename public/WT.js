
    // days_between function 


    function days_between(date1, date2) {

    

        var date1 = new Date()
        var date2 = new Date(2020,07,27)
        
        // The number of milliseconds in one day
        var ONE_DAY = 1000 * 60 * 60 * 24
        
        // Convert both dates to milliseconds
        var date1_ms = date1.getTime()
        var date2_ms = date2.getTime()
        
        // Calculate the difference in milliseconds
        var difference_ms = Math.abs(date1_ms - date2_ms)
        
        // Convert back to days and return
        //return Math.round(difference_ms/ONE_DAY)
        
        
        var t = difference_ms
        var //cy = 365 * 24 * 60 * 60 * 1000,
            //cm = 30 * 24 * 60 * 60 * 1000,
            cd = 24 * 60 * 60 * 1000,
            ch = 60 * 60 * 1000,
            y = Math.floor((t / cd) / 365),
            mo = Math.floor(
                (
                    (t / cd) - Math.floor
                        (
                        (t / cd) / 365
                        )
        
                    * 365)
                 / 30 ),
            dgu = Math.floor(t / cd) - (Math.floor((y) * 365) //year in day 
                + Math.floor((mo)* 30 ))  //month in day      
            d = Math.floor(t / cd),
            h = Math.floor( (t - d * cd) / ch),
            m = Math.round( (t - d * cd - h * ch) / 60000),
            pad = function(n){ return n < 10 ? '0' + n : n; };
        if( m === 60 ){
        h++;
        m = 0;
        }
        if( h === 24 ){
        d++;
        h = 0;
        }
        
        var waitingtime = [ "   " + y + " Years ", mo + " Months ", dgu + " Day ", pad(h) + " Hours ", pad(m) + " Minutes "].join(' : ');
        console.log(waitingtime)
        return waitingtime;
          
        }
        
        setInterval(WT, 1000);
        
        function WT() {
          // Set the date we're counting down to
          var countDownDate = new Date("2020-07-26 22:53:35").getTime();
        
          // Get today's date and time
          var now = new Date().getTime();
            
          // Find the distance between now and the count down date
          var distance = Math.abs(now - countDownDate);
            
          // Time calculations for days, hours, minutes and seconds
        
          var years = Math.floor(distance / (1000 * 60 * 60 * 24 * 365));
          var months = Math.floor(((Math.floor(distance / (1000 * 60 * 60 * 24))) - //days in day -
                       (Math.floor(distance / (1000 * 60 * 60 * 24 * 365))* 365))  //years in day = months in day
                        / (30.42))                                                   //months in month 
          
          var days =  (Math.floor(distance / (1000 * 60 * 60 * 24))) -
          
                    ((
                        (Math.floor((Math.floor(((Math.floor(distance / (1000 * 60 * 60 * 24))) - 
                       (Math.floor(distance / (1000 * 60 * 60 * 24 * 365))* 365))  
                        / (30.42))) * 30.42) )                                                 
                    ) 
                     
                    +
        
                    ((Math.floor(distance / (1000 * 60 * 60 * 24 * 365)))* 365 ) )  
            
          var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
          var seconds = Math.floor((distance % (1000 * 60)) / 1000);
            
        
          /*var z =[ "   " + (Math.floor(distance / (1000 * 60 * 60 * 24 * 365))) + " Years ",(Math.floor(((Math.floor(distance / (1000 * 60 * 60 * 24))) - //days in day -
          (Math.floor(distance / (1000 * 60 * 60 * 24 * 365))* 365))/ (30.42))) + " Months ",((Math.floor(distance / (1000 * 60 * 60 * 24))) -
          
           ((
               (Math.floor((Math.floor(((Math.floor(distance / (1000 * 60 * 60 * 24))) - 
              (Math.floor(distance / (1000 * 60 * 60 * 24 * 365))* 365))  
               / (30.42))) * 30.42) )                                                 
           ) 
            
           +
        
           ((Math.floor(distance / (1000 * 60 * 60 * 24 * 365)))* 365 ) )) + " Days",  (Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))) + " Hours " , (Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))) + " Minutes " , (Math.floor((distance % (1000 * 60)) / 1000)) + " Seconds "].join(' | ');
        */
        
        var z = [" "+ years + "Years"+" "+ months + "Months"+" "+ days + "days"+" "+ hours + "hours"+" "+ minutes + "minutes"+" "+ seconds + "seconds"+" "].join(' | ');
           
           document.getElementById("headM").innerHTML = z

        return z
         
        }

        console.log(WT())