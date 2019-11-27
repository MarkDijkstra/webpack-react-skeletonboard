import _ from 'lodash';

function component() {
    const element = document.createElement('div');

    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = _.join(['Hello', 'webpack 3'], ' ');

    return element;
}

document.body.appendChild(component());

if (process.env.NODE_ENV !== 'production') {
  console.log('Looks like we are in development mode!');
}
if (process.env.NODE_ENV === 'production') {
    console.log('Looks like we are in production mode!');
}

console.log('running index...123456789');
