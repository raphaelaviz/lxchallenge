
describe('Checks if ProductGrid component displays the right amount of products when each of the filter buttons are clicked', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000');
    });

// Men's Clothing
    it('renders 4 ProductCard components when "Men\'s Clothing" is clicked', () => {
      
      cy.get('button').contains("Men's Clothing").should('exist');
  
      
      cy.get('button').contains("Men's Clothing").click();
  
      
      cy.get('[data-testid="product-card"]').should('have.length', 4);
    });
// Jewelery
    it('renders 4 ProductCard components when "Jewelery" is clicked', () => {
      
      cy.get('button').contains("Jewelery").should('exist');
  
      
      cy.get('button').contains("Jewelery").click();
  
      
      cy.get('[data-testid="product-card"]').should('have.length', 4);
    });
// Electronics
    it('renders 4 ProductCard components when "Electronics" is clicked', () => {
      
      cy.get('button').contains("Electronics").should('exist');
  
      
      cy.get('button').contains("Electronics").click();
  
      
      cy.get('[data-testid="product-card"]').should('have.length', 6);
    });
// Women's Clothing
    it('renders 4 ProductCard components when "Women\'s Clothing" is clicked', () => {
      
      cy.get('button').contains("Women's Clothing").should('exist');
  
      
      cy.get('button').contains("Women's Clothing").click();
  
      
      cy.get('[data-testid="product-card"]').should('have.length', 6);
    });
// All products
    it('renders 4 ProductCard components when "All products" is clicked', () => {
      
      cy.get('button').contains("All products").should('exist');
  
      
      cy.get('button').contains("All products").click();
  
      
      cy.get('[data-testid="product-card"]').should('have.length', 20);
    });
  });
  