import React from 'react';

const PageHeaders = (props) => {
	return (
		<div className='headers'>
			<h2 className='headers--title'>{props.header}</h2>
		</div>
	);
};

export default PageHeaders;
