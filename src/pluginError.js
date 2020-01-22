class PluginError {
    constructor(err, method, errorCodes) {
        /* eslint-disable  no-restricted-globals */
        if (err.message && !isNaN(Number(err.message))) {
            const code = Number(err.message);
            this.description = errorCodes[code];
            this.code = code;
        } else {
            this.description = 'Произошла ошибка';
            this.code = null;
        }

        this.method = method;
    }
}

export default PluginError;
