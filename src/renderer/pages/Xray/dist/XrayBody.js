'use strict';
exports.__esModule = true;
var classnames_1 = require('classnames');
var cfFlag_1 = require('../../lib/cfFlag');
var WelcomeMessage = function (_a) {
    var isConnected = _a.isConnected,
        ipInfo = _a.ipInfo,
        statusText = _a.statusText;
    if (isConnected) {
        return React.createElement(
            'div',
            { className: 'statusBar green' },
            React.createElement(
                'div',
                { className: 'box statusLabel' },
                React.createElement('h4', null, statusText),
                ipInfo.countryCode
                    ? React.createElement(
                          'p',
                          null,
                          ipInfo === null || ipInfo === void 0 ? void 0 : ipInfo.countryCode,
                          ':',
                          ipInfo.ip || '127.0.0.1',
                          React.createElement('img', {
                              src: cfFlag_1.cfFlag(ipInfo.countryCode || 'xx'),
                              alt:
                                  (ipInfo === null || ipInfo === void 0
                                      ? void 0
                                      : ipInfo.countryCode) + ' Flag'
                          })
                      )
                    : React.createElement(React.Fragment, null)
            ),
            React.createElement(
                'div',
                { className: 'box' },
                React.createElement('i', { className: 'material-icons' }, 'check_circle')
            )
        );
    } else {
        return React.createElement(
            'div',
            { className: 'statusBar red' },
            React.createElement(
                'div',
                { className: 'box statusLabel' },
                React.createElement('h4', null, statusText),
                React.createElement('p', null, ' ')
            ),
            React.createElement(
                'div',
                { className: 'box' },
                React.createElement('i', { className: 'material-icons' }, 'highlight_off')
            )
        );
    }
};
var XrayBody = function (_a) {
    var _b, _c;
    var appLang = _a.appLang,
        handleOnClickIp = _a.handleOnClickIp,
        handleOnClickPing = _a.handleOnClickPing,
        handleOnSwipedLeft = _a.handleOnSwipedLeft,
        handleOnSwipedRight = _a.handleOnSwipedRight,
        ipData = _a.ipData,
        ipInfo = _a.ipInfo,
        isConnected = _a.isConnected,
        isLoading = _a.isLoading,
        onSubmit = _a.onSubmit,
        ping = _a.ping,
        proxyMode = _a.proxyMode,
        statusText = _a.statusText,
        proxyStatus = _a.proxyStatus,
        appVersion = _a.appVersion,
        speeds = _a.speeds,
        dataUsage = _a.dataUsage;
    return React.createElement(
        'div',
        { className: classnames_1['default']('myApp', 'verticalAlign') },
        React.createElement(
            'div',
            { className: 'xrayScreen' },
            WelcomeMessage({ isConnected: isConnected, ipInfo: ipInfo, statusText: statusText }),
            React.createElement(
                'div',
                { className: 'xrayList' },
                isConnected
                    ? React.createElement(
                          'button',
                          { onClick: onSubmit, className: 'green actionBtn' },
                          (_b =
                              appLang === null || appLang === void 0 ? void 0 : appLang.status) ===
                              null || _b === void 0
                              ? void 0
                              : _b.connected
                      )
                    : React.createElement(
                          'button',
                          { onClick: onSubmit, className: 'red actionBtn' },
                          (_c =
                              appLang === null || appLang === void 0 ? void 0 : appLang.status) ===
                              null || _c === void 0
                              ? void 0
                              : _c.disconnected
                      )
            )
        )
    );
};
exports['default'] = XrayBody;
