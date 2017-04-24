/**
 * Created by wangtingshun on 2017/4/24.
 */
var path = require('path');
var dirVars = require('./base/dir-structure.config.js');
var pageArr = require('./base/page-entries.config.js');
var configEntry = {};

pageArr.forEach((page) => {
    configEntry[page] =path.resolve(dirVars.especialDir, page+'/page' );
    console.log(path.resolve(dirVars.especialDir, page+'/page' ));
});

module.exports = configEntry;


