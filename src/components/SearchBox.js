import React from 'react';

const SearchBox = ({seachfield , searchChange}) => {

	return(
		<div className ='pa2'>
		<input
		className ='pa3 ba b--green bg-light-blue mg-2'
		 type = 'search' 
		placeholder = 'Search Robot' 
		onChange = {searchChange}
		/>
		</div>
		);
}
export default SearchBox;