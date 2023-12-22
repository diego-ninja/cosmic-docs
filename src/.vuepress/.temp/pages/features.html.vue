<template><div><h2 id="🚀-features" tabindex="-1"><a class="header-anchor" href="#🚀-features" aria-hidden="true">#</a> 🚀 Features</h2>
<p>Cosmic is a PHP framework and a CLI application for generating PHP applications. Here are some of its main features:</p>
<h3 id="command-line-interface" tabindex="-1"><a class="header-anchor" href="#command-line-interface" aria-hidden="true">#</a> Command Line Interface</h3>
<p>Cosmic provides a robust and flexible command line interface for building and managing your PHP applications. Using the CLI, you can quickly generate a new application, build and install it, and run it from the command line.</p>
<h3 id="application-generation" tabindex="-1"><a class="header-anchor" href="#application-generation" aria-hidden="true">#</a> Application Generation</h3>
<p>With Cosmic, you can quickly generate a new PHP application with a simple command. The generated application includes a <code v-pre>composer.json</code> file, a <code v-pre>src</code> directory, and a <code v-pre>tests</code> directory. The <code v-pre>composer.json</code> file contains the minimum dependencies required by the application. In the src/Command directory, you will find an example command, the <code v-pre>quote</code> command, that you can use to test your application and use as a reference to build your own commands.</p>
<h3 id="🎨-terminal-themes" tabindex="-1"><a class="header-anchor" href="#🎨-terminal-themes" aria-hidden="true">#</a> 🎨 <RouterLink to="/dev/03_themes.html">Terminal Themes</RouterLink></h3>
<p>Cosmic allows you to customize the look and feel of your application using themes. Themes are defined in json files and mapped into PHP classes, themes can be loaded from a directory or added manually. Cosmic comes with three bundled themes that you can use out of the box, but you can also create your own themes to customize the look and feel of your application.</p>
<h3 id="📦-phar-packaging" tabindex="-1"><a class="header-anchor" href="#📦-phar-packaging" aria-hidden="true">#</a> 📦 PHAR Packaging</h3>
<p>With the help of Box, Cosmic enables you to package your application into a PHAR file for easy distribution. The PHAR file contains all the files and dependencies required by the application, so you can distribute it as a single file.</p>
<h3 id="💬-notifications" tabindex="-1"><a class="header-anchor" href="#💬-notifications" aria-hidden="true">#</a> 💬 <RouterLink to="/dev/notifications.html">Notifications</RouterLink></h3>
<p>Cosmic allows you to send desktop notifications using the <code v-pre>Notifier</code> class. Under the hood the Notifier class uses the <a href="">jolicode/jolinotif</a> component to send the notifications.</p>
<h3 id="🌀-spinners" tabindex="-1"><a class="header-anchor" href="#🌀-spinners" aria-hidden="true">#</a> 🌀 <RouterLink to="/dev/spinner.html">Spinners</RouterLink></h3>
<p>Spinners are visual indicators of an ongoing process, and they can be used to indicate that a process is running in the background. Cosmic allows you to display spinners in your terminal using the <code v-pre>Spinner</code> class.</p>
<h3 id="🗓️-tables" tabindex="-1"><a class="header-anchor" href="#🗓️-tables" aria-hidden="true">#</a> 🗓️ <RouterLink to="/dev/tables.html">Tables</RouterLink></h3>
<p>Cosmic allows you to display tables in your terminal using the <code v-pre>Table</code> class. Tables are fully customizable via themes and can be used to display data in a tabular format.</p>
<h3 id="🔫-lifecycle-events" tabindex="-1"><a class="header-anchor" href="#🔫-lifecycle-events" aria-hidden="true">#</a> 🔫 <RouterLink to="/dev/lifecycle.html">Lifecycle Events</RouterLink></h3>
<p>Cosmic allows you to hook into the application lifecycle using the <code v-pre>Lifecycle</code> class.</p>
<p>Please refer to the individual documentation sections for more detailed information about each feature.</p>
</div></template>


