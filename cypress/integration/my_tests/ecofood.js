describe('Тестирование поиска товара на Avito', function () {
    it('Дохожу до описания товара на авито', function () {
        cy.visit('https://ecofood.life/');
        cy.get('.input-group > .form-control').type('вишня натуральная').type('{enter}');
        cy.get('.title').click();
        cy.get('.col-xxl-3 > :nth-child(2) > .btn').click();
        cy.get('.col-xxl-3 > :nth-child(1) > a').click();
        cy.contains('Оформить заказ и оплатить')      
       
    })
})



