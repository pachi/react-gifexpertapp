import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GridItem } from './GridItem';

export const GifGrid = ({ category }) => {

    const { data: images, loading } = useFetchGifs(category);

    return (
        <>
            <h3 className="animate__animated animate__fadeIn">{category}</h3>

            {loading && <p className="animate__animated animate__flash">Loading...</p>}

            <div className="card-grid">
                {images.map((img) => <GridItem
                    key={img.id}
                    {...img} />)}
            </div>
        </>
    )
}
