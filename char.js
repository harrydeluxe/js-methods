/**
* Char extensions convert between characters and decimal Numeric Character References.
* Extends string prototype with the following methods:
* char2dec, dec2char
* 
* This extensions doesn't depend on any other code or overwrite existing methods.
*
*
* The Initial Developer of the Original Code is
* unknown
*
*
* Contributor(s):
* Harald Hanek <harald.hanek@gmail.com>
*
* Copyright (c) 2007 Harald Hanek (http://js-methods.googlecode.com)
*
* Dual licensed under the MIT (http://www.opensource.org/licenses/mit-license.php)
* and GPL (http://www.gnu.org/licenses/gpl.html) licenses.
* 
* @author Harald Hanek
* @version 0.9
* @lastchangeddate 10. October 2007 18:00:46
* @revision 876
*/

(function(){

	var unicode	= {

		/**
		* 
		* 
		*/
		'dec2hex' : function(ts)
		{
			return (ts+0).toString(16).toUpperCase();
		},


		/**
		* 
		* 
		*/
		'dec2hex2' : function(ts)
		{
			var hexequiv = new Array ("0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F");
			return hexequiv[(ts >> 4) & 0xF] + hexequiv[ts & 0xF];
		},


		/**
		* 
		* 
		*/
		'dec2hex4' : function(ts)
		{
			var hexequiv = new Array ("0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F");
			return hexequiv[(ts >> 12) & 0xF] + hexequiv[(ts >> 8) & 0xF] + hexequiv[(ts >> 4) & 0xF] + hexequiv[ts & 0xF];
		},


		/**
		* 
		* 
		*/
		'convertCP2Char' : function(ts)
		{
			var outputString = '';
			ts = ts.replace(/^\s+/, '');
			if(ts.length == 0)
				return "";
			ts = ts.replace(/\s+/g, ' ');
			var listArray = ts.split(' ');
			for(var i = 0; i < listArray.length; i++)
			{
				var n = parseInt(listArray[i], 16);
				if(n <= 0xFFFF)
					outputString += String.fromCharCode(n);
				else if (n <= 0x10FFFF)
				{
					n -= 0x10000;
					outputString += String.fromCharCode(0xD800 | (n >> 10)) + String.fromCharCode(0xDC00 | (n & 0x3FF));
				}
				else
					outputString += '!erreur ' + unicode.dec2hex(n) +'!';
			}
			return( outputString );
		},


		/**
		* 
		* 
		*/
		'convertCP2DecNCR' : function(ts)
		{
			var outputString = "";
			ts = ts.replace(/^\s+/, '');
			if(ts.length == 0)
				return "";
			ts = ts.replace(/\s+/g, ' ');
			var listArray = ts.split(' ');
			for(var i = 0; i < listArray.length; i++)
			{
				var n = parseInt(listArray[i], 16);
				outputString += ('&#' + n + ';');
			}
			return(outputString);
		},


		/**
		* 
		* 
		*/
		'convertChar2CP' : function(ts)
		{
			var outputString = "", haut = 0, n = 0;
			for(var i = 0; i < ts.length; i++)
			{
				var b = ts.charCodeAt(i);
				if(b < 0 || b > 0xFFFF)
					outputString += '!erreur ' + unicode.dec2hex(b) + '!';
				
				if(haut != 0)
				{
					if(0xDC00 <= b && b <= 0xDFFF)
					{
						outputString += unicode.dec2hex(0x10000 + ((haut - 0xD800) << 10) + (b - 0xDC00)) + ' ';
						haut = 0;
						continue;
					}
					else
					{
						outputString += '!erreur ' + unicode.dec2hex(haut) + '!';
						haut = 0;
					}
				}
				
				if(0xD800 <= b && b <= 0xDBFF)
					haut = b;
				else
					outputString += unicode.dec2hex(b) + ' ';
			}
			return( outputString.replace(/ $/, '') );
		},
		
		
		/**
		* 
		* 
		*/
		'convertDecNCR2CP' : function(ts)
		{
			var outputString = '';
			ts = ts.replace(/\s/g, '');
			var listArray = ts.split(';');
			for (var i = 0; i < listArray.length-1; i++)
			{
				if(i > 0)
					outputString += ' ';
				var n = parseInt(listArray[i].substring(2, listArray[i].length), 10);
				outputString += unicode.dec2hex(n);
			}
			return( outputString );
		}
	
	};


	/**
	* Convert Character to Decimal.
	*
	* @example "JavaScript".char2dec();
	* @result "&#74;&#97;&#118;&#97;&#83;&#99;&#114;&#105;&#112;&#116;"
	*
	* @name char2dec
	* @return String
	*/
	if(!String.prototype.char2dec)
		String.prototype.char2dec = function()
		{
			return unicode.convertCP2DecNCR(unicode.convertChar2CP(this));
		};


	/**
	* Convert Decimal to Character.
	*
	* @example "&#74;&#97;&#118;&#97;&#83;&#99;&#114;&#105;&#112;&#116;".dec2char();
	* @result "JavaScript"
	*
	* @name dec2char
	* @return String
	*/
	if(!String.prototype.dec2char)
		String.prototype.dec2char = function()
		{
			return unicode.convertCP2Char(unicode.convertDecNCR2CP(this));
		};

})();