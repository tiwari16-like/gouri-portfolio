import test from 'node:test';
import assert from 'node:assert/strict';
import {
  resolveActiveDimension,
  stepDimensionId,
} from './differenceEngine.js';

const SAMPLE_DIMENSIONS = [
  { id: 'think-differently', index: '01' },
  { id: 'build-with-purpose', index: '02' },
  { id: 'lead-beyond-screen', index: '03' },
  { id: 'always-evolving', index: '04' },
];

test('resolveActiveDimension returns matching dimension or falls back to first', () => {
  assert.equal(
    resolveActiveDimension(SAMPLE_DIMENSIONS, 'lead-beyond-screen')?.index,
    '03'
  );
  assert.equal(
    resolveActiveDimension(SAMPLE_DIMENSIONS, 'missing-id')?.index,
    '01'
  );
  assert.equal(resolveActiveDimension([], '01'), null);
});

test('stepDimensionId cycles forward and backward cleanly', () => {
  assert.equal(
    stepDimensionId(SAMPLE_DIMENSIONS, 'think-differently', 1),
    'build-with-purpose'
  );
  assert.equal(
    stepDimensionId(SAMPLE_DIMENSIONS, 'always-evolving', 1),
    'think-differently'
  );
  assert.equal(
    stepDimensionId(SAMPLE_DIMENSIONS, 'think-differently', -1),
    'always-evolving'
  );
});
