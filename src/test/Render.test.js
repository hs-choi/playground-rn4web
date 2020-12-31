import { getHello } from '../service/getHello';
import Renders from '../component/Renders';
import { render, fireEvent } from '@testing-library/react-native';
jest.mock('../service/getHello');

describe('Render test', () => {
  it('server rendering test', async () => {
    
    const mockHello = getHello.mockResolvedValue('test');
    const hello = await mockHello();

    expect(mockHello).toHaveBeenCalledTimes(1);
    expect(hello).toBe('test');
  });
})
