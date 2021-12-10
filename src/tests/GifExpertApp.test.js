import { shallow } from "enzyme";
import { GifExpertApp } from "../GifExpertApp";
// Esta importación nos ayuda con el autocompletado aunque no sea necesaria
import '@testing-library/jest-dom';

describe('Probar de componente GifExpertApp', () => {

    test('debe mostrarse correctamente', () => {
        const wrapper = shallow(<GifExpertApp />);
        expect(wrapper).toMatchSnapshot();
    })

    test('debe mostrar una lista de categorías', () => {
        const categories = ['Dragon Ball', 'One Punch'];
        const wrapper = shallow(<GifExpertApp defaultCategories={categories} />);
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('GifGrid').length).toBe(categories.length);
    })
})
