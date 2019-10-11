QUnit.module('MAIN MODULE', {})  // group all these tests together


QUnit.test('TEST calarea', assert => {
    assert.equal(calcAreatest(3,6), 18, 'passed')
    assert.equal(calcAreatest(-1,6), 'Rectange cannot be of negative area', 'Failed')
    assert.equal(calcAreatest(3,9), 27, 'passed')
    assert.equal(calcAreatest(5,6), 30, 'passed')
    assert.equal(calcAreatest(2,6), 12, 'passed')
  })