const { db } = require('./env_config')

module.exports = {
  "development": {
    ...db,
    "dialectOptions": {
      "ssl": true
    }
  },
  "test": {
    ...db,
    "dialectOptions": {
      "ssl": true
    }
  },
  "production": {
    ...db,
    "dialectOptions": {
      "ssl": true
    }
  }
}