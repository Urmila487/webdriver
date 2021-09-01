import SearchPage from '../pageobjects/search.page'
import resources from '../resources'
import { waitForTextChange } from '../utilities/helper'
import allureReporter from '@wdio/allure-reporter'


describe('Ebay Product Search', () => {
    it('Should open the main URL and Verify the title', () => {
        SearchPage.open()
        expect(browser).toHaveTitle(resources.homeTitle)
    })

    it('Should search for the product and Verify text value', () => {
        allureReporter.addSeverity('Critical')
        SearchPage.searchInput.addValue('Laptop');
        SearchPage.searchBtn.click();
        expect(SearchPage.searchInput).toHaveValue('Laptop')
    })

    it('Should redirect to a new page and verify the title', () => {
        expect(browser).toHaveTitle(resources.laptopTitle)
    })

    it('should update the search category', () => {

        allureReporter.addFeature('Search Category')

        waitForTextChange(SearchPage.category,'PC Laptops & Netbooks',3000)

        expect(SearchPage.category).toHaveText('PC Laptops & Netbooks')
    })
})