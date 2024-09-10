let themech=document.getElementById("clr")

themech.addEventListener("click",()=>{
    if(themech.innerText==="Dark"){
        let nav=document.querySelector("nav")
        let main=document.querySelector("#main")
        let border=document.getElementById("bd")
        let name=document.getElementById("n")
        let border2=document.getElementById("sm")
        let p=document.querySelector("p")
        let greet=document.querySelector("span")
        let me=document.querySelector("#me")

        nav.style.backgroundColor="black";
        main.style.backgroundColor="black";
        p.style.color="white"
        greet.style.color="white"
        border2.style.borderTop="3px solid white";
        border.style.borderRight="3px solid white";
        me.style.border="2px solid white"
        me.style.boxShadow="0px 0px 7px white"
        themech.style.backgroundColor="black";
        themech.style.color="white"
        themech.style.boxShadow="0px 0px 5px white"

        // a.forEach((ele)=>{
        //     ele.style.border="1px solid white"
        //     ele.style.margin="5px"
        // })

        name.style.color="white";
        let anchor=document.querySelectorAll("a");
        anchor.forEach((ele)=>{
            ele.style.color="white"
        })
        themech.innerText="Light";
    }
    else{
        let nav=document.querySelector("nav")
        let main=document.querySelector("#main")
        let border=document.getElementById("bd")
        let name=document.getElementById("n")
        let border2=document.getElementById("sm")
        let p=document.querySelector("p")
        let greet=document.querySelector("span")
        let me=document.querySelector("#me")

        nav.style.backgroundColor="white";
        main.style.backgroundColor="white";
        p.style.color="black"
        greet.style.color="black"
        border2.style.borderTop="3px solid black";
        border.style.borderRight="3px solid black";
        me.style.border="2px solid black"
        me.style.boxShadow="0px 0px 7px black"
        name.style.color="black";
        themech.style.backgroundColor="white";
        themech.style.color="black"
        themech.style.boxShadow="0px 0px 5px black"

        let anchor=document.querySelectorAll("a");
        anchor.forEach((ele)=>{
            ele.style.color="black"
        })
        themech.innerText="Dark";

        a.forEach((e)=>{
            e.style.border="1px solid black"
            e.style.margin="5px"
        });
    }
})