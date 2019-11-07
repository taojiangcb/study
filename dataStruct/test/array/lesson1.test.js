import telcombin from '../../code/array/lesson1';
import { Exception } from 'handlebars';

test('test telcombin', () => {
  expect(telcombin('2')).toEqual(['a','b','c']);
})