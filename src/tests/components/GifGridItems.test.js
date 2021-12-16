import {shallow} from 'enzyme';
import { GifGridItems } from '../../components/GifGridItems';

describe('Pruebas del componente GifGridItems', () => {
    const title = 'Test';
    const url = 'url';
    const elements = {title:title, url:url};
    const wrapper = shallow(<GifGridItems
                            {...elements}/>);

    test('debe de hacer match con el snapshot', () => {        
        expect(wrapper).toMatchSnapshot();
    });    

    test('debe de tener un parrafo con el titulo', () => {
        const p = wrapper.find('p');
        expect(p.text().trim()).toBe(title);        
    });
    
    test('debe de obtener imagen igual al url y al alt de los props', () => {
        const img = wrapper.find('img');
        expect(img.props().src).toBe(url);
        expect(img.props().alt).toBe(title);
    });

    test('debe de tener animate__fadeIn', () => {
        const div = wrapper.find('div');
        const className = div.props().className;        
        expect( className.includes('animate__fadeIn') ).toBe(true);
    });
    
    
});