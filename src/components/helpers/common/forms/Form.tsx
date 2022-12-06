import React from 'react';
import { Formik } from 'formik';

export const FormContainer = ({ initialValues, validationSchema, onSubmit, children }: any) => {
	return (
		<Formik enableReinitialize initialValues={initialValues} validate={validate(validationSchema)} onSubmit={onSubmit}>
			{children}
		</Formik>
	);
};

export default function validate(getValidationSchema: any) {
	return (values: any) => {
		const validationSchema = getValidationSchema(values);
		try {
			validationSchema.validateSync(values, { abortEarly: false });
			return {};
		} catch (error) {
			return getErrorsFromValidationError(error);
		}
	};
}

export const handleChecked = (e: any, form: any) => {
	form.setFieldValue(e.target.name, e.target.checked);
};

export const setInputProps = (name: any, classes = '', { errors, touched, handleChange, handleBlur }: any) => {
	return {
		name: name,
		className: `${classes} ${errors[name] && touched[name] ? '--invalid' : ''}`,
		onChange: handleChange,
		// onBlur: handleBlur
	};
};

export const setCurrencyInputProps = (name: any, classes = '', { errors, touched, handleChange, handleBlur, setFieldValue }: any) => ({
	name: name,
	className: `${classes} ${errors[name] && touched[name] ? '--invalid' : ''}`,
	onChange: handleChange,
	onBlur: (event: any) => {
		const formatted =
			event.target.value &&
			!isNaN(event.target.value.toString().replace(/,/g, '')) &&
			parseFloat(event.target.value.toString().replace(/,/g, ''))
				.toFixed(2)
				.toString()
				.replace(/\B(?=(\d{3})+(?!\d))/g, ',');

		event.target.value = formatted;
		setFieldValue(name, formatted);
		handleBlur(event);
	},
});

export const checkableBoolProps = (name: any, classes = '', { errors, touched, handleChange, handleBlur, setFieldValue }: any) => ({
	name: name,
	className: `${classes} ${errors[name] && touched[name] ? '--invalid' : ''}`,
	onChange: ({ target }: any) => setFieldValue(name, target.checked),
	onBlur: handleBlur,
});

function getErrorsFromValidationError(validationError: any) {
	const FIRST_ERROR = 0;
	return validationError.inner.reduce((errors: any, error: any) => {
		return {
			...errors,
			[error.path]: error.errors[FIRST_ERROR],
		};
	}, {});
}
