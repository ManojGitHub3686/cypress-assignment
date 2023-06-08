export class HomePage{

    ltimUrl = 'https://www.ltimindtree.com';
    acceptCookiesBtn = '#onetrust-accept-btn-handler';
    industriesMenuOpt = '#avia-menu > #menu-item-28490 > [title="Industries"] > .avia-menu-text';
    lifeSciencesOpt = '[style="display: block; opacity: 1; visibility: visible;"] > #menu-item-28519 > a';

    homePage(){
        cy.visit(this.ltimUrl);
    }
    acceptCookies(){
        cy.get(this.acceptCookiesBtn, {timeout:5000}).click();
    }
    menuIndustries(){
        cy.get(this.industriesMenuOpt)
        .invoke('show').click();
    }
    selectOptionLifeSciences(){
        cy.get(this.lifeSciencesOpt)
        .trigger('mouseover').click({force: true});
    }
}