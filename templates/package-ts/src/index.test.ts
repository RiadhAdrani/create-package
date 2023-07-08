import { it, expect, describe } from 'vitest';
import {
  add
} from './index.js';

describe('add', () => {
  it('add two numbers', () => {
    expect(add(1,2)).toBe(3);
  });
});


