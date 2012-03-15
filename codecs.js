/**
* Codecs extensions.
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
	* Decodes a Base64 encoded string to a byte string.
	*
	* @example "SmF2YVNjcmlwdA==".decode_base64();
	* @result "JavaScript"
	*
	* @name decodeBase64
	* @return String
	*/
	append("decodeBase64", function(){ 
		if((this.length % 4) == 0)
		{
			if(typeof(atob) != "undefined")
				return atob(this);	//try using mozillas builtin codec
			else
			{
				var nBits, sDecoded = new Array(this.length / 4), base64 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
				
				for(var i = 0; i < this.length; i+=4)
				{
					nBits = (base64.indexOf(this.charAt(i))   & 0xff) << 18 |
							(base64.indexOf(this.charAt(i+1)) & 0xff) << 12 |
							(base64.indexOf(this.charAt(i+2)) & 0xff) <<  6 |
					base64.indexOf(this.charAt(i+3)) & 0xff;
					sDecoded[i] = String.fromCharCode((nBits & 0xff0000) >> 16, (nBits & 0xff00) >> 8, nBits & 0xff);
				}
				sDecoded[sDecoded.length-1] = sDecoded[sDecoded.length-1].substring(0, 3 - ((this.charCodeAt(i - 2) == 61) ? 2 : (this.charCodeAt(i - 1) == 61 ? 1 : 0)));	// make sure padding chars are left out.
				return sDecoded.join("");
			}
		}
		else
			throw new Error("String length must be divisible by 4.");
	});


	/**
	* Encodes a string using Base64.
	*
	* @example "JavaScript==".encode_base64();
	* @result "SmF2YVNjcmlwdA=="
	*
	* @name encodeBase64
	* @return String
	*/
	append("encodeBase64", function(){ 
		if(typeof(btoa) != "undefined")
			return btoa(this);	// using mozillas builtin codec
		else
		{
			var base64 = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',
			'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',
			'0','1','2','3','4','5','6','7','8','9','+','/'], sbin, pad = 0, s = "" + this;
			
			if((s.length % 3) == 1)
			{
				s+=String.fromCharCode(0);
				s+=String.fromCharCode(0);
				pad = 2;
			}
			else if((s.length % 3) == 2)
			{
				s+=String.fromCharCode(0);
				pad = 1;
			}
			
			var rslt = new Array(s.length / 3), ri = 0;	// create a result buffer, this is much faster than having strings concatinated.
			
			for(var i = 0; i < s.length; i+=3)
			{
				sbin = ((s.charCodeAt(i) & 0xff) << 16) | ((s.charCodeAt(i+1) & 0xff ) << 8) | (s.charCodeAt(i+2) & 0xff);
				rslt[ri] = (base64[(sbin >> 18) & 0x3f] + base64[(sbin >> 12) & 0x3f] + base64[(sbin >>6) & 0x3f] + base64[sbin & 0x3f]);
				ri++;
			}
			
			if(pad > 0)
				rslt[rslt.length-1] = rslt[rslt.length-1].substr(0, 4 - pad) +  ((pad==2) ? "==" : (pad==1) ? "=" : "");

			return rslt.join("");
		}
	});


	/**
	* Decodes a utf-8 encoded string back into multi-byte characters.
	*
	* @example "http://www.delacap.com/products/?very%20nice".encode_uri();
	* @result "http://www.delacap.com/products/?very nice"
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
	* @example "http://www.delacap.com/products/?very%20nice".encode_uri();
	* @result "http://www.delacap.com/products/?very nice"
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