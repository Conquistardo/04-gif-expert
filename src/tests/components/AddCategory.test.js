import {shallow} from 'enzyme';
import { AddCategory } from '../../components/AddCategory';

describe('Pruebas del componente AddCategory', () => {

    const setCategorias = jest.fn();
    let wrapper = shallow(<AddCategory setCatergorias={setCategorias}/>);

    beforeEach(() => {
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCatergorias={setCategorias}/>);
    });

    test('debe de mostrarse', () => {        
        expect(wrapper).toMatchSnapshot();
    });

    test('debe de cambiar la caja de texto', () => {
        const input = wrapper.find('input');
        const value = 'Prueba';
        input.simulate('change', { target: {value: value} });        
    });

    test('no debe de postear la información on submit', () => {
        const form = wrapper.find('form');
        form.simulate('submit', {
            preventDefault: () => {}
        });

        expect(setCategorias).not.toHaveBeenCalled();

    });

    test('debe de llamar el setCategorias y limpiar la caja de texto', () => {
        const value = 'Valor';
        let input = wrapper.find('input');
        input.simulate('change', { target: {value: value} });    
        const form = wrapper.find('form');
        form.simulate('submit', {
            preventDefault: () => {}
        });

        expect(setCategorias).toHaveBeenCalledWith(expect.any(Function));
        expect(setCategorias).toHaveBeenCalled();

        input = wrapper.find('input');
        const valorInput = input.props().value;

        expect(valorInput).toBe('');
        
    });
    
    
});