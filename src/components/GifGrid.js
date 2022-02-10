import React, { useState, useEffect } from 'react'
import { useFetchGfs } from '../hooks/useFetchGifs'
// import { getGifs } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ( { category } ) => {

    // const [images, setImages] = useState([])
    const { data:images, loading } = useFetchGfs( category );
    // console.log(images, loading);

    // getGifs();

    return (
        <>
            <h3 className='animate__animated animate__fadeIn'>{ category }</h3>
            { loading && <p className='animate__animated animate__flash'>'Loading...'</p> }
            <div className='card-grid'>
                { 
                    images.map( img => 
                        <GifGridItem 
                            key={img.id} 
                            { ...img } 
                        />
                    ) 
                }
            </div>
        </>
    )
}
