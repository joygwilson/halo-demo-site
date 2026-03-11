window.OneSignalDeferred = window.OneSignalDeferred || [];

OneSignalDeferred.push(async function (OneSignal) {
  // -------------------------------------------------------------------
  // EXTERNAL USER ID
  // Replace this with however you retrieve your logged-in user's ID.
  // Examples: a value from a cookie, a JWT claim, a data attribute
  // injected by your backend, or a query param for demo purposes.
  // -------------------------------------------------------------------
  const externalUserId = getUserId();

  await OneSignal.init({
    appId: "47f7e16c-be75-4634-ae97-a726ad98630e", // 
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

  // Login must come AFTER init() resolves.
  // This links the browser subscription to your external user identity.
  if (externalUserId) {
    await OneSignal.login(externalUserId);
    console.log("[OneSignal] Logged in as:", externalUserId);
  }

  // Optional: write user properties immediately after login.
  // These show up as Data Tags on the subscriber profile in OneSignal.
  OneSignal.User.addTags({
    plan: "prospect",
    signup_source: "web_demo",
  });
});

// -------------------------------------------------------------------
// getUserId() — swap in your real identity source here.
// For a client demo, a URL param (?uid=demo123) works great so you
// can show distinct profiles appearing in the OneSignal dashboard
// without needing a real auth system.
// -------------------------------------------------------------------
function getUserId() {
  // Option A: URL param  →  yoursite.com/?uid=demo123
  const params = new URLSearchParams(window.location.search);
  if (params.get("uid")) return params.get("uid");

  // Option B: existing cookie / localStorage value from your auth system
  // return document.cookie.match(/user_id=([^;]+)/)?.[1] || null;

  // Option C: data attribute injected by your backend on the <body> tag
  // return document.body.dataset.userId || null;

  return null; // No ID found — init runs but login() is skipped
}
