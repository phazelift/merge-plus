// merge-plus - A highly flexible, more robust, non-destructive deep object merge
//
// Copyright (c) 2016 Dennis Raymondo van der Sluis
//
// This program is free software: you can redistribute it and/or modify
//     it under the terms of the GNU General Public License as published by
//     the Free Software Foundation, either version 3 of the License, or
//     (at your option) any later version.
//
//     This program is distributed in the hope that it will be useful,
//     but WITHOUT ANY WARRANTY; without even the implied warranty of
//     MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
//     GNU General Public License for more details.
//
//     You should have received a copy of the GNU General Public License
//     along with this program.  If not, see <http://www.gnu.org/licenses/>
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
