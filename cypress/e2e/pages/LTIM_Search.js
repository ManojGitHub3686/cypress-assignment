export class searchForNordea{

    searchIcon = '#search-content > img';
    searchTextBox = '#search-text';
    searchBtn = '#search-button';

    searchRes = '.ajax_search_content > .ajax_search_title > a';

    targetLink = '#search-result > div:nth-child(3) > div > div > a';
    validationText = ':nth-child(12) > strong';

    searchText(){
        cy.get(this.searchIcon).click({force: true});
        cy.get(this.searchTextBox).type('Nordea');
        cy.get(this.searchBtn).click();
    }

    validateSearchResult(){
        cy.get(this.searchRes, {timeout: 22000})
        .should('have.length', 2);
    }

    validateNewBrowserTabText(){
        //Handling new Browser Tab
        cy.get(this.targetLink)
        .invoke('removeAttr', 'target').click();
        cy.url()
        .should('include', '/news-event/lti-posts-robust-3-8-qoq-revenue-growth-in-constant-currency-net-profit-jumps-6-6-qoq/');
        cy.get(this.validationText)
        .should('have.text', 'Mikael Spliid, Head of WMO IT Solutions, Nordea');
    }
}