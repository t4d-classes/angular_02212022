# Exercise 5

1. Add a new column to the Car Table. The header for the column should be labeled 'Actions'.

2. In the car table data rows, add a new column. In the column, place a button with a label of 'Delete'.

3. When the 'Delete' button is clicked, remove the car from the table.

JavaScript Hint: the filter function on array objects is a great way to delete

const removeCarId = 2;

this.cars = this.cars.filter(c => c.id !== removeCarId);

4. Ensure it works.