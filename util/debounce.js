const { DEBOUNCE_TIME } = process.env;

function debounce(func) {
    const pending = {};
    const debounced = (...args) => {
        const argKey = args.join('');
        if (pending[argKey]) {
            clearTimeout(pending[argKey]);
        };
        pending[argKey] = setTimeout(() => {
            delete pending[argKey];
            func(...args);
        }, DEBOUNCE_TIME);
    };
    return debounced;
};

module.exports = debounce;