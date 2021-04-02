
import React from 'react';


function SearchResult({ user }) {
	return (
		<div className="col-lg-4">
			
				<div className="SearchResult d-flex">
					<div>
						<strong>{ user.email }</strong>
					</div>
				</div>
		</div>
	);
}

export default SearchResult;
