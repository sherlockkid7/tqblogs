import{_ as n,a as s,c as a,h as e}from"./app.86e5e8f9.js";const i={},l=e(`<h2 id="\u4E24\u680F\u5E03\u5C40" tabindex="-1"><a class="header-anchor" href="#\u4E24\u680F\u5E03\u5C40" aria-hidden="true">#</a> \u4E24\u680F\u5E03\u5C40</h2><p>\u5C31\u662F\u4E00\u4E2A\u8FB9\u680F\uFF0C\u4E00\u4E2A\u4E3B\u680F\uFF0C\u8FB9\u680F\u5BBD\u5EA6\u56FA\u5B9A\uFF0C\u4E3B\u680F\u6839\u636E\u8BBE\u5907\u5BBD\u5EA6\uFF0C\u53D8\u5BBD\u6216\u8005\u53D8\u7A84</p><p><img src="https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/7d3f7a152e444111a0c18a6b8a57e15b~tplv-k3u1fbpfcp-watermark.image?" alt="image.png"></p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>container<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>left<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>left<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>right<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>right<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_1-\u6D6E\u52A8\u3001bfc" tabindex="-1"><a class="header-anchor" href="#_1-\u6D6E\u52A8\u3001bfc" aria-hidden="true">#</a> 1. \u6D6E\u52A8\u3001BFC</h4><p>\u901A\u8FC7\u8BBE\u7F6E\xA0<code>overflow:hidden</code>\xA0\u89E6\u53D1\xA0<code>BFC</code>\xA0\uFF0CBFC\u7684\u533A\u57DF\u4E0D\u4F1A\u4E0E\u6D6E\u52A8\u5143\u7D20\u7684\u533A\u57DF\u91CD\u53E0</p><blockquote><p>BFC\uFF08 Block Formatting Context \uFF09\u5373<code>\u5757\u7EA7\u683C\u5F0F\u4E0A\u4E0B\u6587</code>\uFF0C\u7B80\u5355\u7684\u8BF4\uFF0CBFC\u662F\u9875\u9762\u4E0A\u7684\u4E00\u4E2A\u9694\u79BB\u7684\u72EC\u7ACB\u5BB9\u5668\uFF0C\u5176\u5185\u90E8\u5143\u7D20\u548C\u5916\u90E8\u5143\u7D20\u4E0D\u4F1A\u76F8\u4E92\u5F71\u54CD</p></blockquote><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">.</span>left<span class="token punctuation">{</span>
    <span class="token literal-property property">width</span><span class="token operator">:</span> 200px
    <span class="token literal-property property">float</span><span class="token operator">:</span> left<span class="token punctuation">;</span>
    background<span class="token operator">-</span>color<span class="token operator">:</span> blue<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token punctuation">.</span>right<span class="token punctuation">{</span>
    <span class="token comment">/* \u89E6\u53D1BFC */</span>
    <span class="token literal-property property">overflow</span><span class="token operator">:</span> hidden<span class="token punctuation">;</span>
    background<span class="token operator">-</span>color<span class="token operator">:</span> pink<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-flex\u5E03\u5C40" tabindex="-1"><a class="header-anchor" href="#_2-flex\u5E03\u5C40" aria-hidden="true">#</a> 2. Flex\u5E03\u5C40</h4><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">.</span>container<span class="token punctuation">{</span>
    <span class="token literal-property property">display</span><span class="token operator">:</span> flex<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token punctuation">.</span>left<span class="token punctuation">{</span>
    <span class="token literal-property property">width</span><span class="token operator">:</span> 200px<span class="token punctuation">;</span>
    background<span class="token operator">-</span>color<span class="token operator">:</span> blue<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token punctuation">.</span>right<span class="token punctuation">{</span>
    <span class="token literal-property property">flex</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">;</span>
    background<span class="token operator">-</span>color<span class="token operator">:</span> pink<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-grid\u5E03\u5C40" tabindex="-1"><a class="header-anchor" href="#_3-grid\u5E03\u5C40" aria-hidden="true">#</a> 3. Grid\u5E03\u5C40</h4><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code> <span class="token punctuation">.</span>container <span class="token punctuation">{</span>
    <span class="token literal-property property">display</span><span class="token operator">:</span> grid<span class="token punctuation">;</span>
    grid<span class="token operator">-</span>template<span class="token operator">-</span>columns<span class="token operator">:</span> 200px 1fr<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token punctuation">.</span>left<span class="token punctuation">{</span>
    background<span class="token operator">-</span>color<span class="token operator">:</span> blue<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token punctuation">.</span>right<span class="token punctuation">{</span>
    background<span class="token operator">-</span>color<span class="token operator">:</span> pink<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6CE8\uFF1A <code>grid-template-columns</code>\u6307\u5B9A\u9875\u9762\u5206\u6210\u4E24\u5217\u3002\u7B2C\u4E00\u5217\u7684\u5BBD\u5EA6\u662F200px\uFF1B\u7B2C\u4E8C\u5217\u4E3A<code>1fr</code>\uFF0C\u5373\u6240\u6709\u5269\u4F59\u5BBD\u5EA6\u3002</p><h2 id="\u4E09\u680F\u5E03\u5C40" tabindex="-1"><a class="header-anchor" href="#\u4E09\u680F\u5E03\u5C40" aria-hidden="true">#</a> \u4E09\u680F\u5E03\u5C40</h2><p>\u4E2D\u95F4\u81EA\u9002\u5E94\uFF0C\u4E24\u8FB9\u5B9A\u5BBD</p><p><img src="https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/cef696a0ac4b41239f755a58190b5b72~tplv-k3u1fbpfcp-watermark.image?" alt="image.png"></p><h4 id="_1-\u5723\u676F\u5E03\u5C40" tabindex="-1"><a class="header-anchor" href="#_1-\u5723\u676F\u5E03\u5C40" aria-hidden="true">#</a> 1. \u5723\u676F\u5E03\u5C40</h4><ul><li>\u4E09\u8005\u90FD\u8BBE\u7F6E\u5411\u5DE6\u6D6E\u52A8</li><li>\u8BBE\u7F6E\u4E2D\u95F4\u90E8\u5206\u5BBD\u5EA6\u4E3A100%;</li><li>\u8BBE\u7F6E\u8D1F\u8FB9\u8DDD\uFF0C left\u8BBE\u7F6E\u8D1F\u5DE6\u8FB9\u8DDD\u4E3A100%, right\u8BBE\u7F6E\u8D1F\u5DE6\u8FB9\u8DDD\u4E3A\u8D1F\u7684\u81EA\u8EAB\u5BBD\u5EA6</li><li>\u8BBE\u7F6Econtainer\u7684padding\u503C\u7ED9\u5DE6\u53F3\u4E24\u4E2A\u5B50\u9762\u677F\u7559\u51FA\u7A7A\u95F4</li><li>\u8BBE\u7F6E\u4E24\u4E2A\u5B50\u9762\u677F\u4E3A\u76F8\u5BF9\u5B9A\u4F4D\uFF0C<code>left\u9762\u677F</code>\u7684left\u503C\u4E3A\u8D1F\u7684<code>left\u9762\u677F</code>\u5BBD\u5EA6\uFF0C<code>right\u9762\u677F</code>\u7684right\u503C\u4E3A\u8D1F\u7684<code>right\u9762\u677F</code>\u7684\u503C</li></ul><p>\u4F46\u662F\u5723\u676F\u5E03\u5C40\u6709\u4E2A\u95EE\u9898\uFF1A<strong>\u5F53\u4E2D\u95F4\u9762\u677F\u7684\u90E8\u5206\u6BD4\u4E24\u8FB9\u7684\u5B50\u9762\u677F\u5BBD\u5EA6\u5C0F\u7684\u65F6\u5019\uFF0C\u5E03\u5C40\u5C31\u4F1A\u4E71\u6389</strong>\u3002\u56E0\u6B64\u4E5F\u5C31\u6709\u4E86\u53CC\u98DE\u7FFC\u5E03\u5C40\u6765\u514B\u670D\u8FD9\u4E2A\u95EE\u9898\u3002\u5982\u679C\u4E0D\u589E\u52A0\u4EFB\u4F55\u6807\u7B7E\uFF0C\u60F3\u5B9E\u73B0\u66F4\u5B8C\u7F8E\u7684\u5E03\u5C40\u975E\u5E38\u56F0\u96BE\uFF0C\u56E0\u6B64\u53CC\u98DE\u7FFC\u5E03\u5C40\u5728\u4E3B\u9762\u677F\u4E0A\u9009\u62E9\u4E86\u52A0\u4E00\u4E2A\u6807\u7B7E</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;div class=&quot;container clearfix&quot;&gt;
    &lt;div class=&quot;center&quot;&gt;&lt;/div&gt;
    &lt;div class=&quot;left&quot;&gt;&lt;/div&gt;
    &lt;div class=&quot;right&quot;&gt;&lt;/div&gt;
&lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code> /* \u89E3\u51B3\u6D6E\u52A8\u5F15\u8D77\u7684\u9AD8\u5EA6\u584C\u9677 */
 .clearfix::after{
    content: &quot;&quot;;
    clear: both;
    display: block;
}
 .container{
    padding: 0 200px;
}
.center,.left,.right{
    float: left;
}
/* \u4E2D\u95F4\u90E8\u5206\u5BBD\u5EA6\u81EA\u9002\u5E94 */
.center{
    width: 100%;
    min-height: 400px;
    background-color: #34495e;
}
.left,.right{
    width: 200px;
    min-height: 400px;
}
/* \u5DE6\u8FB9\u680F\u4F7F\u7528margin-left\u79FB\u52A8\u4E2D\u95F4\u90E8\u5206\u7684\u5BBD\u5EA6\uFF0C\u518D\u4F7F\u7528\u76F8\u5BF9\u5B9A\u4F4D\u5411\u5DE6\u79FB\u52A8\u81EA\u8EAB\u7684\u5BBD\u5EA6 */
.left{
    margin-left: -100%;
    background-color: #2ecc71;
    position: relative;
    left:-200px;
}
.right{
    margin-left: -200px;
    background-color: #3498db;
    position: relative;
    right:-200px;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-\u53CC\u98DE\u7FFC\u5E03\u5C40" tabindex="-1"><a class="header-anchor" href="#_2-\u53CC\u98DE\u7FFC\u5E03\u5C40" aria-hidden="true">#</a> 2. \u53CC\u98DE\u7FFC\u5E03\u5C40</h4><ul><li>left\u3001container\u3001right\u90FD\u8BBE\u7F6E\u5DE6\u6D6E\u52A8</li><li>\u8BBE\u7F6Econtainer\u5BBD\u5EA6\u4E3A100%</li><li>\u8BBE\u7F6E\u8D1F\u8FB9\u8DDD\uFF0Cleft\u8BBE\u7F6Emargin-left\u4E3A-100%\uFF0Cright\u8BBE\u7F6Emargin-left\u4E3A\u8D1F\u7684\u81EA\u8EAB\u5BBD\u5EA6</li><li>\u8BBE\u7F6Ecenter\u7684margin\u503C\u4E3Aleft\u548Cright\u5BBD\u5EA6\uFF0C\u4E3A\u5DE6\u53F3\u4E24\u4E2A\u4FA7\u680F\u7559\u51FA\u7A7A\u95F4</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;div class=&quot; clearfix&quot;&gt;
    &lt;div class=&quot;container&quot;&gt;
        &lt;div class=&quot;center&quot;&gt;&lt;/div&gt;
    &lt;/div&gt;
    &lt;div class=&quot;left&quot;&gt;&lt;/div&gt;
    &lt;div class=&quot;right&quot;&gt;&lt;/div&gt;
&lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>.clearfix::after{
    content: &quot;&quot;;
    clear: both;
    display: block;
}
.container,.left,.right{
    float: left;
}
.container{
    width: 100%;
}

.center{
    margin: 0 200px;
    min-height: 400px; 
    background-color: #34495e; 
}
.left,.right{
    width: 200px;
    min-height:400px;
}
.left{
    margin-left: -100%;
    background-color: #2ecc71;
}
.right{
    margin-left: -200px;
    background-color: #3498db;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u53CC\u98DE\u7FFC\u5E03\u5C40\u4E0E\u5723\u676F\u5E03\u5C40\u7684\u4E3B\u8981\u5DEE\u522B\u5728\u4E8E\uFF1A</p><ul><li>\u53CC\u98DE\u7FFC\u5E03\u5C40\u7ED9\u4E3B\u9762\u677F\uFF08\u4E2D\u95F4\u5143\u7D20\uFF09\u6DFB\u52A0\u4E86\u4E00\u4E2A\u7236\u6807\u7B7E,\u7528\u6765\u901A\u8FC7margin\u7ED9\u5B50\u9762\u677F\u817E\u51FA\u7A7A\u95F4</li><li>\u5723\u676F\u5E03\u5C40\u91C7\u7528\u7684\u662Fpadding,\u800C\u53CC\u98DE\u7FFC\u5E03\u5C40\u91C7\u7528\u7684margin, \u89E3\u51B3\u4E86\u5723\u676F\u5E03\u5C40\u7684\u95EE\u9898</li><li>\u53CC\u98DE\u7FFC\u5E03\u5C40\u4E0D\u7528\u8BBE\u7F6E\u76F8\u5BF9\u5B9A\u4F4D\uFF0C\u4EE5\u53CA\u5BF9\u5E94\u7684left\u548Cright\u503C</li></ul><h4 id="_3-flex\u5F39\u6027\u5E03\u5C40" tabindex="-1"><a class="header-anchor" href="#_3-flex\u5F39\u6027\u5E03\u5C40" aria-hidden="true">#</a> 3. Flex\u5F39\u6027\u5E03\u5C40</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;div class=&quot;container&quot;&gt;
    &lt;div class=&quot;left&quot;&gt;&lt;/div&gt;
    &lt;div class=&quot;center&quot;&gt;&lt;/div&gt;
    &lt;div class=&quot;right&quot;&gt;&lt;/div&gt;
&lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>.container{
    display: flex;
    min-height: 400px;
}
.left,.right{
    background-color: #95a5a6;
    width: 200px;
    /* flex: 0 0 200px; */ \u4E0E\u4F7F\u7528\u5BBD\u5EA6\u80FD\u591F\u5B9E\u73B0\u540C\u6837\u7684\u6548\u679C
}
.center{
    flex:1;
    background-color: #000;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_4-grid-\u5E03\u5C40-\u7F51\u683C\u5E03\u5C40" tabindex="-1"><a class="header-anchor" href="#_4-grid-\u5E03\u5C40-\u7F51\u683C\u5E03\u5C40" aria-hidden="true">#</a> 4. Grid \u5E03\u5C40(\u7F51\u683C\u5E03\u5C40)</h4><ul><li>container \u8BBE\u7F6E\u4E3A<code>display: grid</code></li><li>\u8BBE\u7F6E\u4E09\u680F\u7684\u9AD8\u5EA6<code>grid-template-rows: 400px</code></li><li>\u8BBE\u7F6E\u4E09\u680F\u7684\u5BBD\u5EA6\uFF0C\u4E2D\u95F4\u81EA\u9002\u5E94\uFF0C\u4E24\u8FB9\u56FA\u5B9A<code>grid-template-columns: 100px auto 200px;</code></li></ul><p>grid-template-columns\u5C5E\u6027\u5B9A\u4E49\u6BCF\u4E00\u5217\u7684\u5217\u5BBD<br> grid-template-rows\u5C5E\u6027\u5B9A\u4E49\u6BCF\u4E00\u884C\u7684\u884C\u9AD8</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code> /* html\u540C\u4E0AFlex\u5F39\u6027\u5E03\u5C40*/
.container{
    display: grid;
    grid-template-rows: 400px;
    grid-template-columns: 200px auto 200px;/* \u8BBE\u7F6E\u5217\u5BBD\uFF0C\u4E5F\u53EF\u4F7F\u7528\u767E\u5206\u6BD4 */
}
 .left,.right{
    background-color: #95a5a6;  
} 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,34),t=[l];function d(c,r){return s(),a("div",null,t)}var p=n(i,[["render",d],["__file","\u9875\u9762\u5E38\u7528\u7684\u4E24\u680F\u3001\u4E09\u680F\u5E03\u5C40\u65B9\u5F0F.html.vue"]]);export{p as default};
