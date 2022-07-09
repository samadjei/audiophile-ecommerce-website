import React from 'react';
import { useField } from 'formik';

const TextField = ({ label, ...props }) => {
	const [field, meta] = useField(props);
	return (
		<div className='field__inputs'>
			<label className='field--label' htmlFor={field.name}>{label}</label>
			<input className='field__input' placeholder={field.placeholder} type={field.type} {...field} {...props} />
		</div>
	);
};

export default TextField;
