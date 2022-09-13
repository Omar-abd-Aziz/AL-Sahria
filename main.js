
window.onload=()=>{
    tableBody.innerHTML=localStorage.getItem("TableBody")

}







function getAllDivs()
{
    window.onclick = e =>{
        if(Array.from(e.target.classList).includes("mo")==true)
        {
            let S = e.target
            Alert(S)
        } else if (Array.from(e.target.classList).includes("del")==true)
        {
            let x = e.target.parentNode
            AlertTextDel(x)
        }
    }

  
}

getAllDivs()


//////////////////////

function AlertTextDel(x)
{
    let name = x.childNodes[25].textContent;

    
    document.querySelector("#alert-dad").style.display="block";

    document.querySelector(".alert-text").textContent=`
    هل تريد حذف
    ${name}
    من قائمة الاسماء؟`



    yes.addEventListener("click", ()=>{

        document.querySelector("#alert-dad").style.display="none";
        if(x!=="")
        {
            x.remove()
            localStorage.setItem("TableBody", tableBody.innerHTML)
        }
        x=""
        
    })

    

    no.addEventListener("click", ()=>{

        x=""
        localStorage.setItem("TableBody", tableBody.innerHTML)
        document.querySelector("#alert-dad").style.display="none";

    })

}

///////////////////////

    
    



function Alert(S)
{

    // start get month
    let element = S
    let g = Array.from(element.parentNode.childNodes).indexOf(element)/2+0.5
    g=13-g
    document.querySelector(".alert-text").textContent=`! هل قام الطالب بدفع شهرية شهر ${g}`
    // end get month



    document.querySelector("#alert-dad").style.display="block";
    let yes = document.querySelector("#yes")
    let no = document.querySelector("#no")



    yes.addEventListener("click", ()=>{

                    
        if(element !== "" && Array.from(element.classList).includes("true")==false)
        {

            ////////////// start date
            const d = new Date();
            let month = d.getMonth();
            let day = d.getDate();
            let hour = d.getHours();
            let mint = d.getMinutes();
            ////////////// end date

            element.innerHTML=`&#x2714 <span id="date">${month+1}/${day}</span>`
            element.classList.add("true")

            localStorage.setItem("TableBody", tableBody.innerHTML)
        }

        element = ""

        localStorage.setItem("TableBody", tableBody.innerHTML)

        document.querySelector("#alert-dad").style.display="none";

    })

    

    no.addEventListener("click", ()=>{

       
        if(element !== "" && Array.from(element.classList).includes("true")==true)
        {
            element.innerHTML=""
            element.classList.remove("true")

            localStorage.setItem("TableBody", tableBody.innerHTML)
        }

        getAllDivs()
        
        element = ""

        localStorage.setItem("TableBody", tableBody.innerHTML)
        document.querySelector("#alert-dad").style.display="none";
 

    })




    
}















////////////////////* Start Add Name*//////////////


document.querySelector("#addName").addEventListener("click", ()=>{
    let newName = document.querySelector("#nameIn").value


    let tableBody = document.querySelector("#tableBody")
    
    tableBody.innerHTML+=
    `
    
    <tr>
        <td class="mo"></td>
        <td class="mo"></td>
        <td class="mo"></td>
        <td class="mo"></td>
        <td class="mo"></td>
        <td class="mo"></td>
        <td class="mo"></td>
        <td class="mo"></td>
        <td class="mo"></td>
        <td class="mo"></td>
        <td class="mo"></td>
        <td class="mo"></td>
        <td colspan="2" id="name">${newName}</td>
        <td colspan="1" class="del">X</td>
    </tr>
    
    `

    localStorage.setItem("TableBody", tableBody.innerHTML)

    document.querySelector("#nameIn").value=""
})



////////////////////* End Add Name*//////////////