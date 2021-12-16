import React from 'react'
import { useFetchGift } from '../hooks/useFetchGift';
import { GifGridItems } from './GifGridItems';
import PropTypes from 'prop-types';

export const GifGrid = ({categoria}) => {

    const {data:images, loading} = useFetchGift(categoria);

    return (
        <>
            <h3>{categoria}</h3>
            {loading?<p>Cargando...</p>:''}
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

GifGrid.propTypes = {
    categoria: PropTypes.string.isRequired
}
