/*
 * @license
 * (c) Copyright 2019 | MY-D Foundation | Created by Matthew Moy de Vitry
 * Use of this code is governed by the GNU Affero General Public License (https://www.gnu.org/licenses/agpl-3.0)
 * and the profit contribution agreement available at https://www.my-d.org/ProfitContributionAgreement
 */

const writeFileSync = require('fs').writeFileSync;

const util = require('util');
const exec = util.promisify(require('child_process').exec);

async function createVersionsFile(filename) {
  const revision = (await exec('git rev-parse --short HEAD')).stdout.toString().trim();
  const branch = process.env.TRAVIS_BRANCH || (await exec('git rev-parse --abbrev-ref HEAD')).stdout.toString().trim();
  const version = (await exec('git tag -l HEAD')).stdout.toString().trim();
  const commit_time = (await exec('git log --format="%ai" -n1 HEAD')).stdout.toString().trim();
  
  console.log(`version: '${version}',
  revision: '${revision}',
  branch: '${branch}',
  time: '${commit_time}'`);
  
  const content = `
  // this file is automatically generated by git.version.js script
  const buildInfo = {
    version: '${version}',
    revision: '${revision}',
    branch: '${branch}',
    commit_time: '${commit_time}',
    build_time: '${new Date()}'
  };
  export default buildInfo;`;
  
  writeFileSync(filename, content, {encoding: 'utf8'});
}

createVersionsFile('server/common/build.info.ts');
