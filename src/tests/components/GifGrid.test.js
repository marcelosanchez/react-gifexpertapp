import React from 'react';
import '@testing-library/jest-dom';

import { shallow } from 'enzyme';
import { GifGrid } from '../../components/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs')


describe('Pruebas en el componente <GifGrid/>', () => {
    const category = 'Puppies'

    test('Debe mostrarse correctamente', () => {
        
        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        });
        
        const wrapper = shallow(<GifGrid category={category}/>);
        expect( wrapper ).toMatchSnapshot();
    });
    
    test('Debe mostrar items, cuando se cargan imagenes useFetchGifs', () => {
        
        const gifs = [{
            id: 'ABC', 
            url: 'http://localhost/cualquier/cosa.jpg', 
            title: 'Cualquier'
        }];

        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        });
        
        const wrapper = shallow(<GifGrid category={category}/>);
        expect( wrapper ).toMatchSnapshot();  // Validar que el snapshot coinicide
        expect( wrapper.find('p').exists() ).toBe( false );  // Validar que no se muestra el <p> ya que loading es false
        expect( wrapper.find('GifGridItem').length ).toBe( gifs.length ) // Que el numero de resultados, sea igual al numero de gifs recibidos como respuesta
    
    });
})