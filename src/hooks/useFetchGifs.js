import { useEffect, useState } from "react"
import getGifs from '../helpers/getGifs'

// Es solo una funcion
export const useFetchGfs = ( category ) => {
    
    const [state, setState] = useState({
        data: [],
        loading: true
    });

    // console.log(category)

    useEffect( () => {  // se ejecuta solo cuando cambia la categoria
        getGifs(category) // Es una promesa
            .then( imgs => {  // Recibe las imagenes del fetch
                setState({  // Establece el estado que se retorna al final del custom hook
                    data: imgs,
                    loading: false
                })
            } );
    }, [ category ]);  // Condicion para ejecutar el effect

    return state;  // { data: [], loaging: true }
} 