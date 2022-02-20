import React from 'react'
import getGifs from '../../helpers/getGifs'

describe('Pruebas en helper getGifs Fetch', () => { 

    test('Debe de traer 10 elementos', async() => { 
        const gifts = await getGifs('Puppies');
        expect( gifts.length ).toBe( 10 );  // La lng en la url es 10
    });

    test('Debe llegar el parametro categoria', async() => { 
        const gifts = await getGifs('');
        expect( gifts.length ).toBe( 0 );  // Si no llega nada, debe devolver un arreglo vacio
    });
})