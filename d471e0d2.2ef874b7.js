(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{111:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return D}));var o=n(0),a=n.n(o);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),u=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=u(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(n),b=o,D=d["".concat(i,".").concat(b)]||d[b]||p[b]||r;return n?a.a.createElement(D,l(l({ref:t},c),{},{components:n})):a.a.createElement(D,l({ref:t},c))}));function D(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=b;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<r;c++)i[c]=n[c];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},99:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return u}));var o=n(3),a=n(7),r=(n(0),n(111)),i={id:"dialog",title:"Dialog"},l={unversionedId:"dialog",id:"dialog",isDocsHomePage:!1,title:"Dialog",description:"A basic button component that should render nicely on any platform. Supports a minimal level of customization.",source:"@site/docs/dialog.md",slug:"/dialog",permalink:"/react-native-noxi/docs/dialog",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/dialog.md",version:"current",sidebar:"someSidebar",previous:{title:"Button",permalink:"/react-native-noxi/docs/button"},next:{title:"FAB",permalink:"/react-native-noxi/docs/fab"}},s=[{value:"Example",id:"example",children:[]},{value:"Properties",id:"properties",children:[{value:"backgroundColorOverlay",id:"backgroundcoloroverlay",children:[]},{value:"children",id:"children",children:[]},{value:"duration",id:"duration",children:[]},{value:"header",id:"header",children:[]},{value:"message",id:"message",children:[]},{value:"show",id:"show",children:[]},{value:"theme",id:"theme",children:[]},{value:"title",id:"title",children:[]}]}],c={rightToc:s};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(o.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"A basic button component that should render nicely on any platform. Supports a minimal level of customization."),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-tsx"}),'import { Dialog } from \'react-native-noxi\';\n\n<Dialog show={showDialog} title="Title" message="Hi all!">\n    <Button size="small" onPress={() => setshowDialog(false)}>\n      close\n    </Button>\n    <Button size="small" onPress={() => setshowDialog(false)}>\n      ok\n  </Button>\n</Dialog>\n')),Object(r.b)("h2",{id:"example"},"Example"),Object(r.b)("div",{className:"snack-player","data-snack-dependencies":"react-native-noxi@*,react-native-dynamic-vector-icons@*,@expo/vector-icons@*","data-snack-name":"Dialog Example","data-snack-description":"Example usage","data-snack-code":"import%20React%2C%20%7B%20useState%20%7D%20from%20'react'%3B%0Aimport%20%7B%20Image%2C%20StyleSheet%20%7D%20from%20'react-native'%3B%0Aimport%20%7B%20Button%2C%20Dialog%2C%20Layout%2C%20SizeBox%20%7D%20from%20'react-native-noxi'%3B%0Aimport%20%7B%0A%20%20LigthTheme%2C%0A%20%20Provider%20as%20ReactNativeNoxiProvider%2C%0A%7D%20from%20'react-native-noxi'%3B%0A%0Aconst%20App%20%3D%20()%20%3D%3E%20%7B%0A%20%20const%20%5BshowDialog1%2C%20setshowDialog1%5D%20%3D%20useState(false)%3B%0A%20%20const%20%5BshowDialog2%2C%20setshowDialog2%5D%20%3D%20useState(false)%3B%0A%20%20const%20%5BshowDialog3%2C%20setshowDialog3%5D%20%3D%20useState(false)%3B%0A%20%20const%20%5BshowDialog4%2C%20setshowDialog4%5D%20%3D%20useState(false)%3B%0A%0A%20%20return%20(%0A%20%20%20%20%3CReactNativeNoxiProvider%20theme%3D%7BLigthTheme%7D%3E%0A%20%20%20%20%3CLayout%0A%20%20%20%20%20%20title%3D%22Dialogs%22%0A%20%20%20%20%20%20containerStyle%3D%7Bstyles.container%7D%0A%20%20%20%20%3E%0A%20%20%20%20%20%20%3CButton%20size%3D%22normal%22%20onPress%3D%7B()%20%3D%3E%20setshowDialog1(true)%7D%3E%0A%20%20%20%20%20%20%20%20show%20dialog%201%0A%20%20%20%20%20%20%3C%2FButton%3E%0A%20%20%20%20%20%20%3CDialog%0A%20%20%20%20%20%20%20%20show%3D%7BshowDialog1%7D%0A%20%20%20%20%20%20%20%20title%3D%22Title%22%0A%20%20%20%20%20%20%20%20header%3D%7B%0A%20%20%20%20%20%20%20%20%20%20%3CImage%0A%20%20%20%20%20%20%20%20%20%20%20%20style%3D%7B%7B%20width%3A%20100%2C%20height%3A%20100%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20source%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20uri%3A%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20'https%3A%2F%2Fimages.squarespace-cdn.com%2Fcontent%2Fv1%2F592e86ee9de4bb6e73d8c154%2F1514032294927-RQFIXIR332YVK2D58E64%2Fke17ZwdGBToddI8pDm48kKDpgNR86wHb9rK2Z-rJDk5Zw-zPPgdn4jUwVcJE1ZvWEtT5uBSRWt4vQZAgTJucoTqqXjS3CfNDSuuf31e0tVFgVnh1ouJBzzcVsowoUcyUM2gKs4UUyTig_7oGFCP1TmQ6l2WM7tn7mqHTODzkmeM%2F32078472-5053adea-baa7-11e7-9034-519002f12ac7.png'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%3CButton%20size%3D%22small%22%20onPress%3D%7B()%20%3D%3E%20setshowDialog1(false)%7D%3E%0A%20%20%20%20%20%20%20%20%20%20close%0A%20%20%20%20%20%20%20%20%3C%2FButton%3E%0A%20%20%20%20%20%20%3C%2FDialog%3E%0A%20%20%20%20%20%20%3CSizeBox%20%2F%3E%0A%20%20%20%20%20%20%3CButton%20size%3D%22normal%22%20onPress%3D%7B()%20%3D%3E%20setshowDialog2(true)%7D%3E%0A%20%20%20%20%20%20%20%20show%20dialog%202%0A%20%20%20%20%20%20%3C%2FButton%3E%0A%20%20%20%20%20%20%3CDialog%20show%3D%7BshowDialog2%7D%20title%3D%22Title%22%3E%0A%20%20%20%20%20%20%20%20%3CButton%20size%3D%22small%22%20onPress%3D%7B()%20%3D%3E%20setshowDialog2(false)%7D%3E%0A%20%20%20%20%20%20%20%20%20%20close%0A%20%20%20%20%20%20%20%20%3C%2FButton%3E%0A%20%20%20%20%20%20%20%20%3CButton%20size%3D%22small%22%20onPress%3D%7B()%20%3D%3E%20setshowDialog2(false)%7D%3E%0A%20%20%20%20%20%20%20%20%20%20ok%0A%20%20%20%20%20%20%20%20%3C%2FButton%3E%0A%20%20%20%20%20%20%3C%2FDialog%3E%0A%20%20%20%20%20%20%3CSizeBox%20%2F%3E%0A%20%20%20%20%20%20%3CButton%20size%3D%22normal%22%20onPress%3D%7B()%20%3D%3E%20setshowDialog3(true)%7D%3E%0A%20%20%20%20%20%20%20%20show%20dialog%203%0A%20%20%20%20%20%20%3C%2FButton%3E%0A%20%20%20%20%20%20%3CDialog%0A%20%20%20%20%20%20%20%20show%3D%7BshowDialog3%7D%0A%20%20%20%20%20%20%20%20title%3D%22LOL%22%0A%20%20%20%20%20%20%20%20message%3D%22long%20very%20long%20message%20that%20says%20something%20that%20is%20matter%22%0A%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%3CButton%20size%3D%22small%22%20onPress%3D%7B()%20%3D%3E%20setshowDialog3(false)%7D%3E%0A%20%20%20%20%20%20%20%20%20%20ok%0A%20%20%20%20%20%20%20%20%3C%2FButton%3E%0A%20%20%20%20%20%20%3C%2FDialog%3E%0A%20%20%20%20%20%20%3CSizeBox%20%2F%3E%0A%20%20%20%20%20%20%3CButton%20size%3D%22normal%22%20onPress%3D%7B()%20%3D%3E%20setshowDialog4(true)%7D%3E%0A%20%20%20%20%20%20%20%20show%20dialog%204%0A%20%20%20%20%20%20%3C%2FButton%3E%0A%20%20%20%20%20%20%3CDialog%0A%20%20%20%20%20%20%20%20show%3D%7BshowDialog4%7D%0A%20%20%20%20%20%20%20%20backgroundColorOverlay%3D%22red%22%0A%20%20%20%20%20%20%20%20title%3D%22Red%20bg%22%0A%20%20%20%20%20%20%20%20message%3D%22change%20overlay%22%0A%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%3CButton%20size%3D%22small%22%20onPress%3D%7B()%20%3D%3E%20setshowDialog4(false)%7D%3E%0A%20%20%20%20%20%20%20%20%20%20ok%0A%20%20%20%20%20%20%20%20%3C%2FButton%3E%0A%20%20%20%20%20%20%3C%2FDialog%3E%0A%20%20%20%20%3C%2FLayout%3E%0A%20%20%20%20%3C%2FReactNativeNoxiProvider%3E%0A%20%20)%3B%0A%7D%3B%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20container%3A%20%7B%0A%20%20%20%20flex%3A%201%2C%0A%20%20%20%20justifyContent%3A%20'center'%2C%0A%20%20%20%20alignItems%3A%20'center'%2C%0A%20%20%7D%2C%0A%7D)%3B%0A%0Aexport%20default%20App%3B%0A","data-snack-platform":"web","data-snack-supported-platforms":"ios,android","data-snack-theme":"light","data-snack-preview":"true"}),Object(r.b)("hr",null),Object(r.b)("h1",{id:"reference"},"Reference"),Object(r.b)("h2",{id:"properties"},"Properties"),Object(r.b)("h3",{id:"backgroundcoloroverlay"},"backgroundColorOverlay"),Object(r.b)("p",null,"\u2022 ",Object(r.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(r.b)("strong",{parentName:"p"},"backgroundColorOverlay"),": undefined ","|"," string"),Object(r.b)("hr",null),Object(r.b)("h3",{id:"children"},"children"),Object(r.b)("p",null,"\u2022 ",Object(r.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(r.b)("strong",{parentName:"p"},"children"),": ReactNode"),Object(r.b)("hr",null),Object(r.b)("h3",{id:"duration"},"duration"),Object(r.b)("p",null,"\u2022 ",Object(r.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(r.b)("strong",{parentName:"p"},"duration"),": undefined ","|"," string"),Object(r.b)("hr",null),Object(r.b)("h3",{id:"header"},"header"),Object(r.b)("p",null,"\u2022 ",Object(r.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(r.b)("strong",{parentName:"p"},"header"),": ReactNode"),Object(r.b)("hr",null),Object(r.b)("h3",{id:"message"},"message"),Object(r.b)("p",null,"\u2022 ",Object(r.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(r.b)("strong",{parentName:"p"},"message"),": undefined ","|"," string"),Object(r.b)("hr",null),Object(r.b)("h3",{id:"show"},"show"),Object(r.b)("p",null,"\u2022 ",Object(r.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(r.b)("strong",{parentName:"p"},"show"),": undefined ","|"," false ","|"," true"),Object(r.b)("hr",null),Object(r.b)("h3",{id:"theme"},"theme"),Object(r.b)("p",null,"\u2022  ",Object(r.b)("strong",{parentName:"p"},"theme"),": ","[Theme]"),Object(r.b)("hr",null),Object(r.b)("h3",{id:"title"},"title"),Object(r.b)("p",null,"\u2022 ",Object(r.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(r.b)("strong",{parentName:"p"},"title"),": undefined ","|"," string"))}u.isMDXComponent=!0}}]);