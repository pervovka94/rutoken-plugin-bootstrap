import rutoken from 'rutoken';
import BrowserCompatibility from './browserCompatibility';
import bindMethods from './bindMethods';
import bindAlgorithms from './bindAlgorithms';


import { NoInstalledPluginError } from './supportError';

class Plugin {
    init() {
        const browserCompatibility = new BrowserCompatibility();

        return rutoken.ready
            .then(() => browserCompatibility.isCurrentBrowserSupported())
            .then(() => browserCompatibility.needToCheckInstalledExtension())
            .then((result) => (result ? rutoken.isExtensionInstalled() : true))
            .then((result) => {
                if (result) {
                    return rutoken.isPluginInstalled();
                }
                throw new NoInstalledPluginError(browserCompatibility.browser, browserCompatibility.os);
            })
            .then((result) => {
                if (result) {
                    return rutoken.loadPlugin();
                }

                throw new NoInstalledPluginError(browserCompatibility.browser, browserCompatibility.os, false);
            })
            .then((pluginObject) => {
                browserCompatibility.getSupportedBrowsersByPluginVersion(pluginObject.version);

                bindMethods.bind(this)(pluginObject);
                bindAlgorithms.bind(this)(pluginObject);

                return Promise.resolve(this);
            })
            .catch((err) => {
                console.warn(err);
                throw err;
            });
    }
}

export default new Plugin();
