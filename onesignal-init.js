window.OneSignalDeferred = window.OneSignalDeferred || [];

OneSignalDeferred.push(async function (OneSignal) {
  await OneSignal.init({
    appId: "47f7e16c-be75-4634-ae97-a726ad98630e",
  });

  OneSignal.Debug.setLogLevel("trace");
});

window.triggerOneSignalPrompt = function () {
  window.OneSignalDeferred = window.OneSignalDeferred || [];
  OneSignalDeferred.push(async function (OneSignal) {
    OneSignal.Slidedown.promptPush({ force: true });
  });
};
