import { HomePage } from "./pages/LTIM_HomePage";
import { searchForNordea } from "./pages/LTIM_Search";

describe('Assignment2', () => {

    const home_page = new HomePage();
    const search_text = new searchForNordea();

    it('Search and Validate text', () => {

    home_page.homePage();
    home_page.acceptCookies();


    // cy.get('#search-content > img').click({force: true});
    // cy.get('#search-text').type('Nordea');
    // cy.get('#search-button').click();
    search_text.searchText();


    // cy.get('.ajax_search_content > .ajax_search_title > a', {timeout: 20000})
    // .should('have.length', 2);
    search_text.validateSearchResult();

    //cy.get(':nth-child(3) > .ajax_search_content > .ajax_search_title > a').click();
    
                // cy.window().then((win) => {   // for prompt-type alert

                //     cy.stub(win, 'open', url => {
                //         win.location.href = 'https://www.ltimindtree.com/news-event/lti-posts-robust-3-8-qoq-revenue-growth-in-constant-currency-net-profit-jumps-6-6-qoq/';
                //     }).as("popup")

                //     cy.get(':nth-child(3) > .ajax_search_content > .ajax_search_title > a').click();
                
                //     cy.get(':nth-child(12) > strong').should('contain','Mikael Spliid, Head of WMO IT Solutions, Nordea')
                
                //  })

    // //Handling new Browser Tab
    // cy.get('#search-result > div:nth-child(3) > div > div > a')
    // .invoke('removeAttr', 'target').click();
    // cy.url()
    // .should('include', '/news-event/lti-posts-robust-3-8-qoq-revenue-growth-in-constant-currency-net-profit-jumps-6-6-qoq/');
    // cy.get(':nth-child(12) > strong')
    // .should('have.text', 'Mikael Spliid, Head of WMO IT Solutions, Nordea');
        search_text.validateNewBrowserTabText();
    });
});