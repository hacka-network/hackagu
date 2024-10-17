/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
        'title': ['"Press Start 2P"', 'system-ui'],
        'normal': ['"IBM Plex Mono"', 'monospace'],
      },
      colors: {
        primary: '#3aff93',
      },
    },
  },
  plugins: [],
}

