describe('appendDeleteBtn function', () => {
    let testRow;

    beforeEach(() => {
      // Create a fresh table row for each test
      testRow = document.createElement('tr');
    });

    it('should add a delete button to a row', () => {
      appendDeleteBtn(testRow);

      // Check if the delete button was added
      const deleteButton = testRow.querySelector('button');
      expect(deleteButton).toBeDefined();
    });

    it('should remove the row when the delete button is clicked', () => {
      // Add a delete button to the row
      appendDeleteBtn(testRow);

      // Attach the row to the document body
      document.body.appendChild(testRow);

      // Simulate a click on the delete button
      const deleteButton = testRow.querySelector('button');
      spyOn(testRow, 'remove');
      deleteButton.click();

      // Check if the row was removed
      expect(testRow.remove).toHaveBeenCalled();

      // Clean up: Remove the row from the document body
      document.body.removeChild(testRow);
    });
  });