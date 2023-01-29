describe('Тестирование поиска товара на Avito', function () {
    it('Дохожу описания товара на авито', function () {
        cy.visit('https://www.avito.ru/'); 
        cy.get('.suggest-input-X6pqt > .input-input-Zpzc1').type('айфон 11').type('{enter}');
        cy.get('#i2758383045 > .iva-item-content-rejJg > .iva-item-body-KLUuy > .iva-item-titleStep-pdebR > .link-link-MbQDP > .title-root-zZCwT').click();
        // cy.get('[data-product="a00c81f8-f383-11ec-8fdb-00155d8ed20b"] > .catalog-product__name > span').click();
        // cy.get('[href="/catalog/noutbuki/"] > .app-catalog-xi606m > .e1ys5m360').click();
        // cy.get(':nth-child(2) > .e1lqnfu30 > .app-catalog-sjv9i2 > .app-catalog-632im3 > .app-catalog-oacxam > .app-catalog-9gnskf').click();
        // cy.get('.ProductPageCTAButtonsSection__buttons-row > .ProductPageCTAButtonsSection__add-to-cart > .Button__text').click();
        // cy.get('.e19vbdep0 > .css-hyxlzm > .css-1977rpo').type('айфон 11').type('{enter}');
        // cy.wait(2000);
        // cy.get('.br').click();
        // cy.get('.ir').click();
        // cy.get('.ir').type('айфон 11').type('{enter}');
        // cy.get(':nth-child(3) > .JtaXUu3SGy > ._0KF3jFdM4z > .qVbZUamUpX > .-pAI5Wad17 > .mULXsABUsY').click();
        // cy.wait(2000);
        // cy.get('.W-ScYsr\+tQ > .Z5Oje9xEmt > .mULXsABUsY > span').click();
        // cy.contains('Ноутбук Apple');
        // cy.get('#c44949514 .product-card__main.j-card-link').trigger('mouseover');
        // cy.get('#c44949514 .btn-main-sm.j-add-to-basket').click();
        // cy.wait(2000);
        // cy.get('[data-wba-header-name="Cart"]').click();
        // cy.contains('Заказать')
    })
})
