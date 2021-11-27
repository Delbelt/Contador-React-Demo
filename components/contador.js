const Contador = () => // Arrow function
{
    // [] Array destructuring nos permite extraer los elementos de un array y crear variables directamente
    const [contador, setContador] = React.useState(0);
    // Declaracion de variable de estado y su modificador Set

    // React.useState(0) - HOOK DE ESTADO
    // Te permiten usar estados y otras características de React sin escribir una clase.

    const aumentar = () => setContador(contador + 1); //Metodo para aumentar el contador a traves de un Set
    const disminuir = () => setContador(contador - 1); //Metodo para decrecer el contador a traves de un Set

    return ( //Esta usando BABEL a traves de JSX que permite traducir HTML y usarlo en JS como se ve a continuacion:
            //className = Propio de React, ademas se esta usando un cambio DINAMICO de la clase, si es menor a cero su clase es "menor" caso contrario su nombre es "mayor"
            //Util para usarlo con estilos, donde podemos manipular o cambiar la visual de lo que estemos haciendo en tiempo real
            //En este caso si es MAYOR: El color de las letras del h2 se hace VERDE, caso contrario: ROJO    
        <div>
            
            <h2 className = {contador < 0 ? "menor" : "mayor"} > Contador: {contador} </h2>
            <hr/>
            <br/>
            
            <button onClick= {aumentar}>  Aumentar</button>
            <button onClick= {disminuir}> Disminuir</button>

        </div>
    ); 
}