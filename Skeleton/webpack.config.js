module.exports = (env) => {
    switch (env) {
        case 'prod':
        case 'production':
        case 'PRO':
            return require('./config/webpack.PRO.js');
            break;
        default:
            return require('./config/webpack.DEV.js');
            break;
    }
}