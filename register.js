//if("serviceWorker" in navigator) Forma extensa - Aunque se usa mas en React
if(navigator.serviceWorker) //Otra forma de hacer lo mismo, mas sencillo y entendible
//if pregunta: ¿Service Worker es compatible con el navegador del usuario?
{
    navigator.serviceWorker.register("./serviceWorker.js") //Permite registrar un Service Worker para poder trabajar tambien llamado sw.js    
    //En el contiene toda la informacion que se debera almacenar en cache, modificar, evaluar, comparar, eliminar, reemplazar, etc
}