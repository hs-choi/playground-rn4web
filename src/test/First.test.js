import { render, fireEvent } from '@testing-library/react-native';
import First from '../component/First';
import store from '../store';
import { Provider } from 'react-redux';


describe('first component redux test', () => {

  it('first text is Hello', () => {
    const { getByText } = render(
      <Provider store={store}>
        <First />
      </Provider>
      );
    expect(getByText('Hello')).not.toBeFalsy();
  });

  it('after changeBtn work text is world', () => {
    const { getByText } = render(
      <Provider store={store}>
        <First />
      </Provider>
      );
    fireEvent.press(getByText('change'));
    expect(getByText('world')).toBeTruthy();
  });

})
