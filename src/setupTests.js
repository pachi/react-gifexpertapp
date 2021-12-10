import Enzyme from 'enzyme';
// import Adapter from 'enzyme-adapter-react-16';
// Usamos esta actualización no oficial del adaptador de Enzyme para react 17
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
// Esta extensión nos ayuda con los snapshot a JSON
import { createSerializer } from 'enzyme-to-json';
// // Esto nos permite extender Jest para componentes React
// import '@testing-library/jest-dom/extend-expect';
 
Enzyme.configure({ adapter: new Adapter() }); 
expect.addSnapshotSerializer(createSerializer({ mode: 'deep' }))
