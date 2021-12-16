import { getGifs } from "../../helpers/getGifs";

describe('Pruebas al helper getGifs', () => {
    test('debe de traer 10 elementos', async () => {
        const gifs = await getGifs('One Pounch');
        expect(gifs.length).toBe(10);        
    });
    
    test('debe de traer 0 elementos', async () => {
        const gifs = await getGifs('');
        expect(gifs.length).toBe(0);        
    });
});