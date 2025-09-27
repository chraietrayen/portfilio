/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'vscode-bg': '#1e1e1e',
        'vscode-sidebar': '#252526',
        'vscode-panel': '#2d2d30',
        'vscode-border': '#3e3e42',
        'vscode-text': '#cccccc',
        'vscode-blue': '#007acc',
        'vscode-green': '#4ec9b0',
        'vscode-yellow': '#dcdcaa',
        'vscode-orange': '#ce9178',
        'vscode-pink': '#c586c0',
        'vscode-red': '#f44747',
        'vscode-comment': '#6a9955'
      },
      fontFamily: {
        'code': ['Fira Code', 'Monaco', 'Cascadia Code', 'Consolas', 'monospace'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'typing': 'typing 3.5s steps(40, end)',
        'blink': 'blink-caret 0.75s step-end infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        typing: {
          'from': { width: '0' },
          'to': { width: '100%' }
        },
        'blink-caret': {
          'from, to': { 'border-color': 'transparent' },
          '50%': { 'border-color': '#007acc' },
        }
      }
    },
  },
  plugins: [],
}