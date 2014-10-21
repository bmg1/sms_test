cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/info.asankan.phonegap.smsplugin/www/smsplugin.js",
        "id": "info.asankan.phonegap.smsplugin.smsplugin",
        "clobbers": [
            "smsplugin"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.device/www/device.js",
        "id": "org.apache.cordova.device.device",
        "clobbers": [
            "device"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "info.asankan.phonegap.smsplugin": "0.2.0",
    "org.apache.cordova.device": "0.2.12"
}
// BOTTOM OF METADATA
});