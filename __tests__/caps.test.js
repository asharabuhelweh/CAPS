'use strict';
require('jest');
const { expect } = require('@jest/globals');
const{pickupHandler,transitHandler,deliveredHandler}=require('../caps.js');


let orderTest={
  store: 'SWEETS',
  orderID: '1ecdf758-a254-4e12-99bb-5b4e5afb3ab6',
  customer: 'Tricia Schinner',
  address: 'Simi Valley,side'
}
describe('caps', () => {
    let consoleSpy;
   

    beforeAll(() => {
      consoleSpy=jest.spyOn(console,'log').mockImplementation();
    });
    
    afterAll(() => {
        consoleSpy.mockRestore();
    });
    
    
    it('should Test pickedHandler', async () => {
      await pickupHandler(orderTest);
       expect(consoleSpy).toHaveBeenCalled();
    });
    it('should Test transitHandler',async () => {
      await transitHandler(orderTest);
         expect(consoleSpy).toHaveBeenCalled();
    });
    it('should Test deliveredHandler', async() => {
      await deliveredHandler(orderTest);
        expect(consoleSpy).toHaveBeenCalled();
    });
    

  });
