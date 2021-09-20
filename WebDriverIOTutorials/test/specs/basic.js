describe('webdriver.io page', () => {
    it('should have the right title', () => {
        browser.url('https://qa.roomex.com/login')
        expect(browser).toHaveTitle("Roomex is a Global Hotel Booking Platform for Business Travel")
    })
})
