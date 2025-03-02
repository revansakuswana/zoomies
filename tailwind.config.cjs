import plugin from 'tailwindcss/plugin';

export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'], // Sesuaikan dengan lokasi file Anda
  theme: {
    extend: {
      animation: {
        'loop-scroll': 'loop-scroll 10s linear infinite',
      },
      keyframes: {
        'loop-scroll': {
          from: { transform: 'translateX(0%)' },
          to: { transform: 'translateX(-100%)' },
        },
      },
    },
  },
  plugins: [
    plugin(({ addUtilities }) => {
      addUtilities({
        '.bg-radial-purple-black': {
          backgroundImage:
            'linear-gradient(-225deg, #3D4E81 0%, #5753C9 48%, #6E7FF3 100%)',
        },
      });
    }),
  ],
};
