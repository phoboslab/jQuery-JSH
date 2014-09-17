/*
	jQuery-jsh v.1.1
	http://github.com/phoboslab/jQuery-JSH

	Released under MIT license:
	http://www.opensource.org/licenses/mit-license.php
*/

(function($) {
	var span = function( c, r ){
		return '<span class="'+c+'">' + ( r || '$1' ) + '</span>';
	};

	var push = function( m ) {
		return '<r' + p.push( m ) + '>';
	};

	var pushBlock = function( m, comment, regexp, string ){
		var s = '';
		if( comment ) {
			s = span( 'comments', m );
		}
		else if( regexp ) {
			s = span( 'regexp', m );
		}
		else if( string ) {
			s = span( 'strings', m );
		}

		return push( s ) ;
	};

	var pop = function( m, i ) {
		return p[i-1].replace( x[12], x[13] );
	};

	var p = [];
	var x = [
		// escaped characters and names with $
		/\\.|\$\w+/g,
			push,

		// hint to find regexps (slash after ,=:{[ but ignore comments)
		/([\[({=:+,](\s|(\/\*[\s|\S]*?\*\/|\/\/.*))*)\/(?![\/\*])/g, '$1<h>/',

		// comments, regexps or strings
		/(\/\*[\s|\S]*?\*\/|\/\/.*)|(<h>\/.+?\/\w*)|(".*?"|'.*?')/g,
			pushBlock,

		// punctuations
		/((&\w+;|[-\/+*=?:.,;()\[\]{}|%^!])+)/g,
			span('punct'),

		// keywords
		new RegExp(
			"\\b(" +
				"break|case|catch|continue|default|delete|do|else|false|" +
				"finally|for|function|if|in|instanceof|new|null|return|" +
				"switch|this|throw|true|try|typeof|var|void|while|with" +
			")\\b", "gi"
		), span('keywords'),

		// numbers
		/\b(0b[0-1]+|0x[\da-f]+|\d+)\b/g,
			span('numbers'),

		// insert block back in again
		/<r(\d+)>/g,
			pop,

		// strip unused regexp hints
		/<h>/g,
			''
	];

	$.fn.jsh = function( tabsToSpaces ) {
		p = [];
		this.each(function(index) {
			var code = $(this).html();
			for( var i = 0; i < x.length; i+=2 ) {
				code = code.replace( x[i], x[i+1] );
			}
			if( tabsToSpaces !== false ) {
				code = code.replace(/\t/g,'    ');
			}
			$(this).html( code );
		});

		return this;
	};

})(jQuery);
