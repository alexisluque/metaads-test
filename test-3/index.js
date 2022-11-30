class PaginationHelper {
    constructor(collection, itemsPerPage) {
        this.collection = collection;
        this.itemsPerPage = itemsPerPage;
        // The constructor takes in an array of items and a integer indicating how many
        // items fit within a single page
    }
    itemCount(
    ) {
        // returns the number of items within the entire collection
        return this.collection.lenght;
    }
    pageCount() {
        // returns the number of pages
        return this.collection.lenght % this.itemsPerPage;
    }
    pageItemCount(pageIndex) {
        // returns the number of items on the current page. page_index is zero based.
        // this method should return -1 for pageIndex values that are out of range
        if (pageIndex >= this.pageCount()) {
            return -1;
        }
        this.collection.slice(pageIndex, pageIndex + 4).length;
    }
    pageIndex(itemIndex) {
        // determines what page an item is on. Zero based indexes
        // this method should return -1 for itemIndex values that are out of range
        if (itemIndex >= this.itemCount()) {
            return -1;
        }
        let iterPage = 0;
        for (let i=0; i ++; i < this.pageCount()) {
            iterPage += 1
        }
    }
}
module.exports = PaginationHelper;
