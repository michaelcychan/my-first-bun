import {describe, expect,test} from 'bun:test';
import {SimpleCalculator} from '../components/SimpleCalculator';

describe('SimpleCalculator', () => {
  const app = new SimpleCalculator();
  describe('add', () => {
    test('0 + 0 returns 0', () => {
      
      const answer = app.add(0,0);
      expect(answer).toBe(0);
    });
    test('1 and 2 returns 3', ()=> {
      const answer = app.add(1, 2);
      expect(answer).toBe(3);
    })
  });
  describe('minus', () => {
    test('3-2 returns 1', () => {
      const answer = app.minus(3,2);
      expect(answer).toBe(1);
    });
    test('3-4 returns -1', () => {
      const answer = app.minus(3,4);
      expect(answer).toBe(-1);
    });
  })
  describe('isEqual', () => {
    test('returns false when not equal', () => {
      expect(app.isEqual(2,3)).toBeFalse;
    });
    test('returns true when not equal', () => {
      expect(app.isEqual(3,3)).toBeTrue;
    })
  })
})