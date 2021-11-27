//BASICAMENTE SELECCIONAS QUE COMPONENTS, SCRIPTS o CDN VAN A SER CACHEADOS
//Para no tener que solicitar al servidor todo momento los datos

const CACHE_ELEMENTS = //ELEMENTOS QUE NOSOTROS VAMOS A CONSIDERAR PARA CACHEAR
[
    "./", //Cacheando la pagina de inicio
    "https://unpkg.com/@babel/standalone/babel.min.js", //Cache Babel
    //Cache React:
    "https://unpkg.com/react@17/umd/react.production.min.js",
    "https://unpkg.com/react-dom@17/umd/react-dom.production.min.js",
    "./style.css", //Cache estilos
    "./components/contador.js", //Metodo Contador
]

const CACHE_NAME = "version_uno_cache" //Es el nombre que aparece en Cache Storage de Application en "Inspeccionar elementos"

//INSTALACION DE SERVICE WORKER (sw)
self.addEventListener("install", (evento) => //Agrega/Instala un detector de Eventos
//("Tipo de evento", funcion(nombreFuncion) =>)
{
    evento.waitUntil ( //Se usa para decirle al navegador que no cancele al serviceWorker(sw)
                       //hasta que la promesa pasada waitUntil se resuelva o rechace.

        caches.open(CACHE_NAME).then(cache => //ASIGNA EL NOMBRE AL SERVIDOR CACHE DEL NAVEGADOR
        {
            cache.addAll(CACHE_ELEMENTS).then( () => //AGREGA TODOS LOS COMPONENTS AL CACHE DEL NAV
            {
                self.skipWaiting();
            });

        }).catch(error => console.log(error)) //EN CASO DE ERROR, IMPRIME EN CONSOLA
    );
});

