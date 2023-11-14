const { config } = require('./wdio.shared.conf.js');
//config.port = 4723;
config.specs = [
 '../test/specs/android/edit-note-screen.spec.js'
 //'../test/specs/hooks.spec.js'
];

config.capabilities = [
    {
    'appium:platformName': 'Android',
    'appium:platformVersion': '11.0',
    'appium:deviceName': 'Pixel 3',
    'appium:automationName': 'UIAutomator2',
    //'appium:app' : path.join(process.cwd(), '.\android\ApiDemos-debug.apk')
    'appium:app': 'C:\\Users\\rajee\\Appium\\webdriver-appium-v8\\app\\android\\ColorNote+Notepad.apk',
    'appium:autoGrantPermissions' : true
}];
config.services=[['appium', {
    args: {
        address: 'localhost',
        port: 4723,
        relaxedSecurity: true
    },
    logPath: './'

}]];



exports.config = config;

//service
