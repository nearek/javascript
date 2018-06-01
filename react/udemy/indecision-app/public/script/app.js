'use strict';

console.log('App.js is running!');

var app = {
    title: 'Indecision App',
    subtitle: 'Put your life in hands',
    options: ['One', 'Two']

};
var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        app.title
    ),
    app.subtitle && React.createElement(
        'p',
        null,
        app.subtitle
    ),
    React.createElement(
        'p',
        null,
        app.options.length > 0 ? 'Here are your options' : 'No options'
    ),
    React.createElement(
        'ol',
        null,
        React.createElement(
            'li',
            null,
            'item one'
        ),
        React.createElement(
            'li',
            null,
            'item two'
        )
    )
);
var user = {
    name: 'Filip',
    age: '28',
    location: 'Łódź'
};

function getLocation(location) {
    if (location) {
        return React.createElement(
            'p',
            null,
            'Location: ',
            location
        );
    }
}
var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        user.name ? user.name : 'Anonymous'
    ),
    user.age && user.age >= 18 && React.createElement(
        'p',
        null,
        'Wiek: ',
        user.age
    ),
    getLocation(user.location)
);
//babel src/app.js --out-file=public/script/app.js --presets=env,react --watch
//live-server public
var appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot);
