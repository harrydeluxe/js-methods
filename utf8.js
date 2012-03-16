/**
* utf8
*
* @version 0.9
* @copyright Copyright (c) 2007-2012 Harald Hanek
* @license MIT (http://harrydeluxe.mit-license.org)
*/

(function(){

	/**
	* Extend the string prototype with the method under the given name if it doesn't currently exist.
	*
	* @private
	*/
	function append(name, method)
	{
		if(!String.prototype[name])
			String.prototype[name] = method;
	}
	

	/**
	* Decodes a utf-8 encoded string back into multi-byte characters.
	*
	* @example "\xE2\x82\xAC".decodeUTF8();
	* @result "€"
	*
	* @name decodeUTF8
	* @return String
	*/
	append("decodeUTF8", function(){
		var str = this;
		
		// 2-byte chars			
		str = str.replace(/[\u00c0-\u00df][\u0080-\u00bf]/g, function(c)
		{ 
			var cc = (c.charCodeAt(0)&0x1f)<<6 | c.charCodeAt(1)&0x3f;
			return String.fromCharCode(cc);
		});
		
		// 3-byte chars
		str = str.replace(/[\u00e0-\u00ef][\u0080-\u00bf][\u0080-\u00bf]/g, function(c)
		{ 
			var cc = (c.charCodeAt(0)&0x0f)<<12 | (c.charCodeAt(1)&0x3f<<6) | c.charCodeAt(2)&0x3f; 
			return String.fromCharCode(cc);
		});
		return str;
	});


	/**
	* Encodes a multi-byte string into utf-8 multiple single-byte characters.
	*
	* @example "Straße".encodeUTF8(); 
	* @result "StraÃe"
	*
	* @name encodeUTF8
	* @return String
	*/
	append("encodeUTF8", function(){
		var str = this;
		
		// U+0080 - U+07FF = 2-byte chars
		str = str.replace(/[\u0080-\u07ff]/g, function(c)
			{ 
				var cc = c.charCodeAt(0);
				return String.fromCharCode(0xc0 | cc>>6, 0x80 | cc&0x3f);
			});
		
		  // U+0800 - U+FFFF = 3-byte chars
		str = str.replace(/[\u0800-\uffff]/g, function(c)
			{ 
				var cc = c.charCodeAt(0); 
				return String.fromCharCode(0xe0 | cc>>12, 0x80 | cc>>6&0x3F, 0x80 | cc&0x3f);
			});
		
		return str;
	});

})();