function appendTd(tr, value) {
    const td = document.createElement('td');
    td.textContent = value;
    tr.appendChild(td);
  }

  function appendDeleteBtn(tr) {
    const deleteTd = document.createElement('td');
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'X';
  
  deleteButton.addEventListener('click', function () {
    // Find and remove the parent 'tr' when the button is clicked
    const parentTr = deleteButton.closest('tr');
    if (parentTr) {
      parentTr.remove();
    }
  });

  deleteTd.appendChild(deleteButton);
  tr.appendChild(deleteTd);
}

// Example usage:
const serverTable = document.getElementById('server-table');
const paymentTable = document.getElementById('payment-table');

const serverRow = document.createElement('tr');
appendTd(serverRow, 'Server A');
appendDeleteBtn(serverRow);
serverTable.querySelector('tbody').appendChild(serverRow);

const paymentRow = document.createElement('tr');
appendTd(paymentRow, '2023-09-05');
appendDeleteBtn(paymentRow);
paymentTable.querySelector('tbody').appendChild(paymentRow);
