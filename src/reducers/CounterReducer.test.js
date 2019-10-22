import reducer from './CounterReducer';
import {add, subtract} from '../actions/CounterActions';

describe('CounterReducer', () => {
  test('add()', () => {
    expect(reducer({}, add()).result).toBe(1);
    expect(reducer({}, add()).lastCommand).toBe('added');
    expect(reducer({result: 2}, add()).result).toBe(3);
    expect(reducer({result: 2}, add()).lastCommand).toBe('added');
  });

  test('subtract()', () => {
    expect(reducer({}, subtract()).result).toBe(-1);
    expect(reducer({}, subtract()).lastCommand).toBe('subtracted');
    expect(reducer({result: 2}, subtract()).result).toBe(1);
    expect(reducer({result: 2}, subtract()).lastCommand).toBe('subtracted');
  });
});