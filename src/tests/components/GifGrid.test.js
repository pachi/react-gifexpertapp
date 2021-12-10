import { shallow } from 'enzyme';
import { GifGrid } from "../../components/GifGrid";
import { useFetchGifs } from '../../hooks/useFetchGifs';
// Esta importación nos ayuda con el autocompletado aunque no sea necesaria
import '@testing-library/jest-dom';

// Simula nuestro hook
jest.mock('../../hooks/useFetchGifs');

describe('Pruebas del componente GifGrid', () => {
    test('debe mostrarse correctamente', () => {
        // Indicamos el valor retornado de la función mock para el estado inicial
        useFetchGifs.mockReturnValue({
            data: [],
            loading: true,
        });
        const wrapper = shallow(<GifGrid category="Goku" />);
        expect(wrapper).toMatchSnapshot();
    });

    test('debe mostrar items cuando se cargan imágenes useFetchGifs', () => {
        const gifs = [{
            id: 'ABC',
            url: 'https://localhost/cualquier/cosa.jpg',
            title: 'Cualquier cosa'
        }];
        // Indicamos el valor retornado de la función mock para el estado con datos cargados
        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false,
        });
        const wrapper = shallow(<GifGrid category="Goku" />);
        // expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('p').exists()).toBe(false);
        expect(wrapper.find('GridItem').length).toBe(gifs.length);
    });
})
