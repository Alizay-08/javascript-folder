const counter = document.getElementById("count");
     const followerText = document.getElementById("follower-text");
    
     let count = 0;
    
     setInterval(() => {
       if (count < 500) {
         count++;
         counter.innerText = count;
       }
     }, 10);
    
     setTimeout(() => {
       followerText.innerText = "Followers on Github.";
     }, 3000);