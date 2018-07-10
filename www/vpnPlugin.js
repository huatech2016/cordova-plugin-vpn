var VpnPlugin = function () {}

VpnPlugin.prototype.isPlatformIOS = function () {
    var isPlatformIOS = device.platform == 'iPhone'
        || device.platform == 'iPad'
        || device.platform == 'iPod touch'
        || device.platform == 'iOS'
    return isPlatformIOS
}



VpnPlugin.prototype.call_native = function (success,error,name, args ) {
    return cordova.exec(success, error, 'VpnPlugin', name, args)

}


VpnPlugin.prototype.auth = function (success,error,userName,passWord) {
    this.call_native(success,error,'auth',[userName,passWord])
}
VpnPlugin.prototype.logout= function (success,error) {
    this.call_native(success,error,'logout')
}


if (!window.plugins) {
    window.plugins = {}
}

if (!window.plugins.vpnPlugin) {
    window.plugins.vpnPlugin = new VpnPlugin()
}

module.exports = new VpnPlugin()
