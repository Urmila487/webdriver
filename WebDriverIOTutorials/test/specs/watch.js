import WatchPage from '../pageobjects/watches.page'

xdescribe('Watches page',() => {

    before(() => {
        WatchPage.open()
        
    });

    it('should show the title', () => {
        expect(browser).toHaveTitle('Watches, Parts & Accessories for Sale - New & Used Watches - eBay')
        console.log(WatchPage.getWatchCategoryListText())
    });

})