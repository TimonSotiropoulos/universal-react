// *****************************************************************************
// WEBPACK CONFIGURATION
// *****************************************************************************

// Setup the React Hot Loader if we are working in the development environment
if (process.env.NODE_ENV === 'development') {
    var loaders = ['react-hot', 'babel'];
} else {
    var loaders = ['babel'];
}

module.exports = {
    devtool: 'eval',
    entry: './src/main.js',
    output: {
        path: __dirname + './public/jsx',
        filename: 'bundle.js',
        publicPath: '/jsx/'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            loaders: loaders,
            exclude: /node_modules/
        }]
    }
};
