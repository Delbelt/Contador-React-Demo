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

//ACTIVACION SERVICE WORKER (sw)
self.addEventListener("activate", (evento) => //Activa el cache guardado
//("Tipo de evento", funcion(e) =>)
{
    const listaCache = [CACHE_NAME]; //Apunta a la lista de CACHE_NAME que es la que contiene todos los componentes en cache

    evento.waitUntil (
        caches.keys().then(cachesName => { //cachesName = lista de caches (tiene a todos)
            return Promise.all(cachesName.map(cacheName => { //cacheName (es el objeto individual)
                //Pregunta si en la listaCache existe el objeto individual cacheName
                listaCache.indexOf(cacheName) == -1 && caches.delete(cacheName) //Elimina el cache anterior, y deja el mas reciente
            }));
        }).then (() => self.clients.claim())
        //clients.claim: Puede tomar el control de clients no supervisados, dentro del sw una vez que este activado
        //Sirve para no hacer una llamada al servidor (Next Page-Reload) (aunque tengamos el cache guardado)
        //de un archivo o datos en cache que tengamos, entonces claim lo que hace, es:
        //brindar los datos almacenados dentro del sw
        //en el cache desde el primer momento que se guarda esa informacion (First Load) lo que optimiza la carga de la pagina y la performance
    );
});

