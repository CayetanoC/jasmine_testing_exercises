describe('Payments Tests with Setup and Teardown', function () {
    beforeEach(function () {
      // These are the initial values to be used for the tests
      billAmtInput.value = 100;
      tipAmtInput.value = 20;
    });
  
     
    describe('createCurPayment', function () {
      it('should return a valid payment object for valid input', function () {
        const curPayment = createCurPayment();
  
        expect(curPayment).toEqual({
          billAmt: '100',
          tipAmt: '20',
          tipPercent: 20,
        });
      });
    });
  
    describe('appendPaymentTable', function () {
      it('should append a payment row to the payment table', function () {
        const curPayment = {
          billAmt: '100',
          tipAmt: '20',
          tipPercent: 20,
        };
  
        appendPaymentTable(curPayment);
  
        const paymentRows = paymentTbody.querySelectorAll('tr');
        expect(paymentRows.length).toBe(1);
      });
    });
  
    describe('updateSummary', function () {
      it('should update the summary table with payment totals and average tip percent', function () {
        const curPayment1 = {
          billAmt: '100',
          tipAmt: '20',
          tipPercent: 20,
        };
  
        const curPayment2 = {
          billAmt: '50',
          tipAmt: '10',
          tipPercent: 20,
        };
  
        allPayments['payment1'] = curPayment1;
        allPayments['payment2'] = curPayment2;
  
        updateSummary();
  
        expect(summaryTds[0].textContent).toBe('$150');
        expect(summaryTds[1].textContent).toBe('$30');
        expect(summaryTds[2].textContent).toBe('20%');
      });
    });

    afterEach(function () {
        // This cleans up after the tests making sure the inputs and info are cleared after the tests
        allPayments = {};
        paymentId = 0;
        paymentTbody.innerHTML = '';
        summaryTds[0].textContent = '';
        summaryTds[1].textContent = '';
        summaryTds[2].textContent = '';
        billAmtInput.value = ''
        tipAmtInput.value = ''
      });

});

