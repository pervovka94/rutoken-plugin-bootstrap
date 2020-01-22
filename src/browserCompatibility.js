import Bowser from 'bowser';
import {
    NoSupportOsError,
    NoSupportPlatformError,
    NoSupportBrowserError,
    NoSupportBrowserVersionError,
    NoSupportPluginVersionError,

} from './supportError';

import supportedBrowsersConfig from './supportedBrowsersConfig';


class BrowserCompatibility {
    constructor() {
        const detectedBrowser = Bowser.getParser(window.navigator.userAgent);

        if (window.navigator.userAgent.includes('SputnikBrowser')) {
            detectedBrowser.parsedResult.browser = {
                name: 'SputnikBrowser',
                version: window.navigator.userAgent.split('SputnikBrowser/')[1].split(' ')[0],
            };
        }

        this.detectedBrowser = detectedBrowser;

        this.browser = detectedBrowser.getBrowser();
        this.os = detectedBrowser.getOS();
        this.platform = detectedBrowser.getPlatform();
    }

    getBrs() {
        const os = supportedBrowsersConfig[this.platform.type];

        if (!os) throw new NoSupportPlatformError();

        const browsers = os[this.os.name];

        if (!browsers) throw new NoSupportOsError(Object.keys(os));

        const brs = browsers[this.browser.name];

        if (!brs) throw new NoSupportBrowserError(this.browser.name, Object.keys(browsers));

        this.brs = brs;
    }

    needToCheckInstalledExtension() {
        return this.brs.extensionCheck;
    }

    isCurrentBrowserSupported() {
        this.getBrs();
    }

    getSupportedBrowsersByPluginVersion(version) {
        const { versions } = this.brs;

        for (let index = 0; index < versions.length; index += 1) {
            const x = versions[index];

            if (version >= x.pluginVersion) {
                const brs = { [this.browser.name]: x.browserSupportedVersions };

                const isValid = this.detectedBrowser.satisfies(brs);

                if (isValid) return;

                const os = supportedBrowsersConfig[this.platform.type];

                const browsers = os[this.os.name];

                throw new NoSupportBrowserVersionError(this.browser, Object.keys(browsers));
            }
        }

        throw new NoSupportPluginVersionError(this.os.name);
    }
}

export default BrowserCompatibility;
