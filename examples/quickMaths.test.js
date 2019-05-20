const expect = require('chai').expect;
const quickMaths = require('./quickMaths');

describe('Quick Maths', function() {
  describe('Without Decimal js', function () {
    it('should successfully add simple numbers - 1dp', function () {
      expect(quickMaths.addWithoutDecimal(0.1, 0.2)).to.equal(0.3);
    });

    it('should successfully add simple numbers - 2dp', function () {
      expect(quickMaths.addWithoutDecimal(0.01, 0.02)).to.equal(0.03);
    });

    it('should successfully add simple numbers - 3dp', function () {
      expect(quickMaths.addWithoutDecimal(0.001, 0.002)).to.equal(0.003);
    });

    it('should successfully add simple numbers - 4dp', function () {
      expect(quickMaths.addWithoutDecimal(0.0001, 0.0002)).to.equal(0.0003);
    });
  });

  describe('With Decimal js', function() {
    it('should successfully add simple numbers - 1dp', function () {
      expect(quickMaths.addWithDecimal(0.1, 0.2)).to.equal(0.3);
    });

    it('should successfully add simple numbers - 2dp', function () {
      expect(quickMaths.addWithDecimal(0.01, 0.02)).to.equal(0.03);
    });

    it('should successfully add simple numbers - 3dp', function () {
      expect(quickMaths.addWithDecimal(0.001, 0.002)).to.equal(0.003);
    });

    it('should successfully add simple numbers - 4dp', function () {
      expect(quickMaths.addWithDecimal(0.0001, 0.0002)).to.equal(0.0003);
    });
  });
});