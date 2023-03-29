/**
 * - Login spec
 *   - should display login page correctly
 *   - should display alert when email is empty
 *   - should display alert when password is empty
 *   - should display alert when username and password are wrong
 *   - should display homepage when email and password are correct
 */

describe('Login spec', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/login')
  })

  it('should display login page correctly', () => {
    cy.get('input[placeholder="Your Email"]').should('be.visible')
    cy.get('input[placeholder="Your Password"]').should('be.visible')
    cy.get('button').contains(/^Submit$/).should('be.visible')
  })

  it('should display alert when username is empty', () => {
    cy.get('button').contains(/^Submit$/).click()

    cy.on('window:alert', (str) => {
      expect(str).to.equal('"email" is not allowed to be empty')
    })
  })

  it('should display alert when password is empty', () => {
    cy.get('input[placeholder="Your Email"]').type('testing@gmail.com')
    cy.get('button').contains(/^Submit$/).click()

    cy.on('window:alert', (str) => {
      expect(str).to.equal('"password" is not allowed to be empty')
    })
  })

  it('should display alert when username and password are wrong', () => {
    cy.get('input[placeholder="Your Email"]').type('testing333@gmail.com')
    cy.get('input[placeholder="Your Password"]').type('testing019283')
    cy.get('button').contains(/^Submit$/).click()

    cy.on('window:alert', (str) => {
      expect(str).to.equal('email or password is wrong')
    })
  })

  it('should display homepage when email and password are correct', () => {
    cy.get('input[placeholder="Your Email"]').type('onlyfortesting@gmail.com')
    cy.get('input[placeholder="Your Password"]').type('testing123')

    cy.get('button').contains(/^Submit$/).click()

    cy.get('div').contains(/^DiscussStation$/).should('be.visible')
  })
})
