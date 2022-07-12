import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import TextField from './TextField';
import * as Yup from 'yup';
import Button from '../Button';
import SuccessModal from './SuccessModal';

const CheckoutForm = () => {
	const [checked, setChecked] = useState();
	// Success State
	const [successOpen, setSuccessOpen] = useState(false);
	const handleChecked = (e) => {
		setChecked(e.target.value);
	};

	return (
		<div className="checkout__form">
			<Formik
				initialValues={{
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
				}}
				validationSchema={Yup.object({
					name: Yup.string().required('Required'),
					email: Yup.string().email('Wrong format').required('Required'),
					phone: Yup.string().required('Required'),
					address: Yup.string().required('Required'),
					zip: Yup.string().required('Required'),
					city: Yup.string().required('Required'),
					eMoney: Yup.string().required('Required'),
					country: Yup.string().required('Required'),
					eMoneyNum: Yup.string().required('Required'),
					eMoneyPin: Yup.string().required('Required'),
				})}
			>
				{({ isSubmitting }) => (
					<Form>
						<span className="sub-title">Billing Details</span>
						<div className="field__billing">
							<div className="field__billing-items">
								<TextField label="Name" name="name" placeholder="Alexei Ward" type="text" />
								<TextField label="Email Address" name="email" placeholder="alexei@mail.com" type="email" />
							</div>
							<div className="field__billing-number">
								<TextField label="Phone Number" name="phone" placeholder="+1 202-555-0136" type="number" />
							</div>
						</div>

						<div className="field__shipping">
							<span className="sub-title">Shipping Info</span>
							<div>
								<TextField className="field__input field__shipping-address" label="Address" name="address" placeholder="1137 Williams Avenue" type="text" />
								<div className="field__shipping-inner">
									<TextField label="Zip Code" name="zip" placeholder="10001" type="text" />
									<TextField label="City" name="city" placeholder="New York" type="text" />
								</div>
								<div className="field__shipping-country">
									<TextField label="Country" name="country" placeholder="United States" type="text" />
								</div>
							</div>
							<div className="field__payments">
								<span className="sub-title">Payment Details</span>
								<div className="field__payments-method">
									<div>
										<span className="field--label">Payment method</span>
									</div>
									<div onChange={handleChecked} className="field__radios">
										<div className="field__radios-items">
											<Field type="radio" name="picked" value="e-Money" />
											<label className="field__radios-text">e-Money</label>
										</div>
										<div className="field__radios-items">
											<Field type="radio" name="picked" value="Cash on Delivery" />
											<label className="field__radios-text">Cash on Delivery</label>
										</div>
									</div>
								</div>
								{checked == 'e-Money' ? (
									<div className="field__payments-number">
										<TextField checked={handleChecked} label="e-Money Number" name="eMoneyNum" placeholder="238521993" type="number" />
										<TextField label="e-Money PIN" name="eMoneyPin" placeholder="6891" type="number" />
									</div>
								) : null}
								{checked == 'Cash on Delivery' ? (
									<div>
										<p className="field--cash">The ‘Cash on Delivery’ option enables you to pay in cash when our delivery courier arrives at your residence. Just make sure your address is correct so that your order will not be cancelled.</p>
									</div>
								) : null}
							</div>
							<div className="field__button">
								<Button onClick={() => setSuccessOpen(true)} className="btn" buttonStyle="btn--primary" buttonSize="btn--cart">
									Continue & Pay
								</Button>
							</div>
						</div>
					</Form>
				)}
			</Formik>
			<SuccessModal open={successOpen} onClose={() => setSuccessOpen(false)} />
		</div>
	);
};

export default CheckoutForm;
