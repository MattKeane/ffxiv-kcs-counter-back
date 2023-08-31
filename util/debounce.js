const { DEBOUNCE_TIME } = process.env;

// This debounce function is necessary for updating mob tallies via socket to prevent undesired behavior in the front end
// DEBOUNCE_TIME is defined in environment variables to prevent the need to update code to adjust the time

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