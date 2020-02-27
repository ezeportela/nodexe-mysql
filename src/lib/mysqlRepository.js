const {MysqlService} = require('../../index');

const createMysqlClient = (options) => new MysqlService(options);

const executeMysqlProcedure = async (instance, procName, params) =>
  await instance.executeProcedure(procName, params);

const executeMysqlQuery = async (instance, query, params) =>
  await instance.executeProcedure(query, params);

module.exports = {
  createMysqlClient,
  executeMysqlProcedure,
  executeMysqlQuery,
};
