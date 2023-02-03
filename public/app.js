

    // days_between function var


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
  return waitingtime;
      
}

function WT()
{

    // Set the date we're counting down to
    var countDownDate = new Date("2020-07-26 22:53:35").getTime();

    
    // Update the count down every 1 second
    var x =  setInterval(z,1000);
    
    
      // Get today's date and time
      var now = new Date().getTime();
        
      // Find the distance between now and the count down date
      var distance = Math.abs(now - countDownDate)
        
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
        
      // Output the result in an element with id="demo"
      //document.getElementById("headM").innerHTML 
      var z =[ "   " + (Math.floor(distance / (1000 * 60 * 60 * 24 * 365))) + " Years ",(Math.floor(((Math.floor(distance / (1000 * 60 * 60 * 24))) - //days in day -
      (Math.floor(distance / (1000 * 60 * 60 * 24 * 365))* 365))/ (30.42))) + " Months ",((Math.floor(distance / (1000 * 60 * 60 * 24))) -
      
       ((
           (Math.floor((Math.floor(((Math.floor(distance / (1000 * 60 * 60 * 24))) - 
          (Math.floor(distance / (1000 * 60 * 60 * 24 * 365))* 365))  
           / (30.42))) * 30.42) )                                                 
       ) 
        
       +

       ((Math.floor(distance / (1000 * 60 * 60 * 24 * 365)))* 365 ) )) + " Days",  (Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))) + " Hours " , (Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))) + " Minutes " , (Math.floor((distance % (1000 * 60)) / 1000)) + " Seconds "].join(' | ');

       
    return z
      // If the count down is over, write some text 
      /*if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "EXPIRED";*/
}
 
 











function display(password){
    var ans = prompt("Mint's Codename")
    if(ans == "tsws118"){
    
    document.getElementById("headM").innerHTML = WT()
    
    document.getElementById("profilepic").innerHTML = "<img src='https://igdownloader.com/file?id=aHR0cHM6Ly9zY29udGVudC1hdGwzLTEuY2RuaW5zdGFncmFtLmNvbS92L3Q1MS4yODg1LTE5L3MzMjB4MzIwLzI1MDU3MTIyOF8zMDU0MjY4NTc3OTkxNDFfOTEzODU4MDcwNDA2NjUxOTcyNV9uLmpwZz9fbmNfaHQ9c2NvbnRlbnQtYXRsMy0xLmNkbmluc3RhZ3JhbS5jb20mX25jX2NhdD0xMDUmX25jX29oYz1yUUNRcGl1YkxvUUFYX2xNSzktJmVkbT1BQmZkME1nQkFBQUEmY2NiPTctNCZvaD0wMF9BVDlyR3ZwNVZVRTdqS1M3Z20tb3Iyb1E4bWowc3Fqc0JZQklzYVp3WndpMENnJm9lPTYxRjIzQ0MyJl9uY19zaWQ9N2JmZjgz'>"

    document.getElementById("dhcontent").innerHTML ='<iframe width="560" height="315" src="https://www.youtube.com/embed/MpzIJ3SkgNw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'

    alert('your answer is correct')

    document.getElementById('dcountM').innerHTML = 'Datecount'

    document.getElementById('profilepiclabel').innerHTML = 'Current Profile Picture'

    document.getElementById('dhcontentlabel').innerHTML = 'Our memories'

    document.getElementById('dhsong').innerHTML = '<iframe width="0" height="0" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/95172500&color=%23ffffff&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>'






    

    

}
    else{
        alert('your code is incorrect')
    }

}
