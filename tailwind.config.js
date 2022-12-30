/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		screens: {
			sm: '576px',
			md: '768px',
			lg: '992px',
			xl: '1200px',
		},
		extend: {
			borderRadius: {
				5: '5px',
			},
			colors: {
				letter: '#4a5163',
				info: '#3667fb',
				success: '#00a700',
				warning: '#ff8c00',
				danger: '#ff0000',
				gray: {
					10: '#fafafa',
					100: '#e8e8e8',
					200: '#c5c5c5',
					300: '#a2a2a2',
					400: '#838383',
					500: '#6e6e6e',
				},
				purple: {
					500: '#852dda',
				},
			},
			fontSize: {
				xsm: '0.75rem',
			},
			height: {
				input: '3rem',
			},
		},
	},
	plugins: [],
};
