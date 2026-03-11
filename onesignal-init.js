window.OneSignalDeferred = window.OneSignalDeferred || [];

OneSignalDeferred.push(async function (OneSignal) {
  await OneSignal.init({
    appId: "47f7e16c-be75-4634-ae97-a726ad98630e", // 🔁 Replace with your actual App ID
    serviceWorkerPath: "/OneSignalSDKWorker.js",
    serviceWorkerParam: { scope: "/" },

    // Slide-down prompt config
    promptOptions: {
      slidedown: {
        prompts: [
          {
            type: "category",
            autoPrompt: true,
            text: {
              actionMessage:
                "Stay in the loop with Halo Collar. Choose what you'd like to hear about:",
              acceptButton: "Subscribe",
              cancelButton: "No Thanks",
              title: "Halo Collar Notifications",
              positiveUpdateButton: "Save Preferences",
              negativeUpdateButton: "Cancel",
            },
            delay: {
              pageViews: 1,
              timeDelay: 3, // seconds before prompt appears
            },
            categories: [
              {
                tag: "deals_promotions",
                label: "Deals & Promotions",
              },
              {
                tag: "product_updates",
                label: "Product Updates",
              },
              {
                tag: "safety_tips",
                label: "Safety & Training Tips",
              },
              {
                tag: "new_arrivals",
                label: "New Arrivals",
              },
            ],
          },
        ],
      },
    },
  });
});
