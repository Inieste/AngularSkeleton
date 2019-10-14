import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { RoutesModule } from './routes.module';
import { hmrBootstrap } from '../HotModuleReplacement';

if (process.env.ENV == "production") {
    enableProdMode();
}

const bootstrap = () => platformBrowserDynamic().bootstrapModule(RoutesModule);

if (process.env.HMR) {
    hmrBootstrap(module, bootstrap);
}
else {
    bootstrap().catch(err => console.log(err));
}