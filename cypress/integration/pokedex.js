/* eslint-disable no-undef */
describe('Pokedex', function() {
  beforeEach(() => {
    cy.visit('http://localhost:5000')
  })

  it('front page can be opened', function() {
    cy.contains('ivysaur')
    cy.contains('Pokémon and Pokémon character names are trademarks of Nintendo.')
  })

  it('can navigate to pokemons', () => {
    cy.contains('pidgey').click()
    cy.contains('keen eye')
  })
})