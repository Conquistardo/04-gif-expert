import React from 'react'
import { useFetchGift } from '../hooks/useFetchGift';
import { GifGridItems } from './GifGridItems';

export const GifGrid = ({categoria}) => {

    const {data:images, loading} = useFetchGift(categoria);

    return (
        <>
            <h3>{categoria}</h3>
            {loading?'Cargando...':''}
            <div className='cardGrid'>            
                    {
                        images.map(
                            (img) => <GifGridItems 
                                    key={img.id}
                                    {...img}/>
                        )
                    }
            </div>
        </>
    )
}
