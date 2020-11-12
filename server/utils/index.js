const envs = require('dotenv').config().parsed

module.exports = {
  getEnvs: () => envs
}