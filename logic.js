use(function() {
    return {
        navRoot: pageManager.getPage('/content/we-retail/us/en'),
        name: "Hello World",
        bool: true,
        arrayExample: [1, 2, 3, 4],
        isPresenterBoring: true,
        currentDate: 19,
        day: 'Friday',
        htmlExample: '<h2>HTML Context</h2>',
        invalidUrl: 'https://www.google.com/{}',
        number: '10',
        devs: [
            { name: "Test", competency: "AMC", profileLink: "http://google.com" },
            { name: "Test1", competency: "AMC", profileLink: "http://google.com" },
            { name: "Test2", competency: "MEAN", profileLink: "http://google.com" },
            { name: "Test3", competency: "FEEN", profileLink: "http://google.com/{}" },
        ]
    };
});