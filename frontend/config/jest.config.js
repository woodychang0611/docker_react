// config/jest.config.js

module.exports = {
    preset:'babel-jest',
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
