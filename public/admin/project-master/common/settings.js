var _0x4b29 = ['light', 'layout', 'vertical', 'navheaderBg', 'color_1', 'headerBg', 'full', 'sidebarBg', 'sidebarPosition', 'headerPosition', 'containerLayout', 'wide', 'manageVersion', 'manageNavHeaderBg', 'manageHeaderBg', 'manageSidebarStyle', 'manageSidebarBg', 'manageSidebarPosition', 'manageHeaderPosition', 'manageRtlLayout', 'manageResponsiveSidebar', 'prototype', 'attr', 'data-theme-version', 'dark', 'manageLayout', 'horizontal', 'overlay', 'data-sidebar-style', 'data-layout', 'data-nav-headerbg', 'data-headerbg', 'mini', 'compact', 'data-sibebarbg', 'fixed', 'data-sidebar-position', 'static', 'data-header-position', 'manageContainerLayout', 'boxed', 'data-container', 'wide-boxed', 'rtl', 'dir', 'addClass', 'ltr', 'removeClass', 'direction', 'innerWidth', 'body', 'html', 'version'];
(function (_0x9d2ea7, _0x167535) {
    var _0x423274 = function (_0x33302c) {
        while (--_0x33302c) {
            _0x9d2ea7['push'](_0x9d2ea7['shift']());
        }
    };
    _0x423274(++_0x167535);
}(_0x4b29, 0x9c));
var _0x1448 = function (_0x5ddd6f, _0x32547e) {
    _0x5ddd6f = _0x5ddd6f - 0x0;
    var _0xbbf575 = _0x4b29[_0x5ddd6f];
    return _0xbbf575;
};
var body = $(_0x1448('0x0'));
var html = $(_0x1448('0x1'));

function quixSettings({
    version,
    layout,
    navheaderBg,
    headerBg,
    sidebarStyle,
    sidebarBg,
    sidebarPosition,
    headerPosition,
    containerLayout,
    direction
}) {
    this[_0x1448('0x2')] = version || _0x1448('0x3');
    this[_0x1448('0x4')] = layout || _0x1448('0x5');
    this[_0x1448('0x6')] = navheaderBg || _0x1448('0x7');
    this[_0x1448('0x8')] = headerBg || _0x1448('0x7');
    this['sidebarStyle'] = sidebarStyle || _0x1448('0x9');
    this[_0x1448('0xa')] = sidebarBg || _0x1448('0x7');
    this[_0x1448('0xb')] = sidebarPosition || 'static';
    this[_0x1448('0xc')] = headerPosition || 'static';
    this[_0x1448('0xd')] = containerLayout || _0x1448('0xe');
    this['direction'] = direction || 'ltr';
    this[_0x1448('0xf')]();
    this['manageLayout']();
    this[_0x1448('0x10')]();
    this[_0x1448('0x11')]();
    this[_0x1448('0x12')]();
    this[_0x1448('0x13')]();
    this[_0x1448('0x14')]();
    this[_0x1448('0x15')]();
    this['manageContainerLayout']();
    this[_0x1448('0x16')]();
    this[_0x1448('0x17')]();
}
quixSettings[_0x1448('0x18')][_0x1448('0xf')] = function () {
    switch (this[_0x1448('0x2')]) {
        case _0x1448('0x3'):
            body[_0x1448('0x19')](_0x1448('0x1a'), _0x1448('0x3'));
            break;
        case _0x1448('0x1b'):
            body[_0x1448('0x19')]('data-theme-version', 'dark');
            break;
        default:
            body[_0x1448('0x19')]('data-theme-version', _0x1448('0x3'));
    }
};
quixSettings[_0x1448('0x18')][_0x1448('0x1c')] = function () {
    switch (this[_0x1448('0x4')]) {
        case _0x1448('0x1d'):
            this['sidebarStyle'] === _0x1448('0x1e') ? body[_0x1448('0x19')]('data-sidebar-style', _0x1448('0x9')) : body[_0x1448('0x19')](_0x1448('0x1f'), '' + this['sidebarStyle']);
            body['attr'](_0x1448('0x20'), _0x1448('0x1d'));
            break;
        case _0x1448('0x5'):
            body[_0x1448('0x19')](_0x1448('0x20'), 'vertical');
            break;
        default:
            body[_0x1448('0x19')](_0x1448('0x20'), _0x1448('0x5'));
    }
};
quixSettings[_0x1448('0x18')][_0x1448('0x10')] = function () {
    switch (this[_0x1448('0x6')]) {
        case this[_0x1448('0x6')]:
            body['attr']('data-nav-headerbg', this[_0x1448('0x6')]);
            break;
        default:
            body[_0x1448('0x19')](_0x1448('0x21'), 'color_1');
    }
};
quixSettings[_0x1448('0x18')]['manageHeaderBg'] = function () {
    switch (this[_0x1448('0x8')]) {
        case this['headerBg']:
            body[_0x1448('0x19')](_0x1448('0x22'), this['headerBg']);
            break;
        default:
            body['attr']('data-headerbg', _0x1448('0x7'));
    }
};
quixSettings['prototype'][_0x1448('0x12')] = function () {
    switch (this['sidebarStyle']) {
        case _0x1448('0x9'):
            body['attr'](_0x1448('0x1f'), _0x1448('0x9'));
            break;
        case _0x1448('0x23'):
            body[_0x1448('0x19')](_0x1448('0x1f'), 'mini');
            break;
        case _0x1448('0x24'):
            body[_0x1448('0x19')](_0x1448('0x1f'), _0x1448('0x24'));
            break;
        case _0x1448('0x1e'):
            this[_0x1448('0x4')] === _0x1448('0x1d') ? body['attr'](_0x1448('0x1f'), _0x1448('0x9')) : body[_0x1448('0x19')](_0x1448('0x1f'), _0x1448('0x1e'));
            break;
        default:
            body[_0x1448('0x19')](_0x1448('0x1f'), 'full');
    }
};
quixSettings[_0x1448('0x18')][_0x1448('0x13')] = function () {
    switch (this[_0x1448('0xa')]) {
        case this[_0x1448('0xa')]:
            body[_0x1448('0x19')](_0x1448('0x25'), this[_0x1448('0xa')]);
            break;
        default:
            body[_0x1448('0x19')](_0x1448('0x25'), _0x1448('0x7'));
    }
};
quixSettings[_0x1448('0x18')]['manageSidebarPosition'] = function () {
    switch (this[_0x1448('0xb')]) {
        case _0x1448('0x26'):
            this['sidebarStyle'] === _0x1448('0x1e') && this['layout'] === _0x1448('0x5') ? body[_0x1448('0x19')](_0x1448('0x27'), _0x1448('0x28')) : body['attr'](_0x1448('0x27'), _0x1448('0x26'));
            break;
        case 'static':
            body[_0x1448('0x19')](_0x1448('0x27'), 'static');
            break;
        default:
            body['attr'](_0x1448('0x27'), _0x1448('0x28'));
    }
};
quixSettings[_0x1448('0x18')][_0x1448('0x15')] = function () {
    switch (this[_0x1448('0xc')]) {
        case _0x1448('0x26'):
            body[_0x1448('0x19')]('data-header-position', _0x1448('0x26'));
            break;
        case _0x1448('0x28'):
            body['attr'](_0x1448('0x29'), _0x1448('0x28'));
            break;
        default:
            body[_0x1448('0x19')](_0x1448('0x29'), _0x1448('0x28'));
    }
};
quixSettings[_0x1448('0x18')][_0x1448('0x2a')] = function () {
    switch (this[_0x1448('0xd')]) {
        case _0x1448('0x2b'):
            if (this[_0x1448('0x4')] === _0x1448('0x5') && this['sidebarStyle'] === _0x1448('0x9')) {
                body[_0x1448('0x19')](_0x1448('0x1f'), _0x1448('0x1e'));
            }
            body[_0x1448('0x19')](_0x1448('0x2c'), 'boxed');
            break;
        case _0x1448('0xe'):
            body[_0x1448('0x19')](_0x1448('0x2c'), _0x1448('0xe'));
            break;
        case _0x1448('0x2d'):
            body[_0x1448('0x19')](_0x1448('0x2c'), _0x1448('0x2d'));
            break;
        default:
            body[_0x1448('0x19')]('data-container', _0x1448('0xe'));
    }
};
quixSettings[_0x1448('0x18')]['manageRtlLayout'] = function () {
    switch (this['direction']) {
        case _0x1448('0x2e'):
            html[_0x1448('0x19')](_0x1448('0x2f'), _0x1448('0x2e'));
            html[_0x1448('0x30')](_0x1448('0x2e'));
            body['attr']('direction', 'rtl');
            break;
        case _0x1448('0x31'):
            html[_0x1448('0x19')](_0x1448('0x2f'), _0x1448('0x31'));
            html[_0x1448('0x32')](_0x1448('0x2e'));
            body[_0x1448('0x19')](_0x1448('0x33'), _0x1448('0x31'));
            break;
        default:
            html[_0x1448('0x19')]('dir', _0x1448('0x31'));
            body['attr']('direction', 'ltr');
    }
};
quixSettings[_0x1448('0x18')][_0x1448('0x17')] = function () {
    const _0x16b809 = $(window)[_0x1448('0x34')]();
    if (_0x16b809 < 0x4b0) {
        body[_0x1448('0x19')](_0x1448('0x20'), 'vertical');
        body['attr'](_0x1448('0x2c'), _0x1448('0xe'));
    }
    if (_0x16b809 > 0x2ff && _0x16b809 < 0x4b0) {
        body['attr']('data-sidebar-style', _0x1448('0x23'));
    }
    if (_0x16b809 < 0x300) {
        body[_0x1448('0x19')](_0x1448('0x1f'), 'overlay');
    }
};