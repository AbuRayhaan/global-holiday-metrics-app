import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import store from '../redux/configureStore';
import Holiday from '../components/holiday/HolidayCard';

const HolidayStoreProvider = () => (
  <Provider store={store}>
    <Holiday />
  </Provider>
);

describe('Holiday component test', () => {
  it('renders correctly', () => {
    const RenderHolidayComponent = renderer.create(<HolidayStoreProvider />).toJSON();
    expect(RenderHolidayComponent).toMatchSnapshot();
  });
});
