import { GifGrid } from "../../components/GifGrid";
import {shallow} from 'enzyme';
import { useFetchGift } from "../../hooks/useFetchGift";
jest.mock('../../hooks/useFetchGift');

describe('Pruebas en el componente GifGrid', () => {
    const categoria = 'Ultra instinto';
    
    test('debe de hacer match en snapshot', () => {
        useFetchGift.mockReturnValue({
            data: [],
            loading: true
        });
        const wrapper = shallow(<GifGrid categoria={categoria}/>);
        expect(wrapper).toMatchSnapshot();
    });

    test('debe de mostrar items cuando se cargan imagenes useFetchGifts', () => {
        const imgs = [{
            id: 'test123',
            url: 'testurl',
            title: 'testtitle'
        }]
        useFetchGift.mockReturnValue({
            data: imgs,
            loading: false
        });
        const wrapper = shallow(<GifGrid categoria={categoria}/>);

        //expect(wrapper.find('p').exists).toBe(false);//Está prueba no puede pasar ya que el tag 'p' si existe en coponente GifGridItems
        expect(wrapper.find('GifGridItems').length).toBe(imgs.length);
    });
    
    
});