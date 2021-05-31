
'use strict';
const events =require('../events.js');
describe('testing event handlers', ()=> {
  let consoleSpy;
  let orderTest={
      store: 'SWEETS',
      orderID: '1ecdf758-a254-4e12-99bb-5b4e5afb3ab6',
      customer: 'Tricia Schinner',
      address: 'Simi Valley,side'
    }
  beforeEach(()=> {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });
    
  afterEach(()=> {
    consoleSpy.mockRestore();
  });

  it('should Test pickedHandler', async ()=> {
    events.emit('pickup',orderTest);
    await consoleSpy();
    expect(consoleSpy).toHaveBeenCalled();
  });

  it('should Test transitHandler', async ()=> {
    events.emit('in-transit',orderTest);
    await consoleSpy();
    expect(consoleSpy).toHaveBeenCalled();
  });

  it('should Test deliveredHandler', async ()=> {
    events.emit('delivered',orderTest);
    await consoleSpy();
    expect(consoleSpy).toHaveBeenCalled();
  });
    
});
