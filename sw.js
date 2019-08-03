// workbox init setting
importScripts(
    "https://storage.googleapis.com/workbox-cdn/releases/3.6.1/workbox-sw.js"
);
workbox.core.setCacheNameDetails({ prefix: "js-primer-v1" });
workbox.googleAnalytics.initialize();
// reload asap
workbox.skipWaiting();
workbox.clientsClaim();
// precache
workbox.precaching.precacheAndRoute([
  {
    "url": "404.html",
    "revision": "1ea4469e2ca182692a09f11d89535838"
  },
  {
    "url": "appendix/links/index.html",
    "revision": "2c915170cae5cefb2e7e563ec32721b5"
  },
  {
    "url": "basic/array/index.html",
    "revision": "1672cf32f9e0d84e37aeee62ef3a5fe4"
  },
  {
    "url": "basic/async/img/promise-chain.png",
    "revision": "34b48836a6f476f1d57f197e121041c2"
  },
  {
    "url": "basic/async/img/then-rejected-promise.png",
    "revision": "c45405c987bb1a739850f71be6d010f0"
  },
  {
    "url": "basic/async/index.html",
    "revision": "7e7c7458756b46c03582cda81801e359"
  },
  {
    "url": "basic/class/index.html",
    "revision": "ab5a2d412f7b7ef3da62c21a9a1760f7"
  },
  {
    "url": "basic/comments/index.html",
    "revision": "3b337cc4493ccb525e90a8b97b7bac6c"
  },
  {
    "url": "basic/condition/index.html",
    "revision": "4b25db6584433b94b81abd5ca7f8940f"
  },
  {
    "url": "basic/data-type/index.html",
    "revision": "b1a452c1524e480f1ef5d3cc406f4a9a"
  },
  {
    "url": "basic/date/index.html",
    "revision": "c162a0aa644aa4cb0b97bb4a3b47e8be"
  },
  {
    "url": "basic/ecmascript/index.html",
    "revision": "3d5d0d781eda33a8465cdc2b9b09f70b"
  },
  {
    "url": "basic/error-try-catch/img/console.error.png",
    "revision": "aca611880ab3cb034578a248b94f7b44"
  },
  {
    "url": "basic/error-try-catch/img/error.png",
    "revision": "dff0e4322cb06d42d699119b6f89428f"
  },
  {
    "url": "basic/error-try-catch/index.html",
    "revision": "f1b1adb572f504c30d444aa46e78d162"
  },
  {
    "url": "basic/error-try-catch/src/console/index.html",
    "revision": "f1d5ff6a6b82e975f74ac1e3d877f723"
  },
  {
    "url": "basic/error-try-catch/src/error.html",
    "revision": "359cbe7900932fac79eb321c76e104b4"
  },
  {
    "url": "basic/function-declaration/index.html",
    "revision": "092cf74da6b4c5678d5147e4173070f1"
  },
  {
    "url": "basic/function-scope/index.html",
    "revision": "ca05022f4e4ca0cc6502b22c050745a3"
  },
  {
    "url": "basic/function-this/index.html",
    "revision": "3e676bc64e473d7f8bdbcf6c634f7dca"
  },
  {
    "url": "basic/implicit-coercion/img/JavaScript-Equality-Table.png",
    "revision": "249e75cfe1f22458bfa9fe71480a6c0d"
  },
  {
    "url": "basic/implicit-coercion/index.html",
    "revision": "87fc2ef1c3c029d71f8d258fafcd72ca"
  },
  {
    "url": "basic/index.html",
    "revision": "dba9dec6819b437f4c6cec4949fc7fa1"
  },
  {
    "url": "basic/introduction/img/javascript-ecmascript.png",
    "revision": "40a83bcf5b26783fc68b7caeb792d36d"
  },
  {
    "url": "basic/introduction/index.html",
    "revision": "505c056566fb53fb29b82e0870c72f5a"
  },
  {
    "url": "basic/json/index.html",
    "revision": "23b87d8253aadbb310a469c1c2b8dc58"
  },
  {
    "url": "basic/loop/index.html",
    "revision": "41062c15fce3ba80a06245de1ab30089"
  },
  {
    "url": "basic/loop/public/index.html",
    "revision": "226c5a5e385446f7b048d1b990a8f603"
  },
  {
    "url": "basic/map-and-set/index.html",
    "revision": "2abe3d23cf5058021ea01df43bac068f"
  },
  {
    "url": "basic/math/index.html",
    "revision": "8bdb255017972e995e0c780c240ededa"
  },
  {
    "url": "basic/module/index.html",
    "revision": "bd00653105c6069147426bfc55f12102"
  },
  {
    "url": "basic/object/index.html",
    "revision": "5c25a6d60b57bac04c980e1524d62e0f"
  },
  {
    "url": "basic/operator/index.html",
    "revision": "0a82bbf5dd22beddbf8e73560e559837"
  },
  {
    "url": "basic/other-parts/index.html",
    "revision": "808c2597f49fbbb113eb3a4773bc0675"
  },
  {
    "url": "basic/prototype-object/img/object-prototype.png",
    "revision": "6bbe9c151a73ec89ed45606a0b42975f"
  },
  {
    "url": "basic/prototype-object/index.html",
    "revision": "4fc32b28f9aa31ea42d3cede4fb3ace6"
  },
  {
    "url": "basic/read-eval-print/img/syntax-error.png",
    "revision": "889dfb7dec547bc8bde6fed9566d204f"
  },
  {
    "url": "basic/read-eval-print/img/web-console.png",
    "revision": "23eb78c09ad1d984cfa76270d8467b24"
  },
  {
    "url": "basic/read-eval-print/index.html",
    "revision": "251c902c3b9b42a06a53f4619be9d0cc"
  },
  {
    "url": "basic/read-eval-print/src/empty/index.html",
    "revision": "5a2a8b11dda21e4b54164d24dd751dc4"
  },
  {
    "url": "basic/read-eval-print/src/example/index.html",
    "revision": "e6feacbd6b95841d9be147d6d820014f"
  },
  {
    "url": "basic/read-eval-print/src/invalid/syntax-error-typo/index.html",
    "revision": "e6feacbd6b95841d9be147d6d820014f"
  },
  {
    "url": "basic/read-eval-print/src/invalid/syntax-error/index.html",
    "revision": "e6feacbd6b95841d9be147d6d820014f"
  },
  {
    "url": "basic/read-eval-print/src/runtime-error/index.html",
    "revision": "e6feacbd6b95841d9be147d6d820014f"
  },
  {
    "url": "basic/statement-expression/index.html",
    "revision": "ce574dd353bcdfe4861efc37c9953efc"
  },
  {
    "url": "basic/string-unicode/img/codeunit-codepoint-table.png",
    "revision": "7d065a8e65d944b1898b9de5e8d1e07e"
  },
  {
    "url": "basic/string-unicode/img/emoji-codeunit-codepoint-table.png",
    "revision": "6665ae16a9f3b2bfee3d28930988f382"
  },
  {
    "url": "basic/string-unicode/img/extenal-code-and-internal-code.png",
    "revision": "81bdae3abbfa82c8a14ce1d961bab2e5"
  },
  {
    "url": "basic/string-unicode/index.html",
    "revision": "13caffbd8211cd934e30e4f0a9678733"
  },
  {
    "url": "basic/string/index.html",
    "revision": "3acdec9998d02dd34caa63cd5c46bd49"
  },
  {
    "url": "basic/variables/index.html",
    "revision": "bb762f36662ab221844cad28088cf129"
  },
  {
    "url": "basic/wrapper-object/index.html",
    "revision": "5a48ff63ce78d103d5a0602376a05a40"
  },
  {
    "url": "gitbook/fonts/fontawesome/fontawesome-webfont.eot",
    "revision": "25a32416abee198dd821b0b17a198a8f"
  },
  {
    "url": "gitbook/fonts/fontawesome/fontawesome-webfont.svg",
    "revision": "d7c639084f684d66a1bc66855d193ed8"
  },
  {
    "url": "gitbook/fonts/fontawesome/fontawesome-webfont.ttf",
    "revision": "1dc35d25e61d819a9c357074014867ab"
  },
  {
    "url": "gitbook/fonts/fontawesome/fontawesome-webfont.woff",
    "revision": "c8ddf1e5e5bf3682bc7bebf30f394148"
  },
  {
    "url": "gitbook/fonts/fontawesome/fontawesome-webfont.woff2",
    "revision": "e6cf7c6ec7c2d6f670ae9d762604cb0b"
  },
  {
    "url": "gitbook/fonts/fontawesome/FontAwesome.otf",
    "revision": "5dc41d8fe329a22fa1ee9225571c843e"
  },
  {
    "url": "gitbook/gitbook-plugin-anchors/plugin.css",
    "revision": "45deda85e7ceaacadb6a51c17248ad1c"
  },
  {
    "url": "gitbook/gitbook-plugin-fontsettings/fontsettings.js",
    "revision": "fab8f6412ce18bb367635b1bcae503ca"
  },
  {
    "url": "gitbook/gitbook-plugin-fontsettings/website.css",
    "revision": "056a6db3eef3553a78f3b7e02356b2e7"
  },
  {
    "url": "gitbook/gitbook-plugin-ga/plugin.js",
    "revision": "8b0d0bfffa07cfd2675fffb1b7b6e6f4"
  },
  {
    "url": "gitbook/gitbook-plugin-github-issue-feedback/plugin.js",
    "revision": "096a3a5838459d91e482dff2e1230c84"
  },
  {
    "url": "gitbook/gitbook-plugin-highlight/ebook.css",
    "revision": "fa203ae16ad9f01f4d20061fb9e7a6cc"
  },
  {
    "url": "gitbook/gitbook-plugin-highlight/website.css",
    "revision": "acce01e3e11cbd4b3882e7732d81f954"
  },
  {
    "url": "gitbook/gitbook-plugin-js-console/console-ui.js",
    "revision": "0ca768e48d364ee90d22664568902840"
  },
  {
    "url": "gitbook/gitbook-plugin-page-toc-button/plugin.css",
    "revision": "4e7efddf5df2ea927a186116ba2aee2b"
  },
  {
    "url": "gitbook/gitbook-plugin-page-toc-button/plugin.js",
    "revision": "834dad580dcb5926f3b090502550f60d"
  },
  {
    "url": "gitbook/gitbook-plugin-sharing/buttons.js",
    "revision": "e7c1c051d685b9e7530c1a6675e6b119"
  },
  {
    "url": "gitbook/gitbook.js",
    "revision": "e53bf9037b1d1c9810486ef4c5493624"
  },
  {
    "url": "gitbook/icons/favicon.ico",
    "revision": "4724b6e29e34167169d6d9e14b8c853f"
  },
  {
    "url": "gitbook/icons/icon-128x128.png",
    "revision": "b91df37069569bafccc6936d1b2e1352"
  },
  {
    "url": "gitbook/icons/icon-144x144.png",
    "revision": "e744cdec12fa24a28b40fde9b52d7695"
  },
  {
    "url": "gitbook/icons/icon-152x152.png",
    "revision": "77dac1368e193743d56106145e1c04a9"
  },
  {
    "url": "gitbook/icons/icon-192x192.png",
    "revision": "e3682439a02773056ce1bd46e6085555"
  },
  {
    "url": "gitbook/icons/icon-384x384.png",
    "revision": "2814afaf288c99d08c584b39234d3e39"
  },
  {
    "url": "gitbook/icons/icon-512x512.png",
    "revision": "fd7a37b059ccac4d7256226883672bce"
  },
  {
    "url": "gitbook/icons/icon-72x72.png",
    "revision": "406eb5ae0057f1f40b2abf9b17cd12a4"
  },
  {
    "url": "gitbook/icons/icon-96x96.png",
    "revision": "7529c23361ebe1eaba84a6cd042a9565"
  },
  {
    "url": "gitbook/images/apple-touch-icon-precomposed-152.png",
    "revision": "77dac1368e193743d56106145e1c04a9"
  },
  {
    "url": "gitbook/images/favicon.ico",
    "revision": "4724b6e29e34167169d6d9e14b8c853f"
  },
  {
    "url": "gitbook/style.css",
    "revision": "88a3a50e3559bc577c1be0de4fcc6c6d"
  },
  {
    "url": "gitbook/theme.js",
    "revision": "176e71ac3bf185b7f08e0f6cb919f1e8"
  },
  {
    "url": "index.html",
    "revision": "785542c1d9e091cf3ecf3f1bb86bccba"
  },
  {
    "url": "intro/feedback/index.html",
    "revision": "1d528d09c39af4baed67bf6d90a2bed1"
  },
  {
    "url": "intro/index.html",
    "revision": "f67bbe57072ee40b0b774ad7fe91ea2d"
  },
  {
    "url": "intro/preparation/index.html",
    "revision": "29ff87f2cfe939357d0e0c8b7f062002"
  },
  {
    "url": "landing/css/style.css",
    "revision": "026290c57783f482c4226e004e2279e5"
  },
  {
    "url": "landing/img/cover.png",
    "revision": "fec746cff0a8b4a9fb4193d4af3d534f"
  },
  {
    "url": "landing/img/js-primer.png",
    "revision": "19d98be248101b2685bb2a74d510890f"
  },
  {
    "url": "landing/img/repo-actions-watch.png",
    "revision": "4b4cd63c1bad3861502d3127c2a2d0a2"
  },
  {
    "url": "landing/index.html",
    "revision": "37180e6814e3dfedb27c4fa09cf13346"
  },
  {
    "url": "outro/index.html",
    "revision": "d3880e890074a3d1dfedfbd235843197"
  },
  {
    "url": "use-case/ajaxapp/display/img/fig-1.png",
    "revision": "15072f06aa7fd4d5fbce148bc2db975f"
  },
  {
    "url": "use-case/ajaxapp/display/index.html",
    "revision": "7d44f8a47e544671d4258298baf878d2"
  },
  {
    "url": "use-case/ajaxapp/display/src/index.html",
    "revision": "cd7de9a39ea850bbf77185c30e925ddc"
  },
  {
    "url": "use-case/ajaxapp/entrypoint/img/fig-1.png",
    "revision": "c97c4a11973148252aa35d5256c816e3"
  },
  {
    "url": "use-case/ajaxapp/entrypoint/index.html",
    "revision": "600b43954d6eab0591349226cfbea91d"
  },
  {
    "url": "use-case/ajaxapp/entrypoint/src/index.html",
    "revision": "59d564baee8b85ccee9e5e5eac419944"
  },
  {
    "url": "use-case/ajaxapp/http/img/fig-1.png",
    "revision": "92e52fdeed508665f8eab33638b6de82"
  },
  {
    "url": "use-case/ajaxapp/http/img/fig-2.png",
    "revision": "def11fed326f47b16906927db23a8a05"
  },
  {
    "url": "use-case/ajaxapp/http/index.html",
    "revision": "1d5456bacaae8590136729717f945083"
  },
  {
    "url": "use-case/ajaxapp/http/src/index.html",
    "revision": "79838155e2a06a9e86a64804297f9a64"
  },
  {
    "url": "use-case/ajaxapp/index.html",
    "revision": "d88d482469bfe20fd25deba9f6005629"
  },
  {
    "url": "use-case/ajaxapp/promise/img/fig-1.png",
    "revision": "97b1897743ee44e2fd8a9315a7af15eb"
  },
  {
    "url": "use-case/ajaxapp/promise/index.html",
    "revision": "1b0624d6540355311cbb236e2b71a9bb"
  },
  {
    "url": "use-case/ajaxapp/promise/src/index.html",
    "revision": "08f26d218b17fbc1aea4461f2a01df19"
  },
  {
    "url": "use-case/ajaxapp/src/index.html",
    "revision": "08f26d218b17fbc1aea4461f2a01df19"
  },
  {
    "url": "use-case/ajaxapp/xhr/index.html",
    "revision": "e2a798bbbb6e31bede0dcec28b833d63"
  },
  {
    "url": "use-case/index.html",
    "revision": "f03c5599ad3ca018da544f860a09597e"
  },
  {
    "url": "use-case/nodecli/argument-parse/index.html",
    "revision": "afea00a9a27e7209e90b9e20ec6021be"
  },
  {
    "url": "use-case/nodecli/helloworld/index.html",
    "revision": "14485e82227c2cdee978a42363579a97"
  },
  {
    "url": "use-case/nodecli/index.html",
    "revision": "0fc5db542724da14fc1e0d8bdb4ee285"
  },
  {
    "url": "use-case/nodecli/md-to-html/index.html",
    "revision": "caa9b8be8b836960b6faa753cb2dfb91"
  },
  {
    "url": "use-case/nodecli/read-file/index.html",
    "revision": "4f1ac58cfa947e2d46cdc08056043bbf"
  },
  {
    "url": "use-case/nodecli/refactor-and-unittest/index.html",
    "revision": "39f26815d4a5e6fda9be46d4220caa3c"
  },
  {
    "url": "use-case/nodecli/refactor-and-unittest/src/test/fixtures/expected.html",
    "revision": "98b8e1ceac14ee8d5bd405fe8fc1b2bc"
  },
  {
    "url": "use-case/setup-local-env/img/index.png",
    "revision": "f52100412ccaca79443b06c14d5faafe"
  },
  {
    "url": "use-case/setup-local-env/index.html",
    "revision": "dd187a5e7388073b0ab12cd84e72cae8"
  },
  {
    "url": "use-case/setup-local-env/src/index.html",
    "revision": "089aa360477e18de8c4044c4cadb0c41"
  },
  {
    "url": "use-case/todoapp/app-structure/img/todo-html.png",
    "revision": "a7e248a9554bc7f79bc635b4c373ed9c"
  },
  {
    "url": "use-case/todoapp/app-structure/index.html",
    "revision": "9fbfc9c489dd0a553d4fcdaab5910f95"
  },
  {
    "url": "use-case/todoapp/app-structure/todo-html/index.html",
    "revision": "7982d73005aace941cf4c11764d8d601"
  },
  {
    "url": "use-case/todoapp/entrypoint/first-entry/index.html",
    "revision": "be5eee3981ec18c49a62181f3fa78987"
  },
  {
    "url": "use-case/todoapp/entrypoint/img/first-entry.png",
    "revision": "07fda3c2b654ee7b03f3ded0a58c1fff"
  },
  {
    "url": "use-case/todoapp/entrypoint/index.html",
    "revision": "d1897e43492ed68f5596ec4d58ef1531"
  },
  {
    "url": "use-case/todoapp/entrypoint/module-entry/index.html",
    "revision": "be5eee3981ec18c49a62181f3fa78987"
  },
  {
    "url": "use-case/todoapp/entrypoint/module-scope/index.html",
    "revision": "363ad66f11327d4fbd4584c65dbcde65"
  },
  {
    "url": "use-case/todoapp/event-model/event-emitter/index.html",
    "revision": "4b6e0d6f957ffad0659f2076151c97ca"
  },
  {
    "url": "use-case/todoapp/event-model/index.html",
    "revision": "8ccd22f4b226175076b04258aaaabca4"
  },
  {
    "url": "use-case/todoapp/final/create-view/index.html",
    "revision": "4b6e0d6f957ffad0659f2076151c97ca"
  },
  {
    "url": "use-case/todoapp/final/final/index.html",
    "revision": "9ffaa1daeb5dc9ad3021970002a5aa53"
  },
  {
    "url": "use-case/todoapp/final/index.html",
    "revision": "a33c9d1d0003914f0b222e045cd40cc7"
  },
  {
    "url": "use-case/todoapp/final/more/index.html",
    "revision": "9ffaa1daeb5dc9ad3021970002a5aa53"
  },
  {
    "url": "use-case/todoapp/form-event/add-todo-item/index.html",
    "revision": "4b6e0d6f957ffad0659f2076151c97ca"
  },
  {
    "url": "use-case/todoapp/form-event/img/add-todo-item.png",
    "revision": "044faab6418bb0d5c4a50d43be55a0ac"
  },
  {
    "url": "use-case/todoapp/form-event/img/form-event.png",
    "revision": "a193d8abc60dcc1f78c117af7a23a946"
  },
  {
    "url": "use-case/todoapp/form-event/index.html",
    "revision": "c40e244a1b1d1670dc5af97aadbc1321"
  },
  {
    "url": "use-case/todoapp/form-event/prevent-event/index.html",
    "revision": "4b6e0d6f957ffad0659f2076151c97ca"
  },
  {
    "url": "use-case/todoapp/index.html",
    "revision": "63b74fb2c6508aa64a6fba021eeea750"
  },
  {
    "url": "use-case/todoapp/update-delete/add-checkbox/index.html",
    "revision": "4b6e0d6f957ffad0659f2076151c97ca"
  },
  {
    "url": "use-case/todoapp/update-delete/delete-feature/index.html",
    "revision": "4b6e0d6f957ffad0659f2076151c97ca"
  },
  {
    "url": "use-case/todoapp/update-delete/img/input-checkbox.png",
    "revision": "44920eba3f5737a49e9cc4c0893c44dd"
  },
  {
    "url": "use-case/todoapp/update-delete/index.html",
    "revision": "120b13e547f20c4ebf72dcb6d8394fc2"
  },
  {
    "url": "use-case/todoapp/update-delete/input-checkbox/index.html",
    "revision": "9528b6b1e9c5c6c029843537ea4121f5"
  },
  {
    "url": "use-case/todoapp/update-delete/update-feature/index.html",
    "revision": "4b6e0d6f957ffad0659f2076151c97ca"
  }
]);