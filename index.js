//  var items = document.querySelector("#items");
//  items.parentNode.style.backgroundColor = "lightgray";

// var ul  = items.childNodes[1];

// var liC = ul.children;

// liC[0].innerHTML = "Heml";
 
var select = document.querySelector("#items");

var formulario = select.previousElementSibling;

formulario.addEventListener("submit",function(event){
    event.preventDefault();
    
     var valores = formulario.children

    var div = formulario.nextElementSibling;

    var list = div.childNodes[1];
    console.log(list);

    for(var i = 0; i < valores.length; i++){
        if(valores[i].tagName == "INPUT"){
           var li =  document.createElement('li');
           var text = document.createTextNode(valores[i].value)
           li.appendChild(text);
           list.appendChild(li);
        }
    }
})