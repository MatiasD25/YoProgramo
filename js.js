function Cantidad(){
    var cajon1=document.getElementById("caja1");
    var cajon2=document.getElementById("caja2");
    var texto= document.getElementById("titulo");  
       if(document.miform.numero.value >=3 && document.miform.numero.value <=10){     
            cajon1.style.display = "none";
            cajon2.style.display = "block";    
            texto.innerHTML = "Debe Cargar "+document.miform.numero.value+" nombres";      
    }   
 }

var cargaNombre = new Array();
function cargar(){
var cuenta=document.miform.numero.value;
var lstnombre = document.miform.nombres.value;  

    if(cargaNombre.length == (cuenta-1)){
        cargaNombre.push(lstnombre);
        alert("Se cargaron los nombres solicitados")  
        carga.style.display = "none";
        nombres.style.display="none";
        document.getElementById("titulo").innerHTML = "Se cargaron "+document.miform.numero.value+" nombres";
         for (i=0; i<cargaNombre.length; i++){
             document.getElementById('div_salida').innerHTML+= cargaNombre[i]+'<br>';  
         }     
    }else{ 
        cargaNombre.push(lstnombre);
        document.getElementById("nombres").value="";   

        }
    }

function tipo(){
    document.getElementById('div_salida2').innerHTML="";  
var numerico =new Array();
var res=0;
  if(document.miform2.radio1.value==2){ /*los Pares!!*/
        for (i=1; res<100; i++){ /*recorro los numeros desde el 1 al 100*/
            res=i*5; /*Multiplos de 5*/                 
                if (res % 2 == 0){    /*si es Impar lo armo y lo  muestro*/                     
                numerico[i]=res;
                document.getElementById('div_salida2').innerHTML+= numerico[i]+'<br>';  
                }
        }       
  }else{
 if(document.miform2.radio1.value==1)/*los Impares*/
    for (i=0; res<100; i++){ /*recorro los numeros desde el 1 al 100*/
        res=i*5; /*Multiplos de 5*/                             
            if (res % 2 != 0){   /*si es Impar lo armo y lo muestro*/                      
            numerico[i]=res;
            document.getElementById('div_salida2').innerHTML+= numerico[i]+'<br>';  
            }
    
    }
}
}

function calculadora(){
  var  valor1 =document.miform3.valor1.value;
  var  valor2 =document.miform3.valor2.value;
  resultado=0;
  var  op=document.miform3.Op.value;
  if(  valor1 <1 || valor2 <1 ){
        alert("ingrese valores mayores a 0");
    }else{
        switch(op) {
            case "Resta":
              resultado= valor1-valor2;
              break;
            case "Multiplicacion":
                resultado= valor1*valor2;
              break;
            default:
                resultado= parseFloat (valor1) + parseFloat(valor2)
          }document.getElementById('div_salida3').innerHTML = "El Resultado es: "+resultado+'<br>';  
        }

    }