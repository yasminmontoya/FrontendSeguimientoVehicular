phonon.options({
    navigator: {
        defaultPage: 'home',
        animatePages: true,
        enableBrowserBackButton: true,
        templateRootDirectory: './tpl'
    },
    i18n: null // for this example, we do not use internationalization
});


var app = phonon.navigator();

/**
 * The activity scope is not mandatory.
 * For the home page, we do not need to perform actions during
 * page events such as onCreate, onReady, etc
*/
app.on({page: 'home', preventClose: false, content: null});

/**
 * However, on the second page, we want to define the activity scope.
 * [1] On the create callback, we add tap events on buttons. The OnCreate callback is called once.
 * [2] If the user does not tap on buttons, we cancel the page transition. preventClose => true
 * [3] The OnReady callback is called every time the user comes on this page,
 * here we did not implement it, but if you do, you can use readyDelay to add a small delay
 * between the OnCreate and the OnReady callbacks
*/
app.on({page: 'pagetwo', preventClose: true, content: 'pagetwo.html', readyDelay: 1}, function(activity) {

 activity.onClose(function(self) {
            self.close();     
   });
});

app.on({page: 'pagetree', preventClose: true, content: 'pagetree.html', readyDelay: 1}, function(activity) {


  activity.onClose(function(self) {
            self.close();     
   });
 
});

app.on({page: 'pagefour', preventClose: true, content: 'pagefour.html', readyDelay: 1}, function(activity) {


  activity.onClose(function(self) {
            self.close();     
   });
 
});

app.on({page: 'pagefive', preventClose: true, content: 'pagefive.html', readyDelay: 1}, function(activity) {


  activity.onClose(function(self) {
            self.close();     
   });
 
});

app.on({page: 'pagesix', preventClose: true, content: 'pagesix.html', readyDelay: 1}, function(activity) {


  activity.onClose(function(self) {
            self.close();     
   });
 
});

app.on({page: 'pageseven', preventClose: true, content: 'pageseven.html', readyDelay: 1}, function(activity) {


  activity.onClose(function(self) {
            self.close();     
   });
 
});

app.on({page: 'pageeight', preventClose: true, content: 'pageeight.html', readyDelay: 1}, function(activity) {


  activity.onClose(function(self) {
            self.close();     
   });
 
});

app.on({page: 'pagenine', preventClose: true, content: 'pagenine.html', readyDelay: 1}, function(activity) {


  activity.onClose(function(self) {
            self.close();     
   });
 
});


// Let's go!
app.start();
