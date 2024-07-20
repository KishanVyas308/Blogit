/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      typography: {
        custom: {
          css: {
            h1: {
              color: '#1f2937', // Tailwind color code for gray-800
              'font-weight': '700',
              'font-size': '2.25rem', // Tailwind text-4xl
            },
            h2: {
              color: '#374151', // Tailwind color code for gray-700
              'font-weight': '700',
              'font-size': '1.875rem', // Tailwind text-3xl
            },
            h3: {
              color: '#4b5563', // Tailwind color code for gray-600
              'font-weight': '600',
              'font-size': '1.5rem', // Tailwind text-2xl
            },
            h4: {
              color: '#3b82f6', // Tailwind color code for blue-600
              'font-weight': '600',
              'font-size': '1.25rem', // Tailwind text-xl
            },
            p: {
              color: '#6b7280', // Tailwind color code for gray-500
              'font-size': '1rem', // Tailwind text-base
            },
            a: {
              color: '#2563eb', // Tailwind color code for blue-500
              'text-decoration': 'underline',
              '&:hover': {
                color: '#1d4ed8', // Tailwind color code for blue-700
              },
            },
            blockquote: {
              borderLeftColor: '#9ca3af', // Tailwind color code for gray-400
              color: '#374151', // Tailwind color code for gray-700
              'font-style': 'italic',
              'padding-left': '1rem',
            },
            ul: {
              'list-style-type': 'disc',
              'padding-left': '1.5rem',
            },
            ol: {
              'list-style-type': 'decimal',
              'padding-left': '1.5rem',
            },
            'code::before': {
              content: '""',
            },
            'code::after': {
              content: '""',
            },
            code: {
              color: '#e11d48', // Tailwind color code for rose-600
              'background-color': '#f3f4f6', // Tailwind color code for gray-100
              'padding': '0.2rem 0.4rem',
              'border-radius': '0.25rem', // Tailwind rounded
            },
            pre: {
              color: '#e11d48', // Tailwind color code for rose-600
              'background-color': '#f3f4f6', // Tailwind color code for gray-100
              'padding': '1rem',
              'border-radius': '0.25rem', // Tailwind rounded
            },
            img: {
              'border-radius': '0.375rem', // Tailwind rounded-lg
              'max-width': '100%',
            },
          },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};