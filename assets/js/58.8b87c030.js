(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{458:function(e,t,s){"use strict";s.r(t);var n=s(42),o=Object(n.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"shells-in-shells"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#shells-in-shells"}},[e._v("#")]),e._v(" Shells in shells")]),e._v(" "),s("h2",{attrs:{id:"working-in-multiple-directories"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#working-in-multiple-directories"}},[e._v("#")]),e._v(" Working in multiple directories")]),e._v(" "),s("p",[e._v("While it's common to work in one directory, it can be handy to work in multiple places at the same time. For this, Nu offers the concept of \"shells\". As the name implies, they're a way of running multiple shells in one, allowing you to quickly jump between working directories and more.")]),e._v(" "),s("p",[e._v("To get started, let's enter a directory:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("/home/jonathant/Source/nushell(master)> enter ../book\n/home/jonathant/Source/book(master)> ls\n────┬────────────────────┬──────┬────────┬─────────────\n #  │ name               │ type │ size   │ modified \n────┼────────────────────┼──────┼────────┼─────────────\n  0 │ 404.html           │ File │  429 B │ 2 hours ago \n  1 │ CONTRIBUTING.md    │ File │  955 B │ 2 hours ago \n  2 │ Gemfile            │ File │ 1.1 KB │ 2 hours ago \n  3 │ Gemfile.lock       │ File │ 6.9 KB │ 2 hours ago \n")])])]),s("p",[e._v("Entering is similar to changing directories (as we saw with the "),s("code",[e._v("cd")]),e._v(" command). This allows you to jump into a directory to work in it. Instead of changing the directory, we now are in two directories. To see this more clearly, we can use the "),s("code",[e._v("shells")]),e._v(" command to list the current directories we have active:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("/home/jonathan/Source/book(master)> shells\n───┬────────┬────────────┬─────────────────────────────────\n # │ active │ name       │ path \n───┼────────┼────────────┼─────────────────────────────────\n 0 │        │ filesystem │ /home/jonathant/Source/nushell/ \n 1 │ X      │ filesystem │ /home/jonathant/Source/book \n───┴────────┴────────────┴─────────────────────────────────\n")])])]),s("p",[e._v("The "),s("code",[e._v("shells")]),e._v(' command shows us there are two shells currently active: our original "nushell" source directory and now this new "book" directory.')]),e._v(" "),s("p",[e._v("We can jump between these shells with the "),s("code",[e._v("n")]),e._v(" and "),s("code",[e._v("p")]),e._v(' shortcuts, short for "next" and "previous":')]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("/home/jonathant/Source/book(master)> n\n/home/jonathant/Source/nushell(master)> p\n/home/jonathant/Source/book(master)>\n")])])]),s("p",[e._v("We can see the directory changing, but we're always able to get back to a previous directory we were working on. This allows us to work in multiple directories in the same session.")]),e._v(" "),s("h2",{attrs:{id:"exiting-the-shell"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#exiting-the-shell"}},[e._v("#")]),e._v(" Exiting the shell")]),e._v(" "),s("p",[e._v("You can leave a shell you have "),s("code",[e._v("enter")]),e._v("ed using the "),s("code",[e._v("exit")]),e._v(" command. If this is the last open shell, Nu will quit.")]),e._v(" "),s("p",[e._v("You can always quit Nu, even if multiple shells are active by passing the "),s("code",[e._v("--now")]),e._v(" flag to the exit command. Like so: "),s("code",[e._v("exit --now")])]),e._v(" "),s("h2",{attrs:{id:"going-beyond-directories"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#going-beyond-directories"}},[e._v("#")]),e._v(" Going beyond directories")]),e._v(" "),s("p",[e._v("Nu can also create shells from other things aside from paths in a filesystem. Let's say, for example, you're working with a large data set and don't want to lose your place inside of it.")]),e._v(" "),s("p",[e._v("To see how this works, let's do the following exercise. Currently, we list the "),s("RouterLink",{attrs:{to:"/book/plugins.html"}},[e._v("Nu plugins")]),e._v(' we have developed in the "Cargo.toml" file. Let\'s say we just created a new plugin in the src/plugins directory called "doc.rs", and we\'re interested to know if it\'s listed in the "Cargo.toml" as well so that it can be compiled and installed correctly for Nu.')],1),e._v(" "),s("p",[e._v("Let's "),s("code",[e._v("enter")]),e._v(' the file "Cargo.toml" from Nu\'s source code:')]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("/home/jonathant/Source/nushell(master)> enter Cargo.toml\n/> ls\n────────────────────┬───────────────────────────\n bin                │ [table 18 rows] \n build-dependencies │ [row nu-build serde toml] \n dependencies       │ [row 29 columns] \n dev-dependencies   │ [row nu-test-support] \n features           │ [row 19 columns] \n package            │ [row 12 columns] \n workspace          │ [row members] \n────────────────────┴───────────────────────────\n")])])]),s("p",[e._v("For the moment we've only "),s("code",[e._v("enter")]),e._v("ed the file and we can see what's in it from the table "),s("code",[e._v("ls")]),e._v(" gives back. If you pay close attention, this time we've entered a file format that Nu understands (.toml). Nu also projects the contents of the file in a filesystem-like so we can explore it as if it were a regular filesystem.")]),e._v(" "),s("p",[e._v("Before we continue, let's check the active shells:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("> shells\n───┬────────┬─────────────────────────────────────────────┬─────────────────────────────────\n # │ active │ name                                        │ path \n───┼────────┼─────────────────────────────────────────────┼─────────────────────────────────\n 0 │        │ filesystem                                  │ /home/jonathant/Source/nushell/ \n 1 │ X      │ {/home/jonathant/Source/nushell/Cargo.toml} │ / \n───┴────────┴─────────────────────────────────────────────┴─────────────────────────────────\n")])])]),s("p",[e._v('We can observe that we have two active shells and telling us we are currently inside of "Cargo.toml" with a default root path "/". Let\'s view the contents again:')]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("/> ls\n────────────────────┬───────────────────────────\n bin                │ [table 18 rows] \n build-dependencies │ [row nu-build serde toml] \n dependencies       │ [row 29 columns] \n dev-dependencies   │ [row nu-test-support] \n features           │ [row 19 columns] \n package            │ [row 12 columns] \n workspace          │ [row members] \n────────────────────┴───────────────────────────\n")])])]),s("p",[e._v("What we're looking for might be inside of the \"bin\" column. So let's go into there:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("> cd bin\n/bin> ls\n────┬─────────────────────────────┬────────────────────────────────────────────┬───────────────────\n #  │ name                        │ path                                       │ required-features \n────┼─────────────────────────────┼────────────────────────────────────────────┼───────────────────\n  0 │ fail                        │ crates/nu-test-support/src/bins/fail.rs    │ [table 1 rows] \n  1 │ chop                        │ crates/nu-test-support/src/bins/chop.rs    │ [table 1 rows] \n  2 │ cococo                      │ crates/nu-test-support/src/bins/cococo.rs  │ [table 1 rows] \n  3 │ nonu                        │ crates/nu-test-support/src/bins/nonu.rs    │ [table 1 rows] \n  4 │ iecho                       │ crates/nu-test-support/src/bins/iecho.rs   │ [table 1 rows] \n  5 │ nu_plugin_core_textview     │ src/plugins/nu_plugin_core_textview.rs     │ [table 1 rows] \n")])])]),s("p",[e._v("From here, we can always jump back to the directory we were working in before using p (for previous).")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("/bin> p\n")])])]),s("p",[e._v("Let's verify the shells again:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("/home/jonathant/Source/nushell/(simple_list_view)> shells\n───┬────────┬─────────────────────────────────────────────┬─────────────────────────────────\n # │ active │ name                                        │ path \n───┼────────┼─────────────────────────────────────────────┼─────────────────────────────────\n 0 │ X      │ filesystem                                  │ /home/jonathant/Source/nushell/ \n 1 │        │ {/home/jonathant/Source/nushell/Cargo.toml} │ /bin \n───┴────────┴─────────────────────────────────────────────┴─────────────────────────────────\n\n\n")])])]),s("p",[e._v('We are back at the directory we were working in before entering the file "Cargo.toml".')])])}),[],!1,null,null,null);t.default=o.exports}}]);