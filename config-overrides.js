const { override } = require("customize-cra");

const addWebpackFallbacks = () => (config) => {
    config.resolve.fallback = {
        ...config.resolve.fallback,
        crypto: require.resolve("crypto-browserify"),
        stream: require.resolve("stream-browserify"),
        net: false, // Not available in browser
        child_process: false, // Required for MongoDB but unavailable in browser
        fs: false, // Required for MongoDB but unavailable in browser
        "fs/promises": false, // Required for MongoDB but unavailable in browser
        tls: false, // Not available in browser
        dns: false, // Not available in browser
        timers: require.resolve("timers-browserify"),
        "timers/promises": false, // Node.js module not needed in the browser
    };
    return config;
};

module.exports = override(addWebpackFallbacks());
