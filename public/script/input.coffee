# input页面脚本

# ajax请求获取显示页面的数据
getkeyvalue = (url) ->
	$.ajax
		url: url,
		dataType: 'json',
		async: false
	.done (data) ->
		return data
	.fail () ->
		alert "获取失败！请刷新页面"
	.always () ->
		console.log "complete"

getDBvalue = (url,array) ->
	$.ajax
		url: url,
		dataType: 'text',
		async: true
	.done (data) ->
		data = JSON.parse data
		for k, v of data
			if k == 'id'
				continue
			if typeof(v) == 'string'
				if v.length >= 300
					v = JSON.parse v
					for m,n of v
						$("input[name=#{k}_#{m}]").val n
			a = $("##{k}")
			if a.length > 0
				a.val v
			else
				b = $("input.#{k}[value='#{v}']")
				if b.length > 0
					b.prop 'checked', true
				else
					$("option[value='#{v}']").prop 'selected',true

	.fail () ->
		alert "数据库获取数据失败"
	.always () ->
		console.log 'DB_connect'

# 将获得的数据插入dom树中
putmodel = (object,inputs) ->
	html = ""
	id = object.class
	html = "<div id='#{id}_' class='content'>"
	for b in object.childfield
		fieldname = b.fieldname
		fieldid = b.field
		datatype = b.datatype
		type = b.type
		unit = b.unit
		items = b.items

		inputs = getinputname fieldid,inputs

		mend = ''

		if unit == undefined
			unit = ''
		if type == 'time'
			str = "<ul class='yearinput'>"
			for i in [1985..2016] by 1
				str += "<li>
							<input type='hidden' class='time' name='#{fieldid}'>
							<div class='content'><p>#{i}</p></div>
							<div class='datavalue'><input type='text' name='#{fieldid}_#{i}'>#{unit}</div>
						</li>"
				mend = "style='height:1049px'"
			str += "</ul>"
		else if type == 'list'
			str = "<select name='#{fieldid}' class='#{fieldid}'>"

			if modelname == 'zhenquhuocunzhuang'
				data = getkeyvalue("/input/get/xiangzhen").responseJSON
				for i in data
					str += "<option value='#{i.id}'>#{i.ZhenMingChen}</option>"
			else if modelname == 'zhuhu'
				data = getkeyvalue("/input/get/zhenquhuocunzhuang").responseJSON
				for i in data
					str += "<option value='#{i.id}'>#{i.MingChen}</option>"

			str += "</select>"
		else if datatype == 'bool'
			str = "<input type='radio' class='#{fieldid} selecttext' name='#{fieldid}' value='1'/>是
				<input type='radio' class='#{fieldid} selecttext' name='#{fieldid}' value='0'/>否"
		else if items != undefined
			str = ""
			for k,v of items
				str += "<input type='radio' class='#{fieldid} selecttext' name='#{fieldid}' value='#{k}'/>#{v}"
		else
			str = "<input type='text' id='#{fieldid}' name='#{fieldid}' />#{unit}"
			mend = ''
			
		html += "<div class='list' #{mend}>
					<div class='note'>
						<h3>#{fieldname}</h3>
					</div>
					<div class='input'>
						#{str}
					</div>
				</div>"

	html += "</div><hr />"
	$('#J_form').append html
	return inputs

# 遍历，获取所有表单的name，存入数组中
getinputname = (value,target) ->
	for a in target
		if a == value
			return target
	target.push value
	return target
		
# 获取表单中目前的所有值情况
getformvalue = (array) ->
	data = {"id": id}
	flag = 0
	for key in array
		if key == 'SuoShuXiangZhen'
			target = $('select[name=SuoShuXiangZhen]')
		else if key == 'SuoShuCunZhuangHuoZhenQu'
			target = $('select[name=SuoShuCunZhuangHuoZhenQu]')
		else
			target = $("input[name=#{key}]")

		targettype = target.attr 'class'
		targetvalue = target.val()
		if targettype != undefined
			classname = targettype.split(' ')[1]
			if classname == 'selecttext'
				targetvalue = $("input[name=#{key}]:checked").val()

		if targettype == 'time'
			timedt = {}
			for i in [1985...2016] by 1
				a = $("input[name=#{key}_#{i}]")
				b = a.val()
				timedt[i] = $("input[name=#{key}_#{i}]").val()
			data[key] = JSON.stringify timedt
		else
			data[key] = targetvalue

		if targetvalue == ''
			flag = 1
	return {
		data : data
		flag : flag
	}
	

# 实例化
value = JSON.parse getkeyvalue('/input/field').responseText
value = value[modelname]

inputs = []
inputs = putmodel value,inputs

# 获取数据库的存入的值	
getDBvalue "/input/get/#{modelname}/#{id}", inputs

# 保存功能
$('.save').on 'click',() ->
	target = getformvalue(inputs)
	value = target.data
	console.log value
	$.post "/input/update/#{modelname}", value, (data) ->
		console.log data
		getDBvalue "/input/get/#{modelname}", inputs

# 提交功能
$('.submit').on 'click',() ->
	target = getformvalue(inputs)
	value = target.data
	if target.flag
		alert "没有填写完整，请检查"
	else
		$.post "/input/update/#{modelname}", value, (data) ->
			console.log data

