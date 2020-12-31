import reducer from '../reducer/reducer';
import { getText, chageText } from '../action/action';

describe('Reducer Test', () => {
  it('getText action -> Hello 반환', () => {
    const initState  = { firstMsg: 'Hello' };
    const state = reducer(initState, getText());
    expect(state.firstMsg).toBe('Hello');
  });

  it('ChageText action -> world 반환', () => {
    const initState = { firstMsg: 'Hello' };
    const state = reducer(initState, chageText());
    expect(state.firstMsg).toBe('world');
  })
})

