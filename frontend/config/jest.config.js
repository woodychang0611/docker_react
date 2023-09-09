// config/jest.config.js

module.exports = {
    presets:'babel-jest',
    roots:[
        "../src"
    ],
    testMatch: [
        '**/*.test.js'
    ],
    transform: {
        '^.+\\.jsx?$': 'babel-jest',
    },
};
