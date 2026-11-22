import test from 'node:test';
import assert from 'node:assert/strict';
import { validateContactForm } from './contactValidation.js';

test('validateContactForm rejects empty fields', () => {
  const result = validateContactForm({ name: '', email: '', message: '' });
  assert.equal(result.isValid, false);
  assert.ok(result.errors.name);
  assert.ok(result.errors.email);
  assert.ok(result.errors.message);
});

test('validateContactForm rejects malformed email', () => {
  const result = validateContactForm({
    name: 'Alex',
    email: 'not-an-email',
    message: 'Hello there',
  });
  assert.equal(result.isValid, false);
  assert.ok(result.errors.email);
  assert.equal(result.errors.name, undefined);
  assert.equal(result.errors.message, undefined);
});

test('validateContactForm accepts valid input', () => {
  const result = validateContactForm({
    name: 'Alex Rivera',
    email: 'alex@example.com',
    message: 'Interested in collaborating on a web project.',
  });
  assert.equal(result.isValid, true);
  assert.deepEqual(result.errors, {});
});
