import { expect as chaiExpect } from 'chai'
import WatchPage from '../pageobjects/watches.page'
import resources from '../resources';
import { waitAndClick } from '../utilities/helper';

describe('Watches page', () => {

    before(() => {
        WatchPage.open()
        console.log(WatchPage.getWatchCategoryListText())
        WatchPage.fashionLink.moveTo();
        //browser.pause(1000); // Implicit wait
        waitAndClick(WatchPage.watchesLink,1000)
        // WatchPage.watchesLink.waitForDisplayed({timeout:1000}); //Explicit Wait
        // WatchPage.watchesLink.click();
    });

    xit('should verify the watch category list', () => {
        const watchCategoryList = WatchPage.getWatchCategoryListText()
        chaiExpect(watchCategoryList).to.deep.equal(resources.watchesCategoryList)
    });

    // after(() => {
    //     browser.url('https://ebay.com')
    // });

    // afterEach(() => {
    //     browser.refresh();
    // });

    it('should show the banner conatiner', () => {
        expect(WatchPage.promobanner).toBeDisplayed()
    });

    it('should show the banner title', () => {
        expect(WatchPage.bannerTitle).toBeDisplayed()
        expect(WatchPage.bannerTitle).toHaveTextContaining('From Europe and Israel to You') 
    });

    it('should conatin link on banner button and verify its clickable', () => {
        WatchPage.opensuper()
        expect(WatchPage.shopBtn).toHaveLinkContaining('/Watch/') 
        expect(WatchPage.shopBtn).toBeClickable()

        // shopBtn.click()
        // const url = browser.getUrl()

        // chaiExpect(url).to.include('/ebay/')
        // expect(browser).toHaveUrl('https://www.ebay.com/e/row/wristwatches-from-europe-and-israel')
    });

})