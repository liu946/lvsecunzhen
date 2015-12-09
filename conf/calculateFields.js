/**
 * Created by liu on 15/12/7.
 */
var fields = require('./fielddef');
function getLastYearData(jsonStr){
  jsonobj = JSON.parse(jsonStr);
  for(var i= 2016;i>1980;i--){
    if(jsonobj[i.toString()]){
      return jsonobj[i.toString()];
    }
  }
  throw 'No getable Value!';
};
module.exports = function (dataSet) {
  this.data = {};
  this.get = function (key) {
    if (!this.data.hasOwnProperty(key)) {
      if (!this.hasOwnProperty(key))throw key + "()  is not in dataset!";
      this.data[key] = this[key]();
    }
    return this.data[key];
  };
  this.fieldPush = function (key, item) {
    for (var i in item) {
      //todo
      if (!data.hasOwnProperty(key)) {
        this.data[key] = [];
      }
      this.data[key].push(this.get(key));
    }
  };
  this.init = function (dataSet) {
    var xiangzhenFields = fields['xiangzhen'].childfield;
    for (var i in xiangzhenFields) {
      var field = xiangzhenFields[i];
      if (field.hasOwnProperty('sign')) {
        this.data[field.sign] = dataSet['xiangzhen'][0][field.field];
      }
    }
    var otherTableList = ['zhenquhuocunzhuang', 'zhuhu'];
    for (var tableName_i in otherTableList) {
      var tableName = otherTableList[tableName_i];
      for (var field_i in fields[tableName].childfield) {
        var field = xiangzhenFields[i];
        if (field.hasOwnProperty('sign')) {
          for (var item_i in dataSet[tableName]) {
            var item = dataSet[tableName][item_i];
            this.fieldPush(field.sign,item[field.field]);
          }
        }
      }
    }
  };

  this.init(dataSet);

  /**
   * @return {number}
   */
  this.Z4 = function () {
    var a = getLastYearData(this.get('A1'));
    var b = this.get('A31')
    return  a/b;
  };

  this.Z5 = function() {

  }

}