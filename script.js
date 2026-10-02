const api = "https://dog.ceo/api/breeds/image/random"
const button = document.getElementById("button")
const img = document.getElementById("img")

async function getdog(){
    try {
        const res = await fetch(`${api}`)
        if(!res.ok){
            throw("cannot fetch ryt now")
        }
        const data = await res.json();
        console.log(data);
        img.src = data.message;
        img.style.display = "block";
        
    } catch (error) {
        console.log(error);
        
    }
    
}
button.addEventListener("click",getdog)