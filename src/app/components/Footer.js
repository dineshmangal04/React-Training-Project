import React from 'react';
import PropTypes from 'prop-types';

//functional component
//presentational/stateless components

export default function Footer(props) {
	console.log("Footer Called");

	//deconstruct
	let {year, company} = props;

	return (
			<div>
				<hr />
				Copyrights@{year}, {company}
				{props.children}
			</div>

		)
}

// defaultProps is a keyword
Footer.defaultProps = {
	company: 'Product App'
}

// propTypes is a keyword
Footer.propTypes = {
	// mandatory, isRequired
	year: PropTypes.number.isRequired,
	company: PropTypes.string
}