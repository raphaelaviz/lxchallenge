
describe('Checks if ProductGrid component displays the products in the right order when each of the sort buttons are clicked', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000');
    });
 // HIGHEST PRICES 
    it('sorts ProductCard components by highest price when "Sort by" -> "Highest Price" is selected', () => {
    
      cy.get('button').contains('Sort by').click();

      cy.get('div').contains('Highest Price').within(() => {
        cy.get('input[type="radio"]').click();
      });

      let prices = [];
      cy.get('[data-testid="product-card"]').each(($card) => {
        cy.wrap($card).find('.mt-2.text-green-500').then(($price) => {
          prices.push(parseFloat($price.text().replace('$', '')));
        });
      }).then(() => {
        for (let i = 0; i < prices.length - 1; i++) {
          expect(prices[i]).to.be.at.least(prices[i + 1]);
        }
      });
    });
// LOWEST PRICES
    it('sorts ProductCard components by lowest price when "Sort by" -> "Lowest Price" is selected', () => {
    
        cy.get('button').contains('Sort by').click();
      
        cy.get('div').contains('Lowest Price').within(() => {
          cy.get('input[type="radio"]').click();
        });
      
        let prices = [];
        cy.get('[data-testid="product-card"]').each(($card) => {
          cy.wrap($card).find('.mt-2.text-green-500').then(($price) => {
            prices.push(parseFloat($price.text().replace('$', '')));
          });
        }).then(() => {
          for (let i = 0; i < prices.length - 1; i++) {
            expect(prices[i]).to.be.at.most(prices[i + 1]);
          }
        });
      });
// BEST RATING
    it('sorts ProductCard components by best rating when "Sort by" -> "Best rating" is selected', () => {
    
        cy.get('button').contains('Sort by').click();
      
        cy.get('div').contains('Best rating').within(() => {
          cy.get('input[type="radio"]').click();
        });
      
        let ratings = [];
        cy.get('[data-testid="product-card"]').each(($card) => {
          cy.wrap($card).find('.mt-1.text-sm.text-gray-500').then(($rating) => {
            const ratingText = $rating.text();
            const ratingNumber = parseFloat(ratingText.slice(ratingText.indexOf(':') + 2, ratingText.indexOf('(')));
            ratings.push(ratingNumber);
          });
        }).then(() => {
          for (let i = 0; i < ratings.length - 1; i++) {
            expect(ratings[i]).to.be.at.least(ratings[i + 1]);
          }
        });
      });   
  });
  