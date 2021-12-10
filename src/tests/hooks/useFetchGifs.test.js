import { useFetchGifs } from "../../hooks/useFetchGifs";
import { renderHook } from '@testing-library/react-hooks'
// Para probar los hooks usamos https://react-hooks-testing-library.com/

describe('Pruebas de custom hook useFetchGifs', () => {
    test('debe de retornar el estado inicial', async() => {
        const { result, waitForNextUpdate } = renderHook(() => useFetchGifs("Goku"));
        const { data, loading } = result.current;
        // Necesitamos esperar a la actualización para no desmontar el componente antes
        await waitForNextUpdate();

        expect(data).toEqual([]);
        expect(loading).toBe(true);
    });

    test('debe retornar un arreglo de imgs y el loading en false', async() => {
        const { result, waitForNextUpdate } = renderHook(() => useFetchGifs("Goku"));
        // Esperamos la actualización
        await waitForNextUpdate();
        const { data, loading } = result.current;

        expect(data.length).toBe(10);
        expect(loading).toBe(false);
    })
})
