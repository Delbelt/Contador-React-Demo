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

const CACHE_NAME = "version_uno_cache" //Es el nombre que aparece en Cache Storage de Application en "Ver elementos"