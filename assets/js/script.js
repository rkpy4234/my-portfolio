const body = document.querySelector("body"),
       nav = document.querySelector("nav"),
       modeToggle = document.querySelector(".dark-light"),
       searchBox = document.querySelector(".searchBox"),
       open = document.querySelector(".open"),
       close = document.querySelector(".close");

       

//js code to toggle dark and light mode
       modeToggle.addEventListener("click",()=>{
        modeToggle.classList.toggle("active");
        body.classList.toggle("dark");
       });




       //toggle for nav bar
       searchBox.addEventListener("click", ()=>{
              searchBox.classList.toggle("active");
              // nav.classList.add("active");
          });
      
      
      //for side bar
      
      open.addEventListener("click",()=>{
          nav.classList.add("active");
      })
      body.addEventListener("click", e =>{
          let clickedElm = e.target;
      
          if(!clickedElm.classList.contains("open") && !clickedElm.classList.contains("menu")){
              nav.classList.remove("active");
              searchBox.classList.remove("active");
          }
      })
      