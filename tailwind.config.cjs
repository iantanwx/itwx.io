const colors = require('tailwindcss/colors');
const { tailwindExtractor } = require("tailwindcss/lib/lib/purgeUnusedStyles");

const PRIMARY = '#333745';
const ACCENT = '#d95979';

module.exports = {
	mode: "aot",
	purge: {
		content: [
			"./src/**/*.{html,js,svelte,ts}",
		],
		options: {
			defaultExtractor: (content) => [
				// If this stops working, please open an issue at https://github.com/svelte-add/tailwindcss/issues rather than bothering Tailwind Labs about it
				...tailwindExtractor(content),
				// Match Svelte class: directives (https://github.com/tailwindlabs/tailwindcss/discussions/1731)
				...[...content.matchAll(/(?:class:)*([\w\d-/:%.]+)/gm)].map(([_match, group, ..._rest]) => group),
			],
		},
		safelist: [/^svelte-[\d\w]+$/],
	},
	darkMode: 'class',
	theme: {
		nightwind: {
			typography: {
				code: {
					color: colors.gray[700],
				}
			},
		},
		extend: {
			colors: {
				primary: PRIMARY,
				accent: ACCENT,
			},
			typography: (theme) => ({
				DEFAULT: {
					css: {
						a: {
						  textDecoration: 'none',
						},
						'a:hover': {
							color: ACCENT,
						},
						code: {
						  fontWeight: theme('fontWeight.normal'),
							background: '#FFF4E9',
							padding: theme('spacing.1'),
							borderRadius: theme('borderRadius.sm')
						},
						'code::before': {
							content: '',
						},
						'code::after': {
							content: '',
						},
						img: {
							borderRadius: theme('borderRadius.md'),
						}
					}
				}
			})
		},
	},
	plugins: [
		require('@tailwindcss/line-clamp'),
		require('@tailwindcss/typography'),
		require('nightwind')
	],
};
