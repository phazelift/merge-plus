// merge-plus - A highly flexible, more robust, non-destructive deep object merge
//
// MIT License
//
// Copyright (c) 2016 Dennis Raymondo van der Sluis
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.
//

var
	 types		= require( 'types.js' )
	,deepmerge	= require( 'deepmerge' )
;


var merge= function(){

	var result= {};

	var expand= function(){
		var
			 args		= types.intoArray.apply( null, arguments )
			,count	= 0
		;

		while ( count < args.length ){
			if ( types.isArray(args[ count ]) ){
				expand( args[count] );
			}
			result= deepmerge( result, types.forceObject(args[ count ]) );
			++count;
		}

		return result;
	};

	return expand.apply( null, arguments );
};

module.exports= merge;
