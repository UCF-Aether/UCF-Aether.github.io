(this["webpackJsonpucf-aether.github.io"]=this["webpackJsonpucf-aether.github.io"]||[]).push([[56],{652:function(t,e,a){"use strict";function n(t){!function(t){t.languages.http={"request-line":{pattern:/^(?:POST|GET|PUT|DELETE|OPTIONS|PATCH|TRACE|CONNECT)\s(?:https?:\/\/|\/)\S+\sHTTP\/[0-9.]+/m,inside:{property:/^(?:POST|GET|PUT|DELETE|OPTIONS|PATCH|TRACE|CONNECT)\b/,"attr-name":/:\w+/}},"response-status":{pattern:/^HTTP\/1.[01] \d+.*/m,inside:{property:{pattern:/(^HTTP\/1.[01] )\d+.*/i,lookbehind:!0}}},"header-name":{pattern:/^[\w-]+:(?=.)/m,alias:"keyword"}};var e,a=t.languages,n={"application/javascript":a.javascript,"application/json":a.json||a.javascript,"application/xml":a.xml,"text/xml":a.xml,"text/html":a.html,"text/css":a.css},i={"application/json":!0,"application/xml":!0};function s(t){var e=t.replace(/^[a-z]+\//,"");return"(?:"+t+"|"+("\\w+/(?:[\\w.-]+\\+)+"+e+"(?![+\\w.-])")+")"}for(var p in n)if(n[p]){e=e||{};var r=i[p]?s(p):p;e[p]={pattern:RegExp("(content-type:\\s*"+r+"[\\s\\S]*?)(?:\\r?\\n|\\r){2}[\\s\\S]*","i"),lookbehind:!0,inside:{rest:n[p]}}}e&&t.languages.insertBefore("http","header-name",e)}(t)}t.exports=n,n.displayName="http",n.aliases=[]}}]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_http.66b49463.chunk.js.map