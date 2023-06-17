/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {
  /**
   * existingCategories = {
   *  Food:{category:"Food", totalSpent:10},
   *  Clothing:{category:"Clothing", totalSpent:80},
   * }
   */
  const existingCategories = {};

  transactions.forEach((transaction) => {
    if (existingCategories[transaction.category]) {
      existingCategories[transaction.category].totalSpent =
        existingCategories[transaction.category].totalSpent + transaction.price;
    } else {
      existingCategories[transaction.category] = {
        category: transaction.category,
        totalSpent: transaction.price,
      };
    }
  });
  const result = Object.keys(existingCategories).map(
    (category) => existingCategories[category]
  );
  return result;
}

module.exports = calculateTotalSpentByCategory;
