export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        // 📱 Мобільні
        'auth-mobile': `image-set(
          url('/src/assets/auth/auth_bg_512.webp') type('image/webp'),
          url('/src/assets/auth/auth_bg_512.png') type('image/png')
        )`,

        // 🧾 Планшети
        'auth-tablet': `image-set(
          url('/src/assets/auth/auth_bg_768.webp') type('image/webp'),
          url('/src/assets/auth/auth_bg_768.png') type('image/png')
        )`,

        // 💻 Десктопи
        'auth-desktop': `image-set(
          url('/src/assets/auth/auth_bg.webp') type('image/webp'),
          url('/src/assets/auth/auth_bg.png') type('image/png')
        )`,
      },
    },
  },
  darkMode: "class",
  plugins: [],
}
