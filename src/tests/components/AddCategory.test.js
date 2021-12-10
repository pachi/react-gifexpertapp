import { shallow } from 'enzyme';
import { AddCategory } from '../../components/AddCategory';
import '@testing-library/jest-dom';

describe('Probar componente AddCategory', () => {
    const setCategories = jest.fn();
    let wrapper;

    beforeEach(() => {
        // Limpiamos los datos de los mocks anteriores
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories={setCategories} />);
    });

    test('debe mostrar correctamente el componente', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('debe cambiar la caja de texto', () => {
        const input = wrapper.find('input');
        const value = "Hola mundo";
        input.simulate('change', { target: { value } });
        // expect(input.props()).toBe(value);
    })

    test('no debe postear la información con submit', () => {
        wrapper.find('form').simulate('submit', { preventDefault: () => { } });
        expect(setCategories).not.toHaveBeenCalled();
    })

    test('debe de llamar el setCategories y limpiar la caja de texto', () => {
        // 1. Localizamos el input
        const input = wrapper.find('input');
        // 2. Simulamos el cambio en la entrada
        input.simulate('change', { target: { value: "Goku" } });
        // 3. simulamos el submit
        wrapper.find('form').simulate('submit', { preventDefault: () => { } });
        // 4. Nos aseguramos de que el setCategories se haya llamado al menos una vez
        expect(setCategories).toHaveBeenCalled();
        // expect(setCategories).toHaveBeenCalledTimes(1);
        // 5. Vemos el contenido del input
        expect(input.prop("value")).toBe("");
    })


})
