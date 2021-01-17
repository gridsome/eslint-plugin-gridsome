module.exports = {
  plugins: [
    {
      use: '@gridsome/source-plugin',
      options: {
        username: process.env.GRIDSOME_DB_USER,
        password: process.env.GRIDSOME_DB_PASS
      }
    }
  ]
}