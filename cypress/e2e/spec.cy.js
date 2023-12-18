import './commands';
import LocalStorageKeys from '../../src/constants/localStorageKeys';

describe('App', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
    cy.clearLocalStorage();
  });

  const addTodo = (newTodo) => {
    cy.get('.todo-input').type(`${newTodo}{enter}`);
    cy.get('.todo-list').should('contain', newTodo);
  };

  const assertLocalStorageLength = (expectedLength) => {
    cy.getLocalStorage(LocalStorageKeys.Todo).should('have.length', expectedLength);
  };

  const assertLocalStorageItem = (expectedText, expectedCompleted) => {
    cy.getLocalStorage(LocalStorageKeys.Todo).then((items) => {
      if (items.length > 0) {
        expect(items[0].text).to.equal(expectedText);
        expect(items[0].completed).to.equal(expectedCompleted);
      }
    });
  };

  it('renders correctly', () => {
    cy.get('h1').should('contain', 'TODO');
  });

  it('has no todos', () => {
    cy.get('.todo-list li').should('not.exist');
  });

  it('adds a new todo', () => {
    const newTodo = 'Add a Todo';
    addTodo(newTodo);
    assertLocalStorageLength(1);
    assertLocalStorageItem(newTodo, false);
  });

  it('marks a todo as completed', () => {
    const newTodo = 'Mark a Todo';
    addTodo(newTodo);

    cy.get('.todo-item').first().find('.todo-item-checkbox').click();
    cy.get('.todo-item').first().should('have.class', 'completed');

    assertLocalStorageLength(1);
    assertLocalStorageItem(newTodo, true);
  });

  it('deletes a todo', () => {
    const newTodo = 'Delete a Todo';
    addTodo(newTodo);

    cy.get('.todo-item').first().find('.delete-btn').click();

    cy.get('.todo-list li').should('have.length', 0);
    assertLocalStorageLength(0);
  });

  it('shows completed tasks', () => {
    const newTodo = 'Show a completed Todo';
    addTodo(newTodo);

    cy.get('.todo-item-checkbox').click();
    cy.contains('COMPLETED').click();

    cy.get('.todo-list').should('contain', newTodo);
  });

  it('shows active tasks', () => {
    const newTodo = 'Show an active Todo';
    addTodo(newTodo);

    cy.contains('ACTIVE').click();

    cy.get('.todo-list').should('contain', newTodo);
  });

  it('clears completed todos', () => {
    const newTodo = 'Clear completed Todos';
    addTodo(newTodo);

    cy.get('.todo-item').first().find('.todo-item-checkbox').check();
    cy.get('.todo-item').first().should('have.class', 'completed');

    cy.get('.clear-btn').click();

    cy.get('.todo-list').should('not.exist', newTodo);
    assertLocalStorageLength(0);
  });
});
