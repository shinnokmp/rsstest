/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */

    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        let props;
        for(var i = 0; i<allFeeds.length; i++){
            props = allFeeds[i];
        }
        
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        
        it('loops through allFeeds object and has a URL defined', function(){
            expect(props.url).toBeDefined();
            expect(props.url.length).not.toBe(0);
        });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        it('loops through each feed and has a name defined', function(){
            expect(props.name).toBeDefined();
            expect(props.name.length).not.toBe(0);
        })
    });


    /* TODO: Write a new test suite named "The menu" */
    describe('The menu', function(){
        $body = $('body')
        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */
        it('is hidden by default', function(){
            expect($body.hasClass('menu-hidden')).toBe(true);
        });
         /* TODO: Write a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
        it('changes visibility on click',function(){
            $('.menu-icon-link').trigger('click');
            expect($body.hasClass('menu-hidden')).not.toBe(true);

            $('.menu-icon-link').trigger('click');
            expect($body.hasClass('menu-hidden')).toBe(true);
        });
    });


    /* TODO: Write a new test suite named "Initial Entries" */
describe('Initial Entries', function(){
    /* TODO: Write a test that ensures when a new feed is loaded
    * by the loadFeed function that the content actually changes.
    * Remember, loadFeed() is asynchronous.
    */
            beforeEach(function(done){
            loadFeed(0, function(){
                done();
            });
        });
        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
        it('has an entry element after loading', function (done) {
                var entry = $('.feed .entry')[0];
                expect(entry).toBeGreaterThan('');
                done();
        });
    });


    /* TODO: Write a new test suite named "New Feed Selection" */
describe('New Feed Selection', function(){
        let entries_before,
            entries_after;
        beforeEach(function (done) {
            $('.feed').empty();

            /* First we call the feed and save the titles in the 'entries_before' variable,
             * which we will use to compare later with the second loaded feed.
             * We use 'beforeEach' to load this one before starting any comparison.
             * We put done() because it's asyncrhonous, without it the entries_before
             * assignment wouldn't wait to loadFeed to finish.
             */
            loadFeed(0, function () {
                entries_before = $('.feed').find("h2").text();
                console.log("entries before: " + entries_before);
                done();
            });
        });

        it('changes the content when new feed is loaded', function (done) {
            /* Here we load the feed again. This time we save the titles in the
             * 'entries_after' variable, and then we will compare them with 'entries_before'.
             * Since this is the same feed, it is asyncrhonous and we need to use done(),
             * to ensure that the feed has loaded enterily before comparing variables.
             */
            loadFeed(1, function () {
                entries_after = $('.feed').find("h2").text();
                console.log("entries after: " + entries_after);
                expect(entries_before).not.toEqual(entries_after);
                done();
            });
        });        
    });
}());