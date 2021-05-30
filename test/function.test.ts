import { App, Stack } from 'aws-cdk-lib';
import { GolangFunction } from '../src';

test('can build function', () => {
  const app = new App();
  const stack = new Stack(app, 'TestStack');

  expect(new GolangFunction(stack, 'test_func')).toBeDefined();
});