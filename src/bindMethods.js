import getErrorCodes from './errorCodes';
import PluginError from './pluginError';

/* eslint-disable prefer-rest-params */
function bindMethods(plugin) {
    const errorCodes = getErrorCodes(plugin.errorCodes);

    Object.keys(plugin).forEach((key) => {
        if (plugin[key].prototype !== undefined) {
            /* eslint func-names: ["error", "never"] */
            this[key] = function () {
                return Promise.resolve().then(() => plugin[key].apply(this, arguments))
                    .catch((err) => {
                        throw new PluginError(err, key, errorCodes);
                    });
            };
        } else {
            this[key] = plugin[key];
        }
    });
}

export default bindMethods;
