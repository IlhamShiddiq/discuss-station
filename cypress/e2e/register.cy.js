/**
 * - Register spec
 *   - should display register page correctly
 *   - should display alert when name is empty
 *   - should display alert when email is empty
 *   - should display alert when password is empty
 *   - should display homepage when register is succeed
 */

import { rand } from '../../src/scripts/utils/string-format'

describe('Register spec', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/register')
  })

  it('should display register page correctly', () => {
    cy.get('input[placeholder="Your Name"]').should('be.visible')
    cy.get('input[placeholder="Your Email"]').should('be.visible')
    cy.get('input[placeholder="Your Password"]').should('be.visible')
    cy.get('button').contains(/^Submit$/).should('be.visible')
  })

  it('should display alert when name is empty', () => {
    cy.get('button').contains(/^Submit$/).click()

    cy.on('window:alert', (str) => {
      expect(str).to.equal('"name" is not allowed to be empty')
    })
  })

  it('should display alert when email is empty', () => {
    cy.get('input[placeholder="Your Name"]').type('testing')
    cy.get('button').contains(/^Submit$/).click()

    cy.on('window:alert', (str) => {
      expect(str).to.equal('"email" is not allowed to be empty')
    })
  })

  it('should display alert when password is empty', () => {
    cy.get('input[placeholder="Your Name"]').type('testing')
    cy.get('input[placeholder="Your Email"]').type('onlyfortestingz@gmail.com')
    cy.get('button').contains(/^Submit$/).click()

    cy.on('window:alert', (str) => {
      expect(str).to.equal('"password" is not allowed to be empty')
    })
  })

  it('should display homepage when register is succeed', () => {
    cy.get('input[placeholder="Your Name"]').type('testing')
    cy.get('input[placeholder="Your Email"]').type(`${rand()}@gmail.com`)
    cy.get('input[placeholder="Your Password"]').type('testing123')

    cy.get('button').contains(/^Submit$/).click()

    cy.get('div').contains(/^DiscussStation$/).should('be.visible')
  })
})
