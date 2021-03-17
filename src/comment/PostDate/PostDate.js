
import React from 'react';

function PostDate(props) {

	const formatDate = (dateStr) => {
		const date = new Date(dateStr);
		const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
		return months[date.getMonth()] + ' ' + date.getDate();
	};

	return (
		<div>
			{formatDate(props.date)}
		</div>
	);
}

export default PostDate;