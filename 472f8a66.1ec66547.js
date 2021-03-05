(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{124:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return D}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(n),d=r,D=p["".concat(i,".").concat(d)]||p[d]||m[d]||o;return n?a.a.createElement(D,c(c({ref:t},l),{},{components:n})):a.a.createElement(D,c({ref:t},l))}));function D(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},86:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return u}));var r=n(3),a=n(7),o=(n(0),n(124)),i={id:"layout",title:"Layout"},c={unversionedId:"layout",id:"layout",isDocsHomePage:!1,title:"Layout",description:"A basic button component that should render nicely on any platform. Supports a minimal level of customization.",source:"@site/docs/layout.md",slug:"/layout",permalink:"/react-native-noxi/docs/next/layout",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/layout.md",version:"current",sidebar:"someSidebar",previous:{title:"Select",permalink:"/react-native-noxi/docs/next/select"},next:{title:"Text",permalink:"/react-native-noxi/docs/next/text"}},s=[{value:"Example",id:"example",children:[]}],l={rightToc:s};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"A basic button component that should render nicely on any platform. Supports a minimal level of customization."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-tsx"}),"import { Layout } from 'react-native-noxi';\n\n <Layout\n      title=\"ExampleLayout\"\n      canGoBack\n      enabledPullToRefresh={true}\n      refreshing={refreshing}\n      onRefresh={onRefresh}\n      containerStyle={{ flexGrow: 1, padding: 8 }}\n      onPressBackIcon={() => navigation.goBack()}\n    >\n\n    </Layout>\n")),Object(o.b)("h2",{id:"example"},"Example"),Object(o.b)("div",{className:"snack-player","data-snack-dependencies":"react-native-noxi@*,react-native-dynamic-vector-icons@*,@expo/vector-icons@*","data-snack-name":"Layout Example","data-snack-description":"Example usage","data-snack-code":"import%20React%2C%20%7B%20useEffect%2C%20useState%20%7D%20from%20'react'%3B%0Aimport%20%7B%20FlatList%20%7D%20from%20'react-native'%3B%0Aimport%20%7B%20Layout%2C%20ListItem%2C%20Avatar%20%7D%20from%20'react-native-noxi'%3B%0Aimport%20Icon%20from%20'react-native-dynamic-vector-icons'%3B%0A%0Aconst%20ListScreen%20%3D%20(%7B%20navigation%20%7D)%20%3D%3E%20%7B%0A%20%20const%20%5Bstate%2C%20setstate%5D%20%3D%20useState(%5B%5D)%3B%0A%20%20const%20%5Brefreshing%2C%20setRefreshing%5D%20%3D%20React.useState(false)%3B%0A%0A%20%20const%20wait%20%3D%20(timeout)%20%3D%3E%20%7B%0A%20%20%20%20return%20new%20Promise((resolve)%20%3D%3E%20%7B%0A%20%20%20%20%20%20setTimeout(resolve%2C%20timeout)%3B%0A%20%20%20%20%7D)%3B%0A%20%20%7D%3B%0A%0A%20%20function%20getData()%20%7B%0A%20%20%20%20fetch('https%3A%2F%2Fjsonplaceholder.typicode.com%2Ftodos%3F_limit%3D1000')%0A%20%20%20%20%20%20.then((res)%20%3D%3E%20res.json())%0A%20%20%20%20%20%20.then((data)%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20setstate(data)%3B%0A%20%20%20%20%20%20%7D)%0A%20%20%20%20%20%20.catch((err)%20%3D%3E%20console.log(err))%3B%0A%20%20%7D%0A%0A%20%20const%20onRefresh%20%3D%20()%20%3D%3E%20%7B%0A%20%20%20%20setRefreshing(true)%3B%0A%0A%20%20%20%20wait(2000).then(()%20%3D%3E%20setRefreshing(false))%3B%0A%20%20%7D%3B%0A%0A%20%20useEffect(()%20%3D%3E%20%7B%0A%20%20%20%20getData()%3B%0A%20%20%7D%2C%20%5B%5D)%3B%0A%0A%20%20const%20Item%20%3D%20(%7B%20title%2C%20id%20%7D)%20%3D%3E%20(%0A%20%20%20%20%3CListItem%0A%20%20%20%20%20%20title%3D%7Btitle%7D%0A%20%20%20%20%20%20subTitle%3D%7Btitle%7D%0A%20%20%20%20%20%20itemLeft%3D%7B%3CAvatar%20text%3D%7Bid.toString()%7D%20type%3D%22round%22%20size%3D%7B40%7D%20%2F%3E%7D%0A%20%20%20%20%20%20itemRight%3D%7B%3CIcon%20name%3D%22delete%22%20type%3D%22ionicons%22%20size%3D%7B28%7D%20color%3D%22red%22%20%2F%3E%7D%0A%20%20%20%20%2F%3E%0A%20%20)%3B%0A%0A%20%20const%20renderItem%20%3D%20(%7B%20item%20%7D)%20%3D%3E%20%3CItem%20title%3D%7Bitem.title%7D%20id%3D%7Bitem.id%7D%20%2F%3E%3B%0A%0A%20%20return%20(%0A%20%20%20%20%3CLayout%0A%20%20%20%20%20%20title%3D%22ExampleLayout%22%0A%20%20%20%20%20%20canGoBack%0A%20%20%20%20%20%20enabledPullToRefresh%3D%7Btrue%7D%0A%20%20%20%20%20%20refreshing%3D%7Brefreshing%7D%0A%20%20%20%20%20%20onRefresh%3D%7BonRefresh%7D%0A%20%20%20%20%20%20containerStyle%3D%7B%7B%20flexGrow%3A%201%2C%20padding%3A%208%20%7D%7D%0A%20%20%20%20%20%20onPressBackIcon%3D%7B()%20%3D%3E%20navigation.goBack()%7D%0A%20%20%20%20%3E%0A%20%20%20%20%20%20%3CFlatList%0A%20%20%20%20%20%20%20%20data%3D%7Bstate%7D%0A%20%20%20%20%20%20%20%20contentContainerStyle%3D%7B%7B%20flex%3A%201%20%7D%7D%0A%20%20%20%20%20%20%20%20style%3D%7B%7B%20flex%3A%201%20%7D%7D%0A%20%20%20%20%20%20%20%20nestedScrollEnabled%0A%20%20%20%20%20%20%20%20renderItem%3D%7BrenderItem%7D%0A%20%20%20%20%20%20%20%20keyExtractor%3D%7B(item)%20%3D%3E%20item.id.toString()%7D%0A%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%3C%2FLayout%3E%0A%20%20)%3B%0A%7D%3B%0A%0Aexport%20default%20ListScreen%3B%0A%0A","data-snack-platform":"web","data-snack-supported-platforms":"ios,android","data-snack-theme":"light","data-snack-preview":"true"}),Object(o.b)("hr",null),Object(o.b)("hr",null))}u.isMDXComponent=!0}}]);