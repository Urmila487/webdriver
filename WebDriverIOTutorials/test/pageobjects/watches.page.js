import Pages from "./pages";

class WatchPage extends Pages {

    open() {
        super.open('https://www.ebay.com/e/row/wristwatches-from-europe-and-israel')
        //super.open('https://www.ebay.com/b/Watches-Parts-Accessories/260324/bn_2408535')
    }


    get promobanner() {
        //return $('.title-banner__right-image')  //find Element
        return $$('.title-banner__right-image')[0]  //find Elements , Here we get array so pass index
    }


    get bannerTitle() {
        return $('.title-banner__title')
    }


    get shopBtn() {
        return $('.hl-cta__default hl-cta__default-js hl-banner__cta ebayui-ellipsis')
    }

    opensuper() {
        super.opensuper('/')
    }

    // get watchCategoryList() {
    //     //return $$('section[id="s0-16-13_2-0-1[0]-0-0"] ul li')
    //     return $$('.srp-refine__category__item ul li')
    // }

    get watchesCategoryList() {
        return $$('section[id="s0-16-13_2-0-1[0]-0-0"] ul li'); // 6 elements     
    }

    getWatchCategoryListText() {
        const watchesList = [];
        this.watchesCategoryList.map((element) =>
            watchesList.push(element.getText())
        );
        return watchesList;
    }

    get fashionLink(){
        return $$('.hl-cat-nav__js-tab a[href*="Fashion"]')[0];
    }

    get watchesLink(){
        return $('.hl-cat-nav__sub-cat-col a[href*="Wristwatches"]')
    }

}

export default new WatchPage();