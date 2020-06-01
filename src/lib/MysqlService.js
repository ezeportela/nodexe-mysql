const {createConnection} = require('mysql');
const {promisify} = require('util');

class MysqlService {
  constructor(connection) {
    this.instance = createConnection(connection);
  }

  async executeQuery(sql, params = [], options = {timeout: 10000}) {
    const query = await promisify(this.instance.query.bind(this.instance));
    return query({sql, ...options}, params);
  }

  executeProcedure(name, params = [], options = {timeout: 10000}) {
    const procedure = `call ${name}(${params.map(() => '?').join(',')})`;
    return this.executeQuery(procedure, params, options);
  }

  async close() {
    return this.instance.destroy();
  }
}

module.exports = MysqlService;
