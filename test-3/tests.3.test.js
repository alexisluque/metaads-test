const PaginationHelper = require('./index');

describe('PaginationHelper', () => {
    const { strictEqual } = require('chai').assert;

    function doTest(instance, methodName, expected, ...args) {
        const actual = instance[methodName](...args);
        strictEqual(actual, expected, `for ${methodName}(${args.join(', ')})`);
    }

    it('sample test : 24 items with 10 per page', () => {
        const collection = [
            1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
            20, 21, 22, 23, 24,
        ];
        const helper = new PaginationHelper(collection, 10);

        doTest(helper, 'pageCount', 3);
        doTest(helper, 'itemCount', 24);

        doTest(helper, 'pageItemCount', 10, 1);
        doTest(helper, 'pageItemCount', 4, 2);
        doTest(helper, 'pageItemCount', -1, 3);
        doTest(helper, 'pageIndex', -1, 40);

        doTest(helper, 'pageIndex', 2, 22);
        doTest(helper, 'pageIndex', 0, 3);
        doTest(helper, 'pageIndex', 0, 0);
        doTest(helper, 'pageIndex', -1, -1);
        doTest(helper, 'pageIndex', -1, -23);
        doTest(helper, 'pageIndex', -1, -15);
    });

    it('empty collection', () => {
        const empty = new PaginationHelper([], 10);

        doTest(empty, 'pageCount', 0);
        doTest(empty, 'itemCount', 0);
        doTest(empty, 'pageIndex', -1, 0);
        doTest(empty, 'pageItemCount', -1, 0);
    });

    function randInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    describe('random tests', () => {
        for (let i = 0; i < 100; i++) {
            const itemCount = randInt(0, 100);
            const itemsPerPage = randInt(1, itemCount * 2);
            const pagesCount = Math.ceil(itemCount / itemsPerPage);

            const helper = new PaginationHelper(Array(itemCount), itemsPerPage);

            it(`for itemCount = ${itemCount} itemsPerPage = ${itemsPerPage}`, function () {
                doTest(helper, 'pageCount', pagesCount);
                doTest(helper, 'itemCount', itemCount);

                for (let i = 0; i < 5; i++) {
                    const pageIndex = randInt(-2, pagesCount + 3);

                    let pageItemCount;
                    if (pageIndex < 0 || pageIndex >= pagesCount)
                        pageItemCount = -1;
                    else if (pageIndex === pagesCount - 1)
                        // last page
                        pageItemCount =
                            itemCount % itemsPerPage || itemsPerPage;
                    else pageItemCount = itemsPerPage;

                    doTest(helper, 'pageItemCount', pageItemCount, pageIndex);
                }

                for (let i = 0; i < 5; i++) {
                    const itemIndex = randInt(-2, itemCount + 5);
                    const pageIndex =
                        itemIndex < 0 || itemIndex >= itemCount
                            ? -1
                            : Math.floor(itemIndex / itemsPerPage);

                    doTest(helper, 'pageIndex', pageIndex, itemIndex);
                }
            });
        }
    });
});
