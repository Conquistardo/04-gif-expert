import GifExpertApp from "../GifExpertApp";
import {shallow} from 'enzyme';

describe('Pruebas del coponente GifExpertApp', () => {

    test('el snapshot debe hacer match ', () => {
        const wrapper = shallow(<GifExpertApp />);
        expect(wrapper).toMatchSnapshot();
    });

    test('debe de mostrar una lista de categorias', () => {

        const categorias = ['One Pounch', 'Ultra instinto'];
        const wrapper = shallow(<GifExpertApp defaultCategorias={categorias}/>);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('GifGrid').length).toBe(categorias.length);
        
    })
        
    
});