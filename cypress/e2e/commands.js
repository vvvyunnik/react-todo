Cypress.Commands.add('setLocalStorage', (item, value) => {
    localStorage.setItem(item, JSON.stringify(value));
  });

Cypress.Commands.add('getLocalStorage', (item) => JSON.parse(localStorage.getItem(item)));
