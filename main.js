const btnExtract = document.getElementById("btn-read");
btnExtract.onclick = extractText;
const pathFile = document.getElementById("path-p");

const input = document.getElementById('img-input')

input.addEventListener('change', function(){
    pathFile.innerHTML = this.value;
});




function extractText(){
    if(pathFile.innerHTML !== "..."){
        const textArea = document.getElementById("ta");
        const img = document.getElementById('img-input').files[0];
        let text = "";
        Tesseract.recognize(img).then( result =>{
            console.log(result.data.lines);
            
            let minconf = 50;
            
            result.data.lines.forEach(element => {
                
                if(element.confidence > minconf){
                    text = text+"\n"+element.text;
                }
            }); 

            textArea.value = text;
        });
    }else{
        alert("You did not choose an image");
    }
    

    
}

