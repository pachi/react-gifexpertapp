import React from 'react';
import { shallow } from "enzyme"
import { GridItem } from "../components/GridItem"

describe('Pruebas de GridItem', () => {
    const title = "Un título";
    const url = "https://localhost/algo.jpg";

    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<GridItem title={title} url={url} />);
    })

    test('debe mostrar el componente correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    })


    test('debe tener un párrafo con el título', () => {
        const p = wrapper.find('p');
        expect(p.text().trim()).toBe(title);
    });

    test('debe tener la imagen igual al url y alt de los props', () => {
        const img = wrapper.find('img');
        // console.log(img.props())
        // console.log(img.prop('src'))
        expect(img.prop('src')).toBe(url);
        expect(img.prop('alt')).toBe(title);
    });

    test('debe tener clase animate__fadeIn', () => {
        const div = wrapper.find('div');
        console.log(div.prop('className'));
        expect(div.prop('className').includes('animate__fadeIn')).toBe(true);
    })
})
