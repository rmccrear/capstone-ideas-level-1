'use strict';

function calculateRentalCost() {
  const equipmentType = document.getElementById('equipmentType').value;
  const hours = parseFloat(document.getElementById('rentalHours').value) || 0;
  const numberOfPeople =
    parseInt(document.getElementById('numberOfPeople').value, 10) || 0;
  const lifeJackets = parseFloat(document.getElementById('lifeJackets').value);
  const coolerRental = parseFloat(
    document.getElementById('coolerRental').value
  );

  let hourlyRate;

  if (equipmentType === 'kayak') {
    hourlyRate = 20; // example rate, you can change this
  } else if (equipmentType === 'canoe') {
    hourlyRate = 30; // example rate, you can change this
  }

  const equipmentCost = hourlyRate * hours * numberOfPeople;
  const lifeJacketCost = lifeJackets * numberOfPeople;
  const totalCost = equipmentCost + lifeJacketCost + coolerRental;

  // Assuming a tax rate of 6%
  const tax = totalCost * 0.06;
  const totalWithTax = totalCost + tax;

  document.getElementById('totalCost').innerText = `$${totalWithTax.toFixed(
    2
  )}`;
  let cooler = '';
  if (coolerRental.toFixed(2) >= 1) {
    cooler = `<p>Cooler Rental: $${coolerRental.toFixed(2)}</p>`;
  }
  let lifeJacket = '';
  if (lifeJacketCost.toFixed(2) >= 1) {
    lifeJacket = `<p>Life Jackets: $${lifeJacketCost.toFixed(2)}</p>`;
  }
  if (numberOfPeople > 0 && hours > 0) {
    const summary = `
       <h5>Summary:</h5>
       <p>Equipment Cost: $${equipmentCost.toFixed(2)}</p>
       ${lifeJacket}
       ${cooler}
       <p>Tax (6%): $${tax.toFixed(2)}</p>
       <p><strong>Total Cost:</strong> $${totalWithTax.toFixed(2)}</p>
     `;

    document.getElementById('summary').innerHTML = summary;
  }
}
