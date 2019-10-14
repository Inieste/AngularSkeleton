import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { LoginModule } from './login.module';
import { hmrBootstrap } from '../HotModuleReplacement';

if (process.env.ENV == "production") {
    enableProdMode();
}

const bootstrap = () => platformBrowserDynamic().bootstrapModule(LoginModule);

if (process.env.HMR) {
    hmrBootstrap(module, bootstrap);
}
else {
    bootstrap().catch(err => console.log(err));
}