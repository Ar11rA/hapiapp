module.exports = {
  'development': {
    'username': 'root',
    'password': 'pass',
    'database': 'hapiapp',
    'host': 'localhost',
    'dialect': 'mysql'
  },
  'test': {
    'username': process.env.DB_USER,
    'password': process.env.DB_PASS,
    'database': 'hapiapp_test',
    'host': process.env.DB_HOST,
    'dialect': 'mysql'
  },
  'production': {
    'username': process.env.DB_USER,
    'password': process.env.DB_PASS,
    'database': 'hapiapp_prod',
    'host': process.env.DB_HOST,
    'dialect': 'mysql'
  }
};
