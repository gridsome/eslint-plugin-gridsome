module.exports = {
  plugins: [
    {
      use: '@gridsome/source-plugin',
      options: {
        username: process.env.DB_USER,
        password: process.env.DB_PASS
      }
    }
  ]
}