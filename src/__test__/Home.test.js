import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import store from '../redux/configureStore';
import Home from '../components/home/CountryList';

const HomeStoreProvider = () => (
  <Provider store={store}>
    <Home />
  </Provider>
);

describe('Home component test', () => {
  it('renders correctly', () => {
    const RenderHomeComponent = renderer.create(<HomeStoreProvider />).toJSON();
    expect(RenderHomeComponent).toMatchSnapshot();
  });
});