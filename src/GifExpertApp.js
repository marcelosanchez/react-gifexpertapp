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
        <h2 className="_gifExpertApp__title">GifExpert App</h2>
        <AddCategory setCategories = { setCategories }/>
        

        <ol className='_addCategory__gifGridContainer'>
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