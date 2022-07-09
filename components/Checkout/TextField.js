import React from 'react';
import { useField } from 'formik';

const TextField = ({ label, ...props }) => {
	const [field, meta] = useField(props);
	return (
		<div className="field__inputs">
			<div className="field__headers">
				{meta.touched && meta.error ? (
					<label className="field--label error" htmlFor={field.name}>
						{label}
					</label>
				) : (
					<label className="field--label" htmlFor={field.name}>
						{label}
					</label>
				)}
				{meta.touched && meta.error ? <span className="field--label error">{meta.error}</span> : null}
			</div>
			{meta.touched && meta.error ? <input className="field__input field--error" placeholder={field.placeholder} type={field.type} {...field} {...props} /> : <input className="field__input" placeholder={field.placeholder} type={field.type} {...field} {...props} />}
		</div>
	);
};

export default TextField;
