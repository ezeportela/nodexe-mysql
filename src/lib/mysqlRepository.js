const MysqlService = require('./MysqlService');

const createClient = (options) => new MysqlService(options);

const executeProcedure = async (instance, procName, params, options) =>
  await instance.executeProcedure(procName, params, options);

const executeQuery = async (instance, query, params, options) =>
  await instance.executeQuery(query, params, options);

const closeConnection = (instance) => instance.close();

module.exports = {
  createClient,
  executeProcedure,
  executeQuery,
  closeConnection,
};
