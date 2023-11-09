describe('hooks tutorisl', () => {

    before(async () => {
        console.log('I am in before hook');
    });

    beforeEach(async () => {
        console.log('I am in before each hook');
    });

    afterEach(async () => {
        console.log('I am in after each hook');
    });

    after(async () => {
        console.log('I am in after hook');
    });

    it('test1l', async () => {
        console.log('test1 step');
        
    });

    it('test12', async () => {
        console.log('test2 step');
        
    });


})