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
		dataType: 'json',
		async: true
	.done (data) ->
		for k, v of data
			if k == 'id'
				continue
			a = $("##{k}")
			if a.length > 0
				$("##{k}").val v
			else
				b = $("input.#{k}[value='#{v}']")
				b.prop 'checked', true
				if b.attr('class').split(' ')[1] == 'other'
					$("##{k}_other").val(v).css 'display','inline-block'
		return	
	.fail () ->
		alert "数据库获取数据失败"
	.always () ->
		console.log 'DB_connect'

# 将获得的数据插入dom树中
putmodel = (object,inputs) ->
	html = ""
	id = object.class
	html = "<div id='#{id}' class='content'>"
	for b in object.childfield
		fieldname = b.fieldname
		fieldid = b.field

		inputs = getinputname fieldid,inputs
		
		str = "<input type='text' id='#{fieldid}' name='#{fieldid}' />"
			
		html += "<div class='list'>
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
	for i in array	
		target = i
		targetvalue = $("input[name=#{target}]").val()
		if targetvalue == ''
			flag = 1
		data[target] = targetvalue
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

# 提交功能
$('.submit').on 'click',() ->
	target = getformvalue(inputs)
	value = target.data

	if target.flag
		alert "没有填写完整，请检查"
	else
		$.post "/input/insert/#{modelname}", value, (data) ->
			console.log data

