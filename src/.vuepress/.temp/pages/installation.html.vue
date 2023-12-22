<template><div><h1 id="📦-installation" tabindex="-1"><a class="header-anchor" href="#📦-installation" aria-hidden="true">#</a> 📦 Installation</h1>
<p>You can install Cosmic using one of the following methods:</p>
<h2 id="using-phive" tabindex="-1"><a class="header-anchor" href="#using-phive" aria-hidden="true">#</a> Using Phive</h2>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>phive <span class="token function">install</span> diego-ninja/cosmic
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>To upgrade cosmic use the following command:</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>phive update diego-ninja/cosmic
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="github-releases" tabindex="-1"><a class="header-anchor" href="#github-releases" aria-hidden="true">#</a> GitHub releases</h2>
<p>You may download the Cosmic PHAR directly from the GitHub release directly. You should however beware that it is not as secure as downloading it from the other mediums. Hence, it is recommended to check the signature when doing so:</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment"># Do adjust the URL based on the latest release</span>
<span class="token function">wget</span> <span class="token parameter variable">-O</span> cosmic <span class="token string">"https://github.com/diego-ninja/cosmic/releases/download/1.0.0/cosmic.phar"</span>
<span class="token function">wget</span> <span class="token parameter variable">-O</span> cosmic.asc <span class="token string">"https://github.com/diego-ninja/cosmic/releases/download/1.0.0/cosmic.phar.asc"</span>

<span class="token comment"># Check that the signature matches</span>
gpg <span class="token parameter variable">--verify</span> cosmic.asc cosmic

<span class="token comment"># Check the issuer (the ID can also be found from the previous command)</span>
gpg <span class="token parameter variable">--keyserver</span> hkps://keys.openpgp.org --recv-keys CFC27BC39EF44C7253BF9A2CDACB70CB34CD5799

<span class="token function">rm</span> cosmic.asc
<span class="token function">chmod</span> +x cosmic
<span class="token function">sudo</span> <span class="token function">mv</span> cosmic /usr/local/bin/cosmic
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="building-from-source" tabindex="-1"><a class="header-anchor" href="#building-from-source" aria-hidden="true">#</a> Building from source</h2>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">git</span> clone git@github.com:diego-ninja/cosmic.git
<span class="token builtin class-name">cd</span> cosmic
<span class="token function">composer</span> <span class="token function">install</span>
php cosmic app:install
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>this will install the cosmic application in <code v-pre>/usr/local/bin</code> directory.
Cosmic will ask you for your sudo password to install the application. If you prefer installing the application in another directory you can use the <code v-pre>--path</code> option.</p>
</div></template>


