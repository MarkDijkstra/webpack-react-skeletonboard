const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: {
        "bundle.js": [
            path.resolve(__dirname, './src/index.js'),
            path.resolve(__dirname, './src/core.js')
        ]
    },
    output: {
        filename: 'assets/js/[name]',
        path: path.resolve(__dirname, 'dist'),
    },
    plugins: []
        new CleanWebpackPlugin()
    ]
};§