import { getGifs } from '../../helpers/getGifs';

describe('Probar getGifs fetch', () => {
    test('debe traer 10 elementos', async () => {
        const gifs = await getGifs('One Punch');
        expect(gifs.length).toBe(10);
    })

    test('debe traer 0 elementos con categoría vacía', async () => {
        const gifs = await getGifs('');
        expect(gifs.length).toBe(0);
    })
})
