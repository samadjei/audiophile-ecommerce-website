// Render Prop
import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import TextField from './TextField';

const CheckoutForm = () => (
	<div className="checkout__form">
		<Formik
			initialValues={{
				name: '',
				emailAddress: '',
				phoneNumber: '',
				address: '',
				zipCode: '',
				city: '',
				country: '',
				eMoney: false,
				cashOnDelivery: false,
				eMoneyNumber: '',
				eMoneyPin: '',
			}}
			onSubmit={(values, { setSubmitting }) => {
				setTimeout(() => {
					alert(JSON.stringify(values, null, 2));
					setSubmitting(false);
				}, 400);
			}}
		>
			{({ isSubmitting }) => (
				<Form>
					<span className="sub-title">Billing Details</span>
					<div className="field__billing">
						<div className="field__billing-items">
							<TextField label="Name" name="name" placeholder="Alexei Ward" type="text" />
							<TextField label="Email Address" name="email" placeholder="alexei@mail.com" type="email" />
						</div>
						<TextField label="Phone Number" name="number" placeholder="+1 202-555-0136" type="number" />
					</div>

					<div className="field__shipping">
						<span className="sub-title">Shipping Info</span>
						<div>
							<TextField className="field__input field__shipping-address" label="Address" name="adress" placeholder="1137 Williams Avenue" type="text" />
							<div className="field__shipping-inner">
								<TextField label="Zip Code" name="zipcode" placeholder="10001" type="text" />
								<TextField label="City" name="city" placeholder="New York" type="text" />
							</div>
							<div className="field__shipping-country">
								<TextField label="Country" name="country" placeholder="United States" type="text" />
							</div>
            </div>
            <div className="field__payments">
              
            </div>

						{/* <button type="submit" disabled={isSubmitting}>
							Submit
						</button> */}
					</div>
				</Form>
			)}
		</Formik>
	</div>
);

export default CheckoutForm;
