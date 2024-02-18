var host = process.env.HOST || '0.0.0.0';
var port = process.env.PORT || 8080;

import * as cors_proxy from 'cors-anywhere';

cors_proxy.createServer({
    originWhitelist: [], 
    requireHeader: [],
    removeHeaders: ['cookie']
}).listen(port, host, function() {
    console.log('Running CORS Anywhere on ' + host + ':' + port);
});
