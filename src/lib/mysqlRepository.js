const MysqlService = require('./MysqlService');

const createClient = (options) => new MysqlService(options);

const executeProcedure = async (instance, procName, params) =>
  await instance.executeProcedure(procName, params);

const executeQuery = async (instance, query, params) =>
  await instance.executeQuery(query, params);

const closeConnection = (instance) => instance.close();

module.exports = {
  createClient,
  executeProcedure,
  executeQuery,
  closeConnection,
};
