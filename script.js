const container =document.querySelector(".container");
const refreshbtn =document.querySelector(".refresh-btn");
const maxpalletBox= 32;

const generatePalette = () =>{
    container.innerHTML="";//clearing the container
    for(let i=0;i<maxpalletBox;i++){
        //generating random hex code
        let randomHex = Math.floor(Math.random() * 0xffffff).toString(16);
        randomHex =`#${randomHex.padStart(6,"0")}`;
        const color = document.createElement("li");
        color.classList.add("color");
        color.innerHTML =`<div class="react-box" style="background:${randomHex}"></div>
        <span class="hex-code">${randomHex}</span>`;
        //adding click event to current li element to copy the color
        color.addEventListener("click",() => copyColor(color,randomHex));
        container.appendChild(color);
    }
 
    
}
generatePalette();
const copyColor = (elem,hexVal) => {
   const colorElement = elem.querySelector(".hex-code");
   //Copying the hex value, updating the text copied,adding changing text back to original hex value after 1 second
   navigator.clipboard.writeText(hexVal).then(() => {
    colorElement.innerText ="Copied";
    setTimeout(()=> colorElement.innerText =hexVal,1000);
   })
}
refreshbtn.addEventListener("click",generatePalette);
//padstart will apppend 0 after # to ensure that the randomHex string is always 6 characters long