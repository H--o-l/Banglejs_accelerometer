// Generated .boot0 file at the first execution of acc.js
if (!require('Storage').read('.boot0')) {
  E.showMessage("writing .boot0");
  // Code generated thanks to
  // https://github.com/espruino/BangleApps/blob/58a200b/apps/boot/bootupdate.js
  // in a file called boot0 when executed on the watch. It seems to never change
  // so let's just copy it here.
  var boot = `
  if (E.CRC32(require('Storage').read('setting.json'))+require('Storage').hash(/\.boot\.js/)+E.CRC32(process.env.GIT_COMMIT)!=1877105752) { eval(require('Storage').read('bootupdate.js')); throw "Storage Updated!"}
  E.setFlags({pretokenise:1});
  var bleServices = {}, bleServiceOptions = { uart : true};
  Bluetooth.setConsole(true);
  Bangle.setLCDPower(1);
  E.setTimeZone(undefined);E.on('errorFlag', function(errorFlags) {
    g.reset(1).setColor("#ff0000").setFont("6x8").setFontAlign(0,1).drawString(errorFlags,g.getWidth()/2,g.getHeight()-1).flip();
    print("Interpreter error:", errorFlags);
    E.getErrorFlags(); // clear flags so we get called next time
  });
  NRF.setServices(bleServices, bleServiceOptions);delete bleServices,bleServiceOptions;
  `
  // Custom code to exec acc.js at startup
  boot += `
  eval(require('Storage').read('acc.js'));
  `
  require('Storage').write('.boot0', boot);
  delete boot;
  eval(require('Storage').read('.boot0'));
}

Bangle.setOptions({
  wakeOnBTN1: false,
  wakeOnBTN2: false,
  wakeOnBTN3: false,
  wakeOnFaceUp: false,
  wakeOnTouch: false,
  wakeOnTwist: false,
  powerSave: false,
  lockTimeout: 0,
  lcdPowerTimeout: 0,
  backlightTimeout: 0,
});
Bangle.setPollInterval(100);

g.clear(true);
g.setFont('4x6', 2);
Bangle.on('accel', acc => {
  const text = acc.x + '\n' + acc.y + '\n' + acc.z + '\n' + acc.diff + '\n' + acc.msg;
  // g.clear();
  g.drawString(text, 0, 40, true);
});

setWatch(() => {
  Bangle.off();
}, BTN3);
