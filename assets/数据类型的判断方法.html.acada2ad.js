import{_ as n,a as s,c as a,h as o}from"./app.86e5e8f9.js";const t={},p=o(`<h3 id="typeof" tabindex="-1"><a class="header-anchor" href="#typeof" aria-hidden="true">#</a> typeof</h3><p>typeof \u68C0\u6D4B\u53D8\u91CF\u7684\u6570\u636E\u7C7B\u578B\uFF0C\u8FD4\u56DE\u7684\u662F\u8868\u793A\u8BE5\u7C7B\u578B\u7684\u5B57\u7B26\u4E32\u3002</p><p>\u5BF9\u4E8E\u57FA\u672C\u6570\u636E\u7C7B\u578B\uFF0C\u9664\u4E86null\u8FD4\u56DE\u7684\u662Fobject,\u5176\u5B83\u90FD\u53EF\u4EE5\u8FD4\u56DE\u6B63\u786E\u7C7B\u578B\uFF1B</p><p>\u5BF9\u4E8E\u5F15\u7528\u6570\u636E\u7C7B\u578B\uFF08\u5BF9\u8C61\uFF09\u6765\u8BF4\uFF0C\u9664\u4E86\u51FD\u6570\u8FD4\u56DE\u7684\u662Ffunction\uFF0C\u5176\u5B83\u90FD\u8FD4\u56DEobject\uFF0C\u56E0\u6B64\u4F7F\u7528typeof\u65E0\u6CD5\u6B63\u786E\u5224\u65AD\u5F15\u7528\u6570\u636E\u7C7B\u578B</p><pre><code>console.log(typeof 2);               // number
console.log(typeof true);            // boolean
console.log(typeof &#39;str&#39;);           // string
console.log(typeof undefined);       // undefined
console.log(typeof null);            // object     null \u7684\u6570\u636E\u7C7B\u578B\u88AB typeof \u89E3\u91CA\u4E3A object
-----------------------------------------------------------------
console.log(typeof []);              // object     []\u6570\u7EC4\u7684\u6570\u636E\u7C7B\u578B\u5728 typeof \u4E2D\u88AB\u89E3\u91CA\u4E3A object
console.log(typeof function(){});    // function
console.log(typeof {});              // object
</code></pre><h3 id="instanceof" tabindex="-1"><a class="header-anchor" href="#instanceof" aria-hidden="true">#</a> instanceof</h3><p><code>instanceof</code>\xA0\u8FD4\u56DE\u4E00\u4E2A\u5E03\u5C14\u503C\u3002\u7528\u6765\u5224\u65AD\u5BF9\u8C61\u7684\u7C7B\u578B\uFF0C\u539F\u7406\u662F\u68C0\u6D4B\u6784\u9020\u51FD\u6570\u7684\xA0<code>prototype</code>\xA0\u5C5E\u6027\u662F\u5426\u51FA\u73B0\u5728\u67D0\u4E2A\u5B9E\u4F8B\u5BF9\u8C61\u7684\u539F\u578B\u94FE\u4E0A\u3002\u4E5F\u5C31\u662F\u5224\u65AD\u5BF9\u8C61\u662F\u5426\u662F\u67D0\u4E00\u6570\u636E\u7C7B\u578B\uFF08\u5982Array\uFF09\u7684\u5B9E\u4F8B</p><p>instanceof\u4E0D\u9002\u7528\u4E8E\u5224\u65AD\u57FA\u672C\u6570\u636E\u7C7B\u578B\uFF0C\u59CB\u7EC8\u8FD4\u56DEfalse</p><pre><code>object instanceof constructor
//object  \u67D0\u4E2A\u5B9E\u4F8B\u5BF9\u8C61
//constructor  \u67D0\u4E2A\u6784\u9020\u51FD\u6570

console.log(2 instanceof Number);                    // false
console.log(true instanceof Boolean);                // false 
console.log(&#39;str&#39; instanceof String);                // false  
----------------------------------------------------------------
//\u5F15\u7528\u6570\u636E\u7C7B\u578B\u7684\u503C\u90FD\u662Fobject\u7684\u5B9E\u4F8B\uFF0C\u5728\u68C0\u6D4B\u4E00\u4E2A\u5F15\u7528\u7C7B\u578B\u503C\u548CObject\u6784\u9020\u51FD\u6570\u65F6\uFF0Cinstanceof\u64CD\u4F5C\u7B26\u59CB\u7EC8\u8FD4\u56DEtrue\u3002
console.log([] instanceof Array);                    // true
console.log(function(){} instanceof Function);       // true
console.log({} instanceof Object);                   // true
</code></pre><h3 id="object-prototype-tostring" tabindex="-1"><a class="header-anchor" href="#object-prototype-tostring" aria-hidden="true">#</a> Object.prototype.toString()</h3><p>Object.prototype.toString()\u65B9\u6CD5\u662FObject \u5BF9\u8C61\u7684\u539F\u578B\u65B9\u6CD5\uFF0C \u8FD4\u56DE\u5BF9\u8C61\u7684\u7C7B\u578B\u5B57\u7B26\u4E32<code>&#39;[object Object]&#39;</code>\uFF0C\u7B2C\u4E8C\u4E2AObject\u8868\u793A\u8BE5\u503C\u7684\u6570\u636E\u7C7B\u578B\u3002</p><p>\u57FA\u672C\u6570\u636E\u7C7B\u578B\u9700\u8981\u4F7F\u7528\u51FD\u6570\u7684call\u6216\u8005apply\u65B9\u6CD5\u5BF9\u57FA\u672C\u6570\u636E\u7C7B\u578B\u8FDB\u884C\u5305\u88C5\u624D\u80FD\u6B63\u786E\u5224\u65AD\u3002</p><p>Object.prototype.toString()\u65B9\u6CD5\u9002\u7528\u4E8E\u5224\u65AD\u6240\u6709\u6570\u636E\u7C7B\u578B</p><pre><code>//\u7ED3\u679C\u90FD\u4E3Atrue
Object.prototype.toString.call({})  ===  &#39;[object Object]&#39;   
Object.prototype.toString.call([])   ===  &#39;[object Array]&#39;\u3000\u3000
Object.prototype.toString.call(() =&gt; {})  ===  &#39;[object Function]&#39;\u3000\u3000
Object.prototype.toString.call(&#39;somestring&#39;)  ===  &#39;[object String]&#39;\u3000\u3000
Object.prototype.toString.call(1)  ===  &#39;[object Number]&#39;\u3000\u3000
Object.prototype.toString.call(true)  ===  &#39;[object Boolean]&#39;\u3000\u3000
Object.prototype.toString.call(Symbol()) ===  &#39;[object Symbol]&#39;\u3000\u3000
Object.prototype.toString.call(null)   ===  &#39;[object Null]&#39;\u3000\u3000
Object.prototype.toString.call(undefined)  === &#39;[object Undefined]&#39;\u3000
</code></pre><h4 id="\u6269\u5C55-call-\u548C-apply" tabindex="-1"><a class="header-anchor" href="#\u6269\u5C55-call-\u548C-apply" aria-hidden="true">#</a> \u6269\u5C55\uFF1Acall\xA0\u548C\xA0apply</h4><p><code>call</code>\xA0\u548C\xA0<code>apply</code>\xA0\u5B9E\u73B0\u51FD\u6570\u8C03\u7528\uFF0C\u5C06\u4E00\u4E2A\u5BF9\u8C61\u7684\u65B9\u6CD5\u4EA4\u7ED9\u53E6\u4E00\u4E2A\u5BF9\u8C61\u6765\u6267\u884C\uFF0C\u5E76\u4E14\u662F\u7ACB\u5373\u6267\u884C\u7684\uFF0C\u90FD\u53EF\u4EE5\u6539\u53D8\xA0<code>this</code>\xA0\u7684\u6307\u5411\u3002\u4F5C\u7528\u90FD\u662F\u76F8\u540C\u7684\uFF0C\u53EA\u662F\u4F20\u53C2\u7684\u65B9\u5F0F\u4E0D\u540C\u3002</p><p><strong>call\u7684\u5199\u6CD5\uFF1A</strong><code>function.call(thisArg, arg1, arg2, ...)</code></p><ul><li>\u8C03\u7528 call \u7684\u5BF9\u8C61\uFF0C\u5FC5\u987B\u662F\u4E2A\u51FD\u6570</li><li>\u7B2C\u4E00\u4E2A\u53C2\u6570\u4E3A\u76EE\u6807\u5BF9\u8C61\u5916\uFF0C\u7B2C\u4E8C\u4E2A\u53C2\u6570\u5F00\u59CB\u53EF\u4EE5\u63A5\u6536\u4E00\u4E2A\u53C2\u6570\u5217\u8868 Object.prototype.toString()\u65B9\u6CD5\u9002\u7528\u4E8E\u5224\u65AD\u6240\u6709\u7684\u6570\u636E\u7C7B\u578B</li></ul><p><strong>apply\u7684\u5199\u6CD5\uFF1A</strong><code>function.apply(thisArg , [ argsArray])</code></p><ul><li>\u8C03\u7528 apply \u7684\u5BF9\u8C61\uFF0C\u5FC5\u987B\u662F\u4E2A\u51FD\u6570</li><li>\u53EA\u63A5\u6536\u4E24\u4E2A\u53C2\u6570\uFF0C\u7B2C\u4E00\u4E2A\u53C2\u6570\u4E3A\u76EE\u6807\u5BF9\u8C61\u5916\uFF0C\u7B2C\u4E8C\u4E2A\u53C2\u6570\u53EA\u63A5\u53D7\u4E00\u4E2A\u5305\u542B\u591A\u4E2A\u53C2\u6570\u7684\u6570\u7EC4\u3002</li></ul><h3 id="constructor\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#constructor\u5C5E\u6027" aria-hidden="true">#</a> constructor\u5C5E\u6027</h3><p>constructor\u662Fprototype\u5BF9\u8C61\u4E0A\u7684\u5C5E\u6027\uFF0C\u6307\u5411prototype\u5BF9\u8C61\u6240\u5728\u7684\u6784\u9020\u51FD\u6570\u3002null\u548Cundefined\u6CA1\u6709constructor\u5B58\u5728\uFF0C\u56E0\u6B64\u4F7F\u7528constructor\u65E0\u6CD5\u5224\u65AD\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">//number\u3001string\u3001boolean\u4E09\u79CD\u6570\u636E\u7C7B\u578B\u6709\u5BF9\u5E94\u7684Number\u3001String\u3001Boolean\u4E09\u4E2A\u539F\u751F\u5BF9\u8C61(\u5305\u88C5\u5BF9\u8C61)\u3002\u56E0\u6B64\uFF0C\u4E5F\u53EF\u7528 \`constructor\`\u8FDB\u884C\u5224\u65AD</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">.</span>constructor <span class="token operator">===</span> Number<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">.</span>constructor <span class="token operator">===</span> Boolean<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token string">&#39;str&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>constructor <span class="token operator">===</span> String<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">.</span>constructor <span class="token operator">===</span> Array<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span>constructor <span class="token operator">===</span> Function<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span>constructor <span class="token operator">===</span> Object<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>

<span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span>
<span class="token keyword">function</span> <span class="token function">Fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token class-name">Fn</span><span class="token punctuation">.</span>prototype<span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> f<span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">Fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>f<span class="token punctuation">.</span>constructor<span class="token operator">===</span>Fn<span class="token punctuation">)</span><span class="token punctuation">;</span>    <span class="token comment">// false\uFF0C\u51FD\u6570Fn\u7684\u539F\u578B\u6539\u53D8\u4E86\uFF0Cconstructor\u4E5F\u4F1A\u53D1\u751F\u6539\u53D8</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>f<span class="token punctuation">.</span>constructor<span class="token operator">===</span>Array<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true </span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6CE8\uFF1A<code>constructor</code>\xA0\u5C5E\u6027\u53EF\u51C6\u786E\u7684\u5224\u65AD\u5BF9\u8C61\u5B9E\u4F8B\u662F\u7531\u54EA\u4E2A\u6784\u9020\u51FD\u6570\u751F\u6210\u7684\uFF0C\u4F46\u5982\u679C\u4FEE\u6539\u4E86\u539F\u578B\u5BF9\u8C61<code>prototype</code>\uFF0C\u4F1A\u9020\u6210<code>constructor</code>\u5C5E\u6027\u6307\u5411\u4E0D\u51C6\u786E\u3002</p>`,24),e=[p];function c(l,r){return s(),a("div",null,e)}var i=n(t,[["render",c],["__file","\u6570\u636E\u7C7B\u578B\u7684\u5224\u65AD\u65B9\u6CD5.html.vue"]]);export{i as default};
