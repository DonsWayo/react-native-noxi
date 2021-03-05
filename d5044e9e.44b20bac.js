(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{112:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return b}));var r=n(3),a=n(7),o=(n(0),n(124)),i={id:"avatar",title:"Avatar"},c={unversionedId:"avatar",id:"version-1.x.x/avatar",isDocsHomePage:!1,title:"Avatar",description:"A basic button component that should render nicely on any platform. Supports a minimal level of customization.",source:"@site/versioned_docs/version-1.x.x/avatar.md",slug:"/avatar",permalink:"/react-native-noxi/docs/avatar",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/versioned_docs/version-1.x.x/avatar.md",version:"1.x.x",sidebar:"version-1.x.x/someSidebar",previous:{title:"Usage",permalink:"/react-native-noxi/docs/doc2"},next:{title:"Button",permalink:"/react-native-noxi/docs/button"}},l=[{value:"Example",id:"example",children:[]},{value:"Properties",id:"properties",children:[{value:"color",id:"color",children:[]},{value:"onPress",id:"onpress",children:[]},{value:"size",id:"size",children:[]},{value:"src",id:"src",children:[]},{value:"style",id:"style",children:[]},{value:"styleText",id:"styletext",children:[]},{value:"text",id:"text",children:[]},{value:"textColor",id:"textcolor",children:[]},{value:"theme",id:"theme",children:[]},{value:"type",id:"type",children:[]}]}],p={rightToc:l};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"A basic button component that should render nicely on any platform. Supports a minimal level of customization."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-tsx"}),'import { Avatar } from \'react-native-noxi\';\n\n<Avatar text="Jhon Doe" type="round" />\n')),Object(o.b)("h2",{id:"example"},"Example"),Object(o.b)("div",{className:"snack-player","data-snack-dependencies":"react-native-noxi@*,react-native-dynamic-vector-icons@*,@expo/vector-icons@*","data-snack-name":"Button Example","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20StyleSheet%2C%20View%20%7D%20from%20'react-native'%3B%0Aimport%20%7B%20Avatar%2C%20Layout%2C%20SizeBox%20%7D%20from%20'react-native-noxi'%3B%0A%0Aconst%20App%20%3D%20()%20%3D%3E%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%0A%20%20%20%20%20%20%3CAvatar%20text%3D%22Jhon%20Doe%22%20type%3D%22round%22%20%2F%3E%0A%20%20%20%20%20%20%3CSizeBox%20%2F%3E%0A%20%20%20%20%20%20%3CSizeBox%20%2F%3E%0A%20%20%20%20%20%20%3CAvatar%0A%20%20%20%20%20%20%20%20src%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20uri%3A'https%3A%2F%2Freactnative.dev%2Fimg%2Ftiny_logo.png'%2C%0A%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20type%3D%22round%22%0A%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%3CSizeBox%20%2F%3E%0A%20%20%20%20%20%20%3CAvatar%0A%20%20%20%20%20%20%20%20src%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20uri%3A'https%3A%2F%2Freactnative.dev%2Fimg%2Ftiny_logo.png'%2C%0A%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20type%3D%22square%22%0A%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%3C%2FView%3E%0A%20%20)%3B%0A%7D%3B%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20container%3A%20%7B%0A%20%20%20%20flex%3A%201%2C%0A%20%20%20%20justifyContent%3A%20'center'%2C%0A%20%20%20%20alignItems%3A%20'center'%2C%0A%20%20%7D%2C%0A%7D)%3B%0A%0Aexport%20default%20App%3B%0A","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true"}),Object(o.b)("hr",null),Object(o.b)("h1",{id:"reference"},"Reference"),Object(o.b)("h2",{id:"properties"},"Properties"),Object(o.b)("h3",{id:"color"},"color"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(o.b)("strong",{parentName:"p"},"color"),": undefined ","|"," string"),Object(o.b)("hr",null),Object(o.b)("h3",{id:"onpress"},"onPress"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(o.b)("strong",{parentName:"p"},"onPress"),": undefined ","|"," (event: GestureResponderEvent) => void"),Object(o.b)("hr",null),Object(o.b)("h3",{id:"size"},"size"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(o.b)("strong",{parentName:"p"},"size"),": undefined ","|"," number"),Object(o.b)("hr",null),Object(o.b)("h3",{id:"src"},"src"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(o.b)("strong",{parentName:"p"},"src"),": ImageSourcePropType"),Object(o.b)("hr",null),Object(o.b)("h3",{id:"style"},"style"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(o.b)("strong",{parentName:"p"},"style"),": ",Object(o.b)("inlineCode",{parentName:"p"},"StyleProp<ViewStyle>")),Object(o.b)("hr",null),Object(o.b)("h3",{id:"styletext"},"styleText"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(o.b)("strong",{parentName:"p"},"styleText"),": ",Object(o.b)("inlineCode",{parentName:"p"},"StyleProp<TextStyle>")),Object(o.b)("hr",null),Object(o.b)("h3",{id:"text"},"text"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(o.b)("strong",{parentName:"p"},"text"),": any"),Object(o.b)("hr",null),Object(o.b)("h3",{id:"textcolor"},"textColor"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(o.b)("strong",{parentName:"p"},"textColor"),": undefined ","|"," string"),Object(o.b)("hr",null),Object(o.b)("h3",{id:"theme"},"theme"),Object(o.b)("p",null,"\u2022  ",Object(o.b)("strong",{parentName:"p"},"theme"),": ","[Theme]"),Object(o.b)("hr",null),Object(o.b)("h3",{id:"type"},"type"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(o.b)("strong",{parentName:"p"},"type"),': \\"round\\" ',"|",' \\"square\\"'))}b.isMDXComponent=!0},124:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),b=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=b(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=b(n),d=r,m=s["".concat(i,".").concat(d)]||s[d]||u[d]||o;return n?a.a.createElement(m,c(c({ref:t},p),{},{components:n})):a.a.createElement(m,c({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var p=2;p<o;p++)i[p]=n[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);