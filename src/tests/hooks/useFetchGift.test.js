import { renderHook } from '@testing-library/react-hooks'
import { useFetchGift } from '../../hooks/useFetchGift';

describe('Pruebas en el custom hook useFetchGift', () => {

    test('debe de retornar el estado inicial', async () => {
        const {result, waitForNextUpdate} = renderHook(
            () => useFetchGift('One Pounch')
        );        
        const {data, loading} = result.current;
        await waitForNextUpdate();

        expect(data).toEqual([]);
        expect(loading).toBe(true);

    });

    test('debe de retornar un arreglo de imgs y loading en false', async () => {
        const {result, waitForNextUpdate} = renderHook(
            () => useFetchGift('One Pounch')
        );
        await waitForNextUpdate();
        const {data, loading} = result.current;

        expect(data.length).toBe(10);
        expect(loading).toBe(false);

    });
    
    
});
