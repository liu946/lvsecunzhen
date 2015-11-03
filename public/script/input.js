// Generated by CoffeeScript 1.10.0
var getDBvalue, getformvalue, getinputname, getkeyvalue, inputs, putmodel, value;

getkeyvalue = function(url) {
  return $.ajax({
    url: url,
    dataType: 'json',
    async: false
  }).done(function(data) {
    return data;
  }).fail(function() {
    return alert("获取失败！请刷新页面");
  });
};

getDBvalue = function(url, array) {
  return $.ajax({
    url: url,
    dataType: 'text',
    async: true
  }).done(function(data) {
    var a, b, i, j, k, l, len, len1, len2, len3, m, n, o, p, ref, ref1, ref2, ref3, results, results1, tar, v;
    data = JSON.parse(data);
    for (k in data) {
      v = data[k];
      if (k === 'id') {
        continue;
      }
      if (typeof v === 'string') {
        tar = $("input[name=" + k + "]");
        if (tar.length > 0) {
          if ($("input[name=" + k + "]").get(0).type === 'hidden') {
            v = JSON.parse(v);
            for (m in v) {
              n = v[m];
              $("input[name=" + k + "_" + m + "]").val(n);
            }
          }
        }
      }
      a = $("#" + k);
      if (a.length > 0) {
        a.val(v);
      } else {
        b = $("input." + k + "[value='" + v + "']");
        if (b.length > 0) {
          b.prop('checked', true);
        } else {
          $("option[value='" + v + "']").prop('selected', true);
        }
      }
    }
    if ($("input.ZhenQuHuoCunZhuang[value=1]").prop('checked')) {
      ref = $(".zhenqu");
      for (j = 0, len = ref.length; j < len; j++) {
        i = ref[j];
        $(i).css('display', 'block');
      }
    } else {
      ref1 = $(".zhenqu");
      for (l = 0, len1 = ref1.length; l < len1; l++) {
        i = ref1[l];
        $(i).css('display', 'none');
      }
    }
    if ($("input.ZhenQuHuoCunZhuang[value=2]").prop('checked')) {
      ref2 = $(".cunzhuang");
      results = [];
      for (o = 0, len2 = ref2.length; o < len2; o++) {
        i = ref2[o];
        results.push($(i).css('display', 'block'));
      }
      return results;
    } else {
      ref3 = $(".cunzhuang");
      results1 = [];
      for (p = 0, len3 = ref3.length; p < len3; p++) {
        i = ref3[p];
        results1.push($(i).css('display', 'none'));
      }
      return results1;
    }
  }).fail(function() {
    return alert("数据库获取数据失败");
  });
};

putmodel = function(object, inputs) {
  var b, condition, data, datatype, fieldid, fieldname, html, i, id, insert, items, j, k, l, len, len1, len2, mend, o, onlyincity, p, q, ref, ref1, special, str, type, unit, v;
  html = "";
  id = object["class"];
  html = "<div id='" + id + "_' class='content'>";
  ref = object.childfield;
  for (j = 0, len = ref.length; j < len; j++) {
    b = ref[j];
    fieldname = b.fieldname;
    fieldid = b.field;
    datatype = b.datatype;
    onlyincity = b.onlyincity;
    type = b.type;
    unit = b.unit;
    items = b.items;
    condition = b.showin;
    if (onlyincity === true) {
      special = 'onlyincity';
    } else {
      special = '';
    }
    if (fieldid !== void 0) {
      inputs = getinputname(fieldid, inputs);
    }
    mend = "style='";
    insert = "";
    if (unit === void 0) {
      unit = '';
    }
    if (type === 'time') {
      str = "<ul class='yearinput'><input type='hidden' class='time' name='" + fieldid + "' value='nothing'>";
      for (i = l = 1985; l <= 2016; i = l += 1) {
        str += "<li> <div class='content'><p>" + i + "</p></div> <div class='datavalue'><input type='text' name='" + fieldid + "_" + i + "'>" + unit + "</div> </li>";
        mend += "height:1049px;";
      }
      str += "</ul>";
    } else if (type === 'time2000') {
      str = "<ul class='yearinput'><input type='hidden' class='time2000' name='" + fieldid + "' value='nothing'>";
      for (i = o = 2000; o <= 2016; i = o += 1) {
        str += "<li> <div class='content'><p>" + i + "</p></div> <div class='datavalue'><input type='text' name='" + fieldid + "_" + i + "'>" + unit + "</div> </li>";
        mend += "height:600px;";
      }
      str += "</ul>";
    } else if (type === 'list') {
      str = "<select name='" + fieldid + "' class='" + fieldid + "'>";
      if (modelname === 'zhenquhuocunzhuang') {
        data = getkeyvalue("/input/get/xiangzhen").responseJSON;
        for (p = 0, len1 = data.length; p < len1; p++) {
          i = data[p];
          str += "<option value='" + i.id + "'>" + i.ZhenMingChen + "</option>";
        }
      } else if (modelname === 'zhuhu') {
        data = getkeyvalue("/input/get/zhenquhuocunzhuang").responseJSON;
        for (q = 0, len2 = data.length; q < len2; q++) {
          i = data[q];
          str += "<option value='" + i.id + "'>" + i.MingChen + "</option>";
        }
      }
      str += "</select>";
    } else if (datatype === 'select1-5') {
      str = "<select name='" + fieldid + "' id='" + fieldid + "'>";
      data = b.options;
      for (k in data) {
        v = data[k];
        str += "<option value='" + v + "'>" + v + "</option>";
      }
      str += "</select>";
    } else if (datatype === 'bool') {
      str = "<input type='radio' class='" + fieldid + " selecttext' name='" + fieldid + "' value='1'/>是 <input type='radio' class='" + fieldid + " selecttext' name='" + fieldid + "' value='2'/>否";
    } else if (datatype === 'selectmult') {
      str = "";
      ref1 = b.options;
      for (k in ref1) {
        v = ref1[k];
        str += "<input type='checkbox' value='" + v + "' name='" + fieldid + "' class='" + fieldid + " selectmult'>" + v;
      }
    } else if (items !== void 0) {
      str = "";
      for (k in items) {
        v = items[k];
        str += "<input type='radio' class='" + fieldid + " selecttext' name='" + fieldid + "' value='" + k + "'/>" + v;
      }
    } else {
      str = "<input type='text' id='" + fieldid + "' name='" + fieldid + "' />" + unit;
      mend += "'";
    }
    if (condition !== void 0) {
      mend += "display:none;'";
      insert = condition;
    } else {
      mend += "'";
      insert = "";
    }
    if (datatype === 'null') {
      html += "<h2>" + fieldname + "</h2>";
    } else {
      html += "<div class='list " + special + " " + insert + "' " + mend + "> <div class='note'> <h3>" + fieldname + "</h3> </div> <div class='input'> " + str + " </div> </div>";
    }
  }
  html += "</div>";
  $('#J_form').append(html);
  return inputs;
};

getinputname = function(value, target) {
  var a, j, len;
  for (j = 0, len = target.length; j < len; j++) {
    a = target[j];
    if (a === value) {
      return target;
    }
  }
  target.push(value);
  return target;
};

getformvalue = function(array) {
  var a, b, classname, data, dom, flag, i, j, key, l, len, len1, o, p, ref, target, targettype, targetvalue, timedt;
  data = {
    "id": id
  };
  flag = 0;
  for (j = 0, len = array.length; j < len; j++) {
    key = array[j];
    if (key === 'SuoShuXiangZhen') {
      target = $('select[name=SuoShuXiangZhen]');
    } else if (key === 'SuoShuCunZhuangHuoZhenQu') {
      target = $('select[name=SuoShuCunZhuangHuoZhenQu]');
    } else {
      target = $("#" + key);
    }
    targettype = target.attr('class');
    targetvalue = target.val();
    if (targettype === void 0) {
      targettype = $("input[name=" + key + "]").attr('class');
      if (targettype !== void 0) {
        classname = targettype.split(' ')[1];
        if (classname === 'selecttext') {
          targetvalue = $("input[name=" + key + "]:checked").val();
        } else if (classname === 'selectmult') {
          targetvalue = "";
          ref = $("input.selectmult[name=" + key + "]");
          for (l = 0, len1 = ref.length; l < len1; l++) {
            dom = ref[l];
            if ($(dom).prop('checked')) {
              targetvalue += $(dom).val() + "&";
            }
          }
        }
      }
    }
    if (targettype === 'time') {
      timedt = {};
      flag = 1;
      for (i = o = 1985; o < 2017; i = o += 1) {
        a = $("input[name=" + key + "_" + i + "]");
        b = a.val();
        timedt[i] = $("input[name=" + key + "_" + i + "]").val();
        if (timedt[i] !== '') {
          flag = 0;
        }
      }
      data[key] = JSON.stringify(timedt);
    } else if (targettype === 'time2000') {
      timedt = {};
      flag = 1;
      for (i = p = 2000; p < 2017; i = p += 1) {
        a = $("input[name=" + key + "_" + i + "]");
        b = a.val();
        timedt[i] = $("input[name=" + key + "_" + i + "]").val();
        if (timedt[i] !== '') {
          flag = 0;
        }
      }
      data[key] = JSON.stringify(timedt);
    } else {
      data[key] = targetvalue;
    }
    if (targetvalue === '') {
      flag = 1;
    }
  }
  return {
    data: data,
    flag: flag
  };
};

value = JSON.parse(getkeyvalue('/input/field').responseText);

value = value[modelname];

inputs = [];

inputs = putmodel(value, inputs);

getDBvalue("/input/get/" + modelname + "/" + id, inputs);

$("input.ZhenQuHuoCunZhuang[value=1]").on('click', function() {
  var i, j, l, len, len1, ref, ref1, results;
  if ($(this).prop('checked')) {
    ref = $(".zhenqu");
    for (j = 0, len = ref.length; j < len; j++) {
      i = ref[j];
      $(i).css('display', 'block');
    }
    ref1 = $(".cunzhuang");
    results = [];
    for (l = 0, len1 = ref1.length; l < len1; l++) {
      i = ref1[l];
      results.push($(i).css('display', 'none'));
    }
    return results;
  }
});

$("input.ZhenQuHuoCunZhuang[value=2]").on('click', function() {
  var i, j, l, len, len1, ref, ref1, results;
  if ($(this).prop('checked')) {
    ref = $(".cunzhuang");
    for (j = 0, len = ref.length; j < len; j++) {
      i = ref[j];
      $(i).css('display', 'block');
    }
    ref1 = $(".zhenqu");
    results = [];
    for (l = 0, len1 = ref1.length; l < len1; l++) {
      i = ref1[l];
      results.push($(i).css('display', 'none'));
    }
    return results;
  }
});

$('.save').on('click', function() {
  var target;
  target = getformvalue(inputs);
  value = target.data;
  console.log(value);
  return $.post("/input/update/" + modelname, value, function(data) {
    getDBvalue("/input/get/" + modelname, inputs);
    return alert('保存成功');
  });
});

$('.submit').on('click', function() {
  var target;
  target = getformvalue(inputs);
  value = target.data;
  return $.post("/input/update/" + modelname, value, function(data) {
    getDBvalue("/input/get/" + modelname, inputs);
    alert('提交成功');
    return window.location = "/";
  });
});
