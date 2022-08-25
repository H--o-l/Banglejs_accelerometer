# Banglejs_accelerometer

JS code to run on the Bangle.js v1 smartwatch.
Send the accelerometer data to Bluetooth.
This code doesn't use the official application bootlader of the watch, but it replaces it with something simpler, than runs only one application.

## Use

1. Open the [Espruino IDE](https://www.espruino.com/ide/#) on Chrome.
   For the IDE to work, check [the documentation](https://www.espruino.com/Quick+Start+BLE#with-web-bluetooth), section about Linux, there are two Chrome flags to be activated: chrome://flags/#enable-experimental-web-platform-features and chrome://flags/#enable-web-bluetooth-new-permissions-backend

2. Upload the `acc.js` file to the device storage thanks to the "storage" feature of the IDE. Delete all the other files on the watch if any.

3. Run the file with the same IDE feature.

Button 1 starts the watch, and button 3 stops the watch.

## Dev

Use the [Espruino IDE](https://www.espruino.com/ide/#) (see above to configure it) and use the "Watch & Upload" feature on the file `app.js`. It's really handy.

If needed: [Bangle.js API](http://www.espruino.com/ReferenceBANGLEJS)
