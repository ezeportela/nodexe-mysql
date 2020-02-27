const MysqlService = require('./MysqlService');

const createClient = (options) => new MysqlService(options);

const executeProcedure = async (instance, procName, params) =>
  await instance.executeProcedure(procName, params);

const executeQuery = async (instance, query, params) =>
  await instance.executeProcedure(query, params);

module.exports = {
  createClient,
  executeProcedure,
  executeQuery,
};
