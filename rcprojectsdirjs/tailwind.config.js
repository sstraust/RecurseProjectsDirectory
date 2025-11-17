/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js,cljs}",
	      "./out/**/*.{html,js,cljs}",
	      "./prod_out/**/*.{html,js,cljs}"],
    theme: {
	
	colors: {
	    primary: '#000000',
	},
	extend: {},
    },
    daisyui: {
      themes: [
        {
            mytheme: {
		"primary": "#975DF8",
		"secondary": "#F000B8",
		"accent": "#37CDBE",
		"neutral": "#3D4451",
		"base-100": "#FFFFFF",
		"info": "#3ABFF8",
		"success": "#36D399",
		"warning": "#FBBD23",
		"error": "#F87272",


          },
        },
      ],
    },
    plugins: [require("daisyui")],
}
