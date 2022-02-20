import React from 'react';
import '@testing-library/jest-dom';

import { shallow } from 'enzyme';
import GifExpertApp from '../GifExpertApp';

describe('Pruebas en <GifExpertApp/>', () => {
    
    test('Debe mostrarse correctamente', () => {
        const wrapper = shallow(<GifExpertApp />);
        expect( wrapper ).toMatchSnapshot();
    });
    
    test('Debe mostrar una lista de categorias', () => {
        const categories = ['Puppies', 'birds'];
        const wrapper = shallow(<GifExpertApp defaultCategories = {categories}/>);
        
        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('GifGrid').length ).toBe( categories.length );  // El numero de elementos debe ser igual al numero de categorias enviadas
    });
    
});