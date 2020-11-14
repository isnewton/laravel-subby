(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{369:function(s,a,t){"use strict";t.r(a);var e=t(42),n=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"installation"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#installation"}},[s._v("#")]),s._v(" Installation")]),s._v(" "),t("p",[s._v("Install the package via composer:")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("composer")]),s._v(" require bpuig/laravel-subby\n")])])]),t("p",[s._v("Publish the configuration:")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("php artisan vendor:publish --tag"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("subby.config\n")])])]),t("p",[s._v("Publish migrations:")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("php artisan vendor:publish --tag"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("subby.migrations\n")])])]),t("p",[s._v("Migrate:")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("php artisan migrate\n")])])]),t("h3",{attrs:{id:"attach-subscriptions-to-model"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#attach-subscriptions-to-model"}},[s._v("#")]),s._v(" Attach Subscriptions to model"),t("a",{attrs:{name:"attach-subscription"}})]),s._v(" "),t("p",[t("strong",[s._v("Laravel Subby")]),s._v(" has been specially made for Eloquent. To add Subscription functionality to your User model just use the "),t("code",[s._v("\\Bpuig\\Subby\\Traits\\HasSubscriptions")]),s._v(" trait like this:")]),s._v(" "),t("div",{staticClass:"language-php extra-class"},[t("pre",{pre:!0,attrs:{class:"language-php"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("namespace")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token package"}},[s._v("App"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("Models")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("use")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token package"}},[s._v("Bpuig"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("Subby"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("Traits"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("HasSubscriptions")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("use")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token package"}},[s._v("Illuminate"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("Foundation"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("Auth"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("User")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("as")]),s._v(" Authenticatable"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("User")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("extends")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Authenticatable")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("use")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token package"}},[s._v("HasSubscriptions")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),t("p",[s._v("That's it, we only have to use that trait in our User model! Now your users may subscribe to plans. Then you can import package's models wherever you need them or extend them in your own models.")])])}),[],!1,null,null,null);a.default=n.exports}}]);