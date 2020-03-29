const generateUniqueId = require('../../src/utils/generateUniqueId');

// describe('Teste - Soma', () => {
//   it('Validar a soma de 2+2 = 4', () => {
//     expect(2 + 2).toBe(4);
//   });
// });

describe('Generate Unique ID', () => {
  it('should generate an unique ID', () => {
   const id = generateUniqueId();

   expect(id).toHaveLength(8);
  });
});
