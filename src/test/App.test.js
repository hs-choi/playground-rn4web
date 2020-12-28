import { render, fireEvent } from '@testing-library/react-native';
import App from '../App';

test('App에서 첫번 째 텍스트는 hello여야 한다.', () => {
  // expect(getByText('hello')).toBeNull();
  const { getByText } = render(<App />);
  setTimeout(() => {
    expect(getByText('hello')).not.toBeNull();
  }, 1000)
});


test('change 버튼을 누르면 hello 텍스트가 world로 전환', () => {
  const { getByText } = render(<App />);
  setTimeout(() => {
    expect(getByText('hello')).not.toBeNull();
    fireEvent.press(getByText('change'));
    expect(getByText('world')).not.toBeNull();
  }, 1000)
});


