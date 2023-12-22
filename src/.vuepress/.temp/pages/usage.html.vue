<template><div><h1 id="🧰-basic-usage" tabindex="-1"><a class="header-anchor" href="#🧰-basic-usage" aria-hidden="true">#</a> 🧰 Basic usage</h1>
<p>Once installed you can use the <code v-pre>cosmic</code> command to generate, build and install your own application.</p>
<p>To generate a new application you can use the <code v-pre>app:init</code> command:</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>cosmic init
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>this command is interactive and will ask you for the name, author and other information about your application. Once the command finishes you will have a fully functional PHP application in the directory you specified.
The generated application includes an example command, the <code v-pre>quote</code> command,  that you can use to test your application amd use as a reference to build your own commands.</p>
<pre><font color="#A3BE8C"><b>👽</b></font> <font color="#005FD7">php</font> <font color="#00AFFF"><u style="text-decoration-style:single">cosmic-app</u></font> <font color="#00AFFF">quote</font>

 <font color="#EBCB8B"><i>- &quot;What has risen may sink, and what has sunk may rise.&quot;</i></font>

 🐙 The Nameless City - <font color="#81A1C1">Howard Phillips Lovecraft</font> 

</pre>
<p>The cosmic binary is able to detect if it is executed inside a cosmic application and will use the application environment instead of the bundled environment. This allows you to use the cosmic binary to build and install your application.</p>
<h2 id="bundled-commands" tabindex="-1"><a class="header-anchor" href="#bundled-commands" aria-hidden="true">#</a> Bundled Commands</h2>
<p>Cosmic comes with a set of commands that you can use to generate, build and install your own application, this default set of commands is called the <code v-pre>core</code> commands and are available in every Cosmic application.</p>
<p>The cosmic core commands are:</p>
<h3 id="🛠️-init" tabindex="-1"><a class="header-anchor" href="#🛠️-init" aria-hidden="true">#</a> 🛠️ init</h3>
<p>The init command is used to generate a new application boilerplate. After executing this command you will have a fully functional PHP application that you can use right away to start coding your own commands.</p>
<h3 id="📦-build" tabindex="-1"><a class="header-anchor" href="#📦-build" aria-hidden="true">#</a> 📦 build</h3>
<p>The build command is used to build your application into a single PHAR file. This file can be used to distribute your application to other users.</p>
<h3 id="🔑-sign" tabindex="-1"><a class="header-anchor" href="#🔑-sign" aria-hidden="true">#</a> 🔑 sign</h3>
<p>The sign command is used to sign the application PHAR file using GPG. This command requires the GPG key ID to sign the PHAR file. You can use the <code v-pre>--key</code> or <code v-pre>--user</code> options to specify the key ID or you can set the <code v-pre>APP_SIGNING_KEY</code> environment variable to the key ID.</p>
<h3 id="🚀-publish" tabindex="-1"><a class="header-anchor" href="#🚀-publish" aria-hidden="true">#</a> 🚀 publish</h3>
<p>The publish command is used to publish a new release of your application to GitHub. At the moment this command uses the GitHub CLI under the hood to create the release, so you need to have the GitHub CLI installed and configured to use this command.</p>
<h3 id="🚚-install" tabindex="-1"><a class="header-anchor" href="#🚚-install" aria-hidden="true">#</a> 🚚 install</h3>
<p>The install command is used to install your application in the system. This command will copy the PHAR file to the <code v-pre>/usr/local/bin</code> directory and will make the file executable system-wide . This command requires sudo privileges.</p>
<h3 id="❤️-about" tabindex="-1"><a class="header-anchor" href="#❤️-about" aria-hidden="true">#</a> ❤️ about</h3>
<p>The about command is used to display information about the application.</p>
<h3 id="🔮-help" tabindex="-1"><a class="header-anchor" href="#🔮-help" aria-hidden="true">#</a> 🔮 help</h3>
<p>The help command is used to display information about the available commands. Cosmic gives you the choice of store the command help in a file using a subset of markdown syntax. This file is located in the <code v-pre>docs/commands</code> directory and is named after the command name. For example, the help for the <code v-pre>quote</code> command is stored in the <code v-pre>docs/commands/quote.md</code> file.</p>
<h3 id="🐚-completion" tabindex="-1"><a class="header-anchor" href="#🐚-completion" aria-hidden="true">#</a> 🐚 completion</h3>
<p>The completion command is used to generate the shell completion script for the application. This command detects the shell you are using and generates the completion script for that shell. The completion script is output to the standard output and you can redirect it to a file to use it later.</p>
</div></template>


