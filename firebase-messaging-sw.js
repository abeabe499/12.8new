importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging-compat.js');
firebase.initializeApp({
  apiKey: "AIzaSyDlaQBRFHixcMaHp2R6r2n5O5O_4vvC2qs",
  authDomain: "kelas128-fc182.firebaseapp.com",
  projectId: "kelas128-fc182",
  storageBucket: "kelas128-fc182.firebasestorage.app",
  messagingSenderId: "13578218687",
  appId: "1:13578218687:web:79e3c0ebef9eafc93daa0a"
});
firebase.messaging(); // pesan dengan payload "notification" ditampilkan otomatis oleh Firebase

self.addEventListener('notificationclick', function (e) {
  e.notification.close();
  var url = (e.notification.data && e.notification.data.FCM_MSG && e.notification.data.FCM_MSG.notification && e.notification.data.FCM_MSG.notification.click_action) || self.registration.scope;
  e.waitUntil(clients.matchAll({ type: 'window', includeUncontrolled: true }).then(function (l) {
    for (var i = 0; i < l.length; i++) if ('focus' in l[i]) return l[i].focus();
    return clients.openWindow(url);
  }));
});
