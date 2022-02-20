import React from 'react';
import { shallow } from 'enzyme';
import { GifGridItem } from '../../components/GifGridItem'

describe('Pruebas <GifGridItem />', () => { 
    const title = 'Un titulo';
    const url   = 'https://localhost/algo.jpg';
    let wrapper = shallow(<GifGridItem title={title} url={url} />)

    test('Debe de mostrar el componente correctamente', () => { 
        expect( wrapper ).toMatchSnapshot();
    })

    test('Debe tener un parrafo con el title', () => { 
        const p = wrapper.find('p');
        expect( p.text().trim() ).toBe( title );
    })

    test('Debe tener la imagen URL y ALT igual que en los props', () => {
        const img = wrapper.find('img');
        expect( img.props().src ).toBe( url );
        expect( img.props().alt ).toBe( title );
    })

    test('El div principal debe tener las clases requeridas', () => {
        const div_principal = wrapper.find('div')
        const clases_req = 'animate__fadeIn'
        const divClassName = div_principal.props().className
        expect( divClassName.includes(clases_req) ).toBe( true )
    })
})