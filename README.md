jQuery JSH
==========

#### Tiny jQuery Plugin for JavaScript Syntax Highlighting ####

This Plugin provides Syntax Highlighting for JavaScript code. It works (to my knowledge) correct in all cases, with the exception of multiline strings (a feature of JavaScript, that hopefully nobody uses), like:
	
	var s = "multiline \
	string";


### Demo ###

[jQuery JSH Highlighting its own source](http://www.phoboslab.org/files/jquery-jsh/)



### Usage ###

Include jQuery, the `jsh-colors.css` stylesheet and `jquery-jsh.js` script in your head element and call `.jsh()` for all elements you want to highlight.

	<link rel="stylesheet" type="text/css" href="jsh-colors.css"/>
	<script type="text/javascript" src="jquery-1.4.3.min.js"></script>
	<script type="text/javascript" src="jquery-jsh.js"></script>
	<script type="text/javascript">
		$(function(){
			$('pre.javascript').jsh();
		});
	</script>


If you pass `false` to `.jsh()`, tabs will NOT be replaced with 4 spaces.

Note that any `< > &` and `"` characters must be alreday replaced with their HTML entities for the Syntax Highlighting to work. If this is not the case (e.g. when you're loading the source via AJAX), you can use the following JavaScript snippet to escape it:

	s = s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
