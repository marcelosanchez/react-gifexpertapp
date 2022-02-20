import React from 'react';
import '@testing-library/jest-dom';

import { shallow } from 'enzyme';
import { AddCategory } from '../../components/AddCategory';

describe('Pruebas del componente <AddCategory/>', () => { 
    const setCategories = jest.fn();
    let wrapper = shallow(<AddCategory setCategories = { setCategories }/>);

    beforeEach( () => {
        // Todo lo que necesito que se resetee, en cada prueba
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories = { setCategories }/>);
    } );

    test('Debe mostrarse correctamente', () => { 
        expect( wrapper ).toMatchSnapshot();
    });

    test('Debe cambiar la caja de texto', () => {
        const input = wrapper.find('input');
        const value = `Hola mundo`;

        input.simulate('change', { target: { value } });  // Las llaves son para simular el evento
        
        expect( wrapper.find('p').text().trim() ).toBe( value );
    });

    test('No debe postear la informacion onsubmit', () => {
        wrapper.find('form').simulate('submit', { preventDefault: () => {} })
        expect( setCategories ).not.toHaveBeenCalled()  // no se llama la funcion
    });

    test('Debe llamar el setCategories y limpiar la caja de texto', () => {
        const value = `Hola mundo`;
        const input = wrapper.find('input');
        
        // 1. simular el imputChange
        input.simulate('change', { target: { value } });  // Las llaves son para simular el evento
        // 2. simular el submit
        wrapper.find('form').simulate('submit', { preventDefault: () => {} });
        // 3. setCategories se debe haber llamado
        expect( setCategories ).toHaveBeenCalled();
        expect( setCategories ).toHaveBeenCalledTimes( 1 );  // Numero de veces que se llama la funcion
        expect( setCategories ).toHaveBeenCalledWith( expect.any(Function) );  // Que el parametro enviado sea una funcion

        // 4. el valor del input de estar como un string vacio
        console.log(input.text)
        expect( input.prop('value') ).toBe('');
    });
})