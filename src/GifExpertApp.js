import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = ({ defaultCategories = [] }) => {

    // const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];
    const [categories, setCategories] = useState(defaultCategories)

    // const handleAdd = () => {
    //     setCategories( categories => [...categories, 'Kaladin'] )
    //     // console.log( categories )
    // };

    return <>
        <h2>GifExpertApp</h2>
        <AddCategory setCategories = { setCategories }/>
        <hr />

        <ol>
            {
                categories.map( category => 
                        // <li key={ category }>{ category }</li>
                        <GifGrid 
                            key={ category } 
                            category={ category }
                        />
                    )
            }
        </ol>
    </>;
}

export default GifExpertApp;