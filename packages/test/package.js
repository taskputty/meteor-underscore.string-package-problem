Package.describe({
    summary: "TaskPutty data tools"
});

Package.on_use(function (api, where) {

    api.use([

        'underscorestring:underscore.string'

    ], 'server');

    api.add_files([

        'test.js'

    ], ['client','server']);

    api.export("blah");


});