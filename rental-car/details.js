document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('rentalForm');
  const totalCostDiv = document.getElementById('totalCost');

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const carType = document.getElementById('carType').value;
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

    const totalCost = costPerDay * rentalDays;
    totalCostDiv.innerHTML = `<p>Total Cost for Rental: $${totalCost}</p>`;
  });
});
