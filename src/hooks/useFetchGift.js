import { useState, useEffect } from "react"
import { getGifs } from "../helpers/getGifs";

export const useFetchGift = (categoria) => {
    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect(() => {
        getGifs(categoria)
        .then(imgs => {
            setTimeout( () => {
                setState({
                    data: imgs,
                    loading: false
                })
            },
            2000);
        });
    }, [categoria])

    return state;
}
