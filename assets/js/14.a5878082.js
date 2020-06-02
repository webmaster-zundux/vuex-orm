(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{213:function(t,n,a){"use strict";a.r(n);var s=a(0),e=Object(s.a)({},(function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"plugins"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#plugins"}},[t._v("#")]),t._v(" Plugins")]),t._v(" "),a("p",[t._v("You may add additional features to the Vuex ORM through plugins. Plugins usually add global-level functionality to Vuex ORM. Vuex ORM plugin works very similar to "),a("a",{attrs:{href:"https://vuex.vuejs.org/en/plugins.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Vue Plugin"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("h2",{attrs:{id:"available-plugins"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#available-plugins"}},[t._v("#")]),t._v(" Available Plugins")]),t._v(" "),a("p",[t._v("Here is the list of available plugins.")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/vuex-orm/plugin-axios",target:"_blank",rel:"noopener noreferrer"}},[t._v("Vuex ORM Axios"),a("OutboundLink")],1),t._v(" – A plugin to sync the store against a RESTful API.")]),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/vuex-orm/plugin-graphql",target:"_blank",rel:"noopener noreferrer"}},[t._v("Vuex ORM GraphQL"),a("OutboundLink")],1),t._v(" – A plugin to sync the store against a "),a("a",{attrs:{href:"https://graphql.org",target:"_blank",rel:"noopener noreferrer"}},[t._v("GraphQL"),a("OutboundLink")],1),t._v(" API.")]),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/vuex-orm/plugin-search",target:"_blank",rel:"noopener noreferrer"}},[t._v("Vuex ORM Search"),a("OutboundLink")],1),t._v(" – This plugin adds a search() method to filter records using fuzzy search logic from the "),a("a",{attrs:{href:"http://fusejs.io",target:"_blank",rel:"noopener noreferrer"}},[t._v("Fuse.js"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/vuex-orm/plugin-change-flags",target:"_blank",rel:"noopener noreferrer"}},[t._v("Vuex ORM Change Flags"),a("OutboundLink")],1),t._v(" - Vuex ORM plugin for adding IsDirty / IsNew flags to model entities.")]),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/vuex-orm/plugin-soft-delete",target:"_blank",rel:"noopener noreferrer"}},[t._v("Vuex ORM Soft Delete"),a("OutboundLink")],1),t._v(" – Vuex ORM plugin for adding soft delete feature to model entities.")])]),t._v(" "),a("h2",{attrs:{id:"writing-a-plugin"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#writing-a-plugin"}},[t._v("#")]),t._v(" Writing a Plugin")]),t._v(" "),a("p",[t._v("A Vuex ORM plugin should be an object that exposes an "),a("code",[t._v("install")]),t._v(" method. The method will be called with the Vuex ORM components such as Model, Repo, Query and such, as the first argument, along with possible options.")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" plugin "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// `components` contains Vuex ORM objects such as Model and Query.")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// The plugin author can then extend those objects to add")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// whatever features it needs.")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("components"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" options")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Add global (static) method or property.")]),t._v("\n    components"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Model"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("globalMethod")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Logic...")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Add an instance method or property.")]),t._v("\n    components"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Query")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("instanceMethod")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Logic...")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h3",{attrs:{id:"extendable-components"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#extendable-components"}},[t._v("#")]),t._v(" Extendable Components")]),t._v(" "),a("p",[t._v("The following components are included within the "),a("code",[t._v("components")]),t._v(" argument.")]),t._v(" "),a("ul",[a("li",[t._v("Model")]),t._v(" "),a("li",[t._v("Database")]),t._v(" "),a("li",[t._v("Query")]),t._v(" "),a("li",[t._v("Attribute")]),t._v(" "),a("li",[t._v("Type")]),t._v(" "),a("li",[t._v("Attr")]),t._v(" "),a("li",[t._v("String")]),t._v(" "),a("li",[t._v("Number")]),t._v(" "),a("li",[t._v("Boolean")]),t._v(" "),a("li",[t._v("Uid")]),t._v(" "),a("li",[t._v("Relation")]),t._v(" "),a("li",[t._v("HasOne")]),t._v(" "),a("li",[t._v("BelongsTo")]),t._v(" "),a("li",[t._v("HasMany")]),t._v(" "),a("li",[t._v("HasManyBy")]),t._v(" "),a("li",[t._v("BelongsToMany")]),t._v(" "),a("li",[t._v("HasManyThrough")]),t._v(" "),a("li",[t._v("MorphTo")]),t._v(" "),a("li",[t._v("MorphOne")]),t._v(" "),a("li",[t._v("MorphMany")]),t._v(" "),a("li",[t._v("MorphToMany")]),t._v(" "),a("li",[t._v("MorphedByMany")]),t._v(" "),a("li",[t._v("Getters")]),t._v(" "),a("li",[t._v("RootGetters")]),t._v(" "),a("li",[t._v("Actions")]),t._v(" "),a("li",[t._v("RootActions")]),t._v(" "),a("li",[t._v("RootMutations")])]),t._v(" "),a("h2",{attrs:{id:"using-a-plugin"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#using-a-plugin"}},[t._v("#")]),t._v(" Using a Plugin")]),t._v(" "),a("p",[t._v("Use plugins by calling the VuexORM.use() method.")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" VuexORM "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@vuex-orm/core'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" plugin "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vuex-orm-plugin'")]),t._v("\n\nVuexORM"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("use")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("plugin"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("You can optionally pass in some options too.")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("VuexORM"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("use")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("plugin"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" someOption"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])])}),[],!1,null,null,null);n.default=e.exports}}]);