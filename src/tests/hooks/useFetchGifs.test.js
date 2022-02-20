import React from 'react';
import { useFetchGifs } from '../../hooks/useFetchGifs';
import { renderHook } from '@testing-library/react-hooks';

describe('Pruebas en el hook useFetchGifs', () => {
    test('Debe de retornar el estado inicial', async() => {
        const category = 'Puppies';
        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs( category ) );
        const { data, loading } = result.current;
        await waitForNextUpdate(); // Se pone despues para que no lo desmonte

        expect( data ).toEqual([]);
        expect( loading ).toBe(true);

    });

    test('Debe retornar un arreglo de imgs y loading false', async() => {
        const category = 'Puppies';
        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs( category ) );
        await waitForNextUpdate();  // Se pone antes para obtener el resultado del useEffect
        const { data, loading } = result.current;

        expect( data.length ).toBe(10);
        expect( loading ).toBe(false);
    });
});