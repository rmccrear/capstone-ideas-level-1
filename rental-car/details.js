'use strict';
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('rentalForm');
  const totalCostDiv = document.getElementById('totalCost');
  const carTypeSelect = document.getElementById('carType');
  const carTypeTitle = document.getElementById('carTypeTitle');
  const carTypeDetail = document.getElementById('carTypeDetail');

  const carDescriptions = {
    economy:
      'Perfect for city trips, our economy cars offer great fuel efficiency and easy handling.',
    sedan:
      'Ideal for long drives, our sedans provide comfort and space, ensuring a pleasant journey.',
    suv: 'Our SUVs are perfect for larger groups or those requiring more space and power on the road.',
    luxury:
      'Experience the height of comfort and style with our luxury cars, perfect for making a lasting impression.',
  };

  carTypeSelect.addEventListener('change', () => {
    const selectedType = carTypeSelect.value;
    carTypeTitle.textContent =
      selectedType.charAt(0).toUpperCase() + selectedType.slice(1);
    carTypeDetail.textContent = carDescriptions[selectedType];
  });

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const carType = carTypeSelect.value;
    const rentalDays = parseInt(document.getElementById('rentalDays').value);
    let costPerDay;

    switch (carType) {
      case 'economy':
        costPerDay = 30;
        break;
      case 'sedan':
        costPerDay = 40;
        break;
      case 'suv':
        costPerDay = 50;
        break;
      case 'luxury':
        costPerDay = 70;
        break;
      default:
        costPerDay = 0;
    }

    const baseCost = costPerDay * rentalDays;
    const taxRate = 0.08; // 8% tax rate
    const insuranceFee = 15; // daily insurance fee
    const serviceFee = 20; // one-time service fee

    const taxAmount = baseCost * taxRate;
    const insuranceCost = insuranceFee * rentalDays;
    const totalCost = baseCost + taxAmount + insuranceCost + serviceFee;

    totalCostDiv.innerHTML = `
            <p><strong>Cost Breakdown:</strong></p>
            <p>Base Cost (${rentalDays} days): $${baseCost.toFixed(2)}</p>
            <p>Tax (8%): $${taxAmount.toFixed(2)}</p>
            <p>Insurance Fee (per day): $${insuranceCost.toFixed(2)}</p>
            <p>Service Fee: $${serviceFee.toFixed(2)}</p>
            <p><strong>Total Cost: $${totalCost.toFixed(2)}</strong></p>
        `;
  });
});
