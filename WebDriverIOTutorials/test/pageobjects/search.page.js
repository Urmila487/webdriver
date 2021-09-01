import Pages from "./pages";

class Searchpage extends Pages{
    // const searchInput = $('#gh-ac')
    // const searchBtn = $('#gh-btn')

    open(){
        super.open('/')
    }

    get searchInput(){
        return $('#gh-ac')
    }

    get searchBtn(){
        return $('#gh-btn')
    }


    get category() {
        return $('#gh-cat option:nth-child(1)')
    }
}

export default new Searchpage()