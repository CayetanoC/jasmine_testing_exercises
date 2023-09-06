
it('should calculate the monthly rate correctly', function () {
  const values = {
    amount: 10000,
    years: 10,
    rate: 4.5
  }
  expect(calculateMonthlyPayment(values)).toEqual('103.64')
});


it("should return a result with 2 decimal places", function() {
  const values = {
    amount: 20000,
    years: 8,
    rate: 6
  }
  expect(calculateMonthlyPayment(values)).toEqual('262.83')
});

/// etc
