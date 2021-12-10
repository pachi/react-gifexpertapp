import { useState, useEffect } from 'react';
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = (category) => {
    const [state, setState] = useState({
        data: [],
        loading: true
    })

    // // Este código solo se ejecuta una vez al no tener dependencias (lista vacía)
    useEffect(() => {
        getGifs(category).then(imgs =>
            // // Con un timeout artificial para ver la carga
            // setTimeout(
            //     () =>
            //         setState({
            //             data: imgs,
            //             loading: false
            //         }), 3000
            // )
            setState({
                data: imgs,
                loading: false
            })
        )
    }, [category]);

    return state; // {data:[], loading: true}
};
