import { useState, useEffect } from 'react';
import SuccessModal from './SuccessModal';
import Button from '../Button.js';

function App() {
	const initialValues = {
		name: '',
		email: '',
		phone: '',
		address: '',
		zip: '',
		city: '',
		country: '',
		eMoney: '',
		cashOnDelivery: '',
		eMoneyNum: '',
		eMoneyPin: '',
	};
	const [formValues, setFormValues] = useState(initialValues);
	const [formErrors, setFormErrors] = useState({});
	const [isSubmit, setIsSubmit] = useState(false);
	const [checked, setChecked] = useState();

	const handleChecked = (e) => {
		setChecked(e.target.value);
		console.log(e.target.value);
	};

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormValues({ ...formValues, [name]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setFormErrors(validate(formValues));
		setIsSubmit(true);
	};

	useEffect(() => {
		console.log(formErrors);
		if (Object.keys(formErrors).length === 0 && isSubmit) {
			console.log(formValues);
		}
	}, [formErrors]);
	const validate = (values) => {
		const errors = {};
		const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
		if (!values.name) {
			errors.name = 'Name is required!';
		}
		if (!values.email) {
			errors.email = 'Email is required!';
		} else if (!regex.test(values.email)) {
			errors.email = 'Wrong format';
		}
		if (!values.phone) {
			errors.phone = 'Phone is required!';
		}
		if (!values.address) {
			errors.address = 'Address is required!';
		}
		if (!values.zip) {
			errors.zip = 'Zip Code is required!';
		}
		if (!values.city) {
			errors.city = 'City is required!';
		}

		if (!values.country) {
			errors.country = 'Country is required!';
		}
		return errors;
	};

	return (
		<div className="container">
			{Object.keys(formErrors).length === 0 && isSubmit ? <SuccessModal /> : null}

			<form onSubmit={handleSubmit}>
				<span className="sub-title">Billing Details</span>

				<div className="field__billing">
					<div className="field__billing-items">
						<div className="field__inputs">
							<div className="field__headers">
								<label className="field--label">Name</label>
								<p className="field--label">{formErrors.name}</p>
							</div>
							<input className="field__input" type="text" name="name" placeholder="Name" defaultValue={formValues.name} onChange={handleChange} />
						</div>

						<div className="field__inputs">
							<div className="field__headers">
								<label className="field--label">Email</label>
								<p className="field--label">{formErrors.email}</p>
							</div>
							<input className="field__input" type="text" name="email" placeholder="Email" defaultValue={formValues.email} onChange={handleChange} />
						</div>
					</div>
					<div className="field__width">
						<div className="field__headers">
							<label className="field--label">Phone Number</label>
							<p className="field--label">{formErrors.phone}</p>
						</div>
						<input className="field__input" type="number" name="phone" placeholder="Phone" defaultValue={formValues.phone} onChange={handleChange} />
					</div>
				</div>
				{/* Shipping */}
				<div className="field__shipping">
					<span className="sub-title">Shipping Info</span>
					<div className="field__inputs field__address">
						<div className="field__headers">
							<label className="field--label">Address</label>
							<p className="field--label">{formErrors.address}</p>
						</div>
						<input className="field__input field__shipping-address" type="text" name="address" placeholder="Address" defaultValue={formValues.address} onChange={handleChange} />
					</div>
					<div className="field__billing-items">
						<div className="field">
							<div className="field__headers">
								<label className="field--label">Zip Code</label>
								<p className="field--label">{formErrors.zip}</p>
							</div>
							<input className="field__input" type="number" name="zip" placeholder="Zip" defaultValue={formValues.zip} onChange={handleChange} />
						</div>
						<div>
							<div className="field__headers">
								<label className="field--label">City</label>
								<p className="field--label">{formErrors.city}</p>
							</div>
							<input className="field__input" type="text" name="city" placeholder="New York" defaultValue={formValues.city} onChange={handleChange} />
						</div>
					</div>
					<div className="field__width">
						<div className="field__headers">
							<label className="field--label">Country</label>
							<p className="field--label">{formErrors.country}</p>
						</div>
						<input className="field__input" type="text" name="country" placeholder="Country" defaultValue={formValues.country} onChange={handleChange} />
					</div>
				</div>
				{/* Payments */}
				<div className="field__payments">
					<span className="sub-title">Payment Details</span>
					<div className="field__payments-method">
						<div>
							<span className="field--label">Payment method</span>
						</div>
						<div onChange={handleChecked} className="field__radios">
							<div className="field__radios-items">
								<input type="radio" name="picked" value="e-Money" />
								<label className="field__radios-text">e-Money</label>
							</div>
							<div className="field__radios-items">
								<input type="radio" name="picked" value="Cash on Delivery" />
								<label className="field__radios-text">Cash on Delivery</label>
							</div>
						</div>
					</div>
					{checked == 'e-Money' ? (
						<div className="field__payments-number">
							<div>
								<label className="field--label" htmlFor="e-Money Number">
									e-Money Number
								</label>
								<input className="field__input" type="number" name="eMoneyNum" placeholder="238521993" />
							</div>
							<div>
								<label className="field--label" htmlFor="e-Money PIN">
									e-Money PIN
								</label>
								<input className="field__input" type="number" name="eMoneyNum" placeholder="6891" />
							</div>
						</div>
					) : null}
					{checked == 'Cash on Delivery' ? (
						<div>
							<p className="field--cash">The ‘Cash on Delivery’ option enables you to pay in cash when our delivery courier arrives at your residence. Just make sure your address is correct so that your order will not be cancelled.</p>
						</div>
					) : null}
				</div>
				<div className="field__button">
					<Button type="submit" className="btn" buttonStyle="btn--primary" buttonSize="btn--cart">
						Continue & Pay
					</Button>
				</div>
			</form>
		</div>
	);
}

export default App;
