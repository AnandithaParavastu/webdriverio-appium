const { config } = require('./wdio.shared.conf.js');

config.user = process.env.BROWSERSTACK_USER;
config.key = process.env.BROWSERSTACK_KEY;
config.specs = [
 '../test/specs/android/edit-note-screen.spec.js'
 //'../test/specs/hooks.spec.js'
];

config.capabilities = [
    {
    platformName: 'android',
    'appium:platformVersion': '9.0',
    'appium:deviceName': 'Google Pixel 3',
    'appium:automationName': 'UIAutomator2',
    'appium:app': 'bs://aa4f99d69f7b9e24750e609d8f6ca4f068249c25', //colornote.apk file
    'appium:autoGrantPermissions' : true
}];

config.services = ['browserstack'];
exports.config = config;
