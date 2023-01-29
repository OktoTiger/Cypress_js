describe('Тестирование отображения в результатах поиска статьи с Википедия', function () {
    it('В результатах поиска по "комета" есть Википедия', function () {
         cy.visit('https://www.google.com/');
         cy.get('input.gLFyf').type('комета').type('{enter}');
         cy.contains('Википедия');
     })
 })