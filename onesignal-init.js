window.OneSignalDeferred = window.OneSignalDeferred || [];

OneSignalDeferred.push(async function (OneSignal) {
  await OneSignal.init({
    appId: "YOUR_ONESIGNAL_APP_ID",
  });

  OneSignal.Debug.setLogLevel("trace");
});

window.triggerOneSignalPrompt = function () {
  window.OneSignalDeferred = window.OneSignalDeferred || [];
  OneSignalDeferred.push(async function (OneSignal) {
    OneSignal.Slidedown.promptPush({ force: true });
  });
};
