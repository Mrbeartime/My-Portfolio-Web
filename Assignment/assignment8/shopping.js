window.onload = pageLoad;

function pageLoad(){
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "cloth.json");
	xhr.onload = function() {
        var jsdata = JSON.parse(xhr.responseText);
        showData(jsdata);
    };
    
    xhr.onerror = function() { 
        alert("ERROR!"); 
    };
    
    xhr.send();
}

function showData(data){
	// var img = document.createElement("img");
    let layerDivs = document.querySelectorAll("#layer div");
    
    for(let i = 0; i < data.length; i++){
        let img = document.createElement("img");
        img.src = data[i].img;
        img.style.width = "100%"; 
        
        let brand = document.createElement("p");
        brand.innerHTML = data[i].brand;
        
        let price = document.createElement("p");
        price.innerHTML = "Price: " + data[i].price + " Baht";

        layerDivs[i].appendChild(img);
        layerDivs[i].appendChild(brand);
        layerDivs[i].appendChild(price);
    }
}

