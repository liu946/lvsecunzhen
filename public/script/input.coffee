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
				tar = $("input[name=#{k}]")
				if tar.length > 0
					if $("input[name=#{k}]").get(0).type is 'hidden'
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

		if $("input.ZhenQuHuoCunZhuang[value=1]").prop 'checked'
			for i in $(".zhenqu")
				$(i).css 'display','block'
		else
			for i in $(".zhenqu")
				$(i).css 'display','none'

		if $("input.ZhenQuHuoCunZhuang[value=2]").prop 'checked'
			for i in $(".cunzhuang")
				$(i).css 'display','block'
		else
			for i in $(".cunzhuang")
				$(i).css 'display','none'

	.fail () ->
		alert "数据库获取数据失败"

# 将获得的数据插入dom树中
putmodel = (object,inputs) ->
	html = ""
	id = object.class
	html = "<div id='#{id}_' class='content'>"
	for b in object.childfield
		fieldname = b.fieldname
		fieldid = b.field
		datatype = b.datatype
		onlyincity = b.onlyincity
		type = b.type
		unit = b.unit
		items = b.items
		condition = b.showin

		if onlyincity == true
			special = 'onlyincity'
		else
			special = ''

		if fieldid isnt undefined
			inputs = getinputname fieldid,inputs

		mend = "style='"
		insert = ""

		if unit == undefined
			unit = ''

		if type == 'time'
			str = "<ul class='yearinput'><input type='hidden' class='time' name='#{fieldid}' value='nothing'>"
			for i in [1985..2016] by 1
				str += "<li>
							<div class='content'><p>#{i}</p></div>
							<div class='datavalue'><input type='text' name='#{fieldid}_#{i}'>#{unit}</div>
						</li>"
				mend += "height:1049px;"
			str += "</ul>"
		else if type == 'time2000'
			str = "<ul class='yearinput'><input type='hidden' class='time2000' name='#{fieldid}' value='nothing'>"
			for i in [2000..2016] by 1
				str += "<li>
							<div class='content'><p>#{i}</p></div>
							<div class='datavalue'><input type='text' name='#{fieldid}_#{i}'>#{unit}</div>
						</li>"
				mend += "height:600px;"
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
		else if datatype == 'select1-5'
			str = "<select name='#{fieldid}' id='#{fieldid}'>"

			data = b.options
			for k,v of data
				str += "<option value='#{v}'>#{v}</option>"

			str += "</select>"

		else if datatype == 'bool'
			str = "<input type='radio' class='#{fieldid} selecttext' name='#{fieldid}' value='1'/>是
				<input type='radio' class='#{fieldid} selecttext' name='#{fieldid}' value='2'/>否"
		else if datatype == 'selectmult'
			str = ""
			for k,v of b.options
				str += "<input type='checkbox' value='#{v}' name='#{fieldid}' class='#{fieldid} selectmult'>#{v}"			
		else if items != undefined
			str = ""
			for k,v of items
				str += "<input type='radio' class='#{fieldid} selecttext' name='#{fieldid}' value='#{k}'/>#{v}"
		
		else
			str = "<input type='text' id='#{fieldid}' name='#{fieldid}' />#{unit}"
			mend += "'"
			
		if condition isnt undefined
			mend += "display:none;'"
			insert = condition
		else
			mend += "'"
			insert = ""

		if datatype is 'null'
			html += "<h2>#{fieldname}</h2>"
		else
			html += "<div class='list #{special} #{insert}' #{mend}>
						<div class='note'>
							<h3>#{fieldname}</h3>
						</div>
						<div class='input'>
							#{str}
						</div>
					</div>"

	html += "</div>"
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
			target = $("##{key}")

		targettype = target.attr 'class'
		targetvalue = target.val()

		if targettype is undefined
			targettype = $("input[name=#{key}]").attr 'class'
			if targettype isnt undefined
				classname = targettype.split(' ')[1]
				if classname == 'selecttext'
					targetvalue = $("input[name=#{key}]:checked").val()
				else if classname == 'selectmult'
					targetvalue = ""
					for dom in $("input.selectmult[name=#{key}]")
						if $(dom).prop 'checked'
							targetvalue += $(dom).val() + "&"

		if targettype == 'time'
			timedt = {}
			flag = 1
			for i in [1985...2017] by 1
				a = $("input[name=#{key}_#{i}]")
				b = a.val()
				timedt[i] = $("input[name=#{key}_#{i}]").val()
				if timedt[i] != ''
					flag = 0

			data[key] = JSON.stringify timedt
		else if targettype == 'time2000'
			timedt = {}
			flag = 1
			for i in [2000...2017] by 1
				a = $("input[name=#{key}_#{i}]")
				b = a.val()
				timedt[i] = $("input[name=#{key}_#{i}]").val()
				if timedt[i] != ''
					flag = 0

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

# 监听点击，出现相应的表单
$("input.ZhenQuHuoCunZhuang[value=1]").on 'click',()->
	if $(this).prop 'checked'
		for i in $(".zhenqu")
			$(i).css 'display','block'
		for i in $(".cunzhuang")
			$(i).css 'display','none'
			
$("input.ZhenQuHuoCunZhuang[value=2]").on 'click',()->
	if $(this).prop 'checked'
		for i in $(".cunzhuang")
			$(i).css 'display','block'
		for i in $(".zhenqu")
			$(i).css 'display','none'
		


# 保存功能
$('.save').on 'click',() ->
	target = getformvalue(inputs)
	value = target.data
	console.log value
	$.post "/input/update/#{modelname}", value, (data) ->
		getDBvalue "/input/get/#{modelname}", inputs
		alert '保存成功'

$('.submit').on 'click',() ->
	target = getformvalue(inputs)
	value = target.data
	$.post "/input/update/#{modelname}", value, (data) ->
		getDBvalue "/input/get/#{modelname}", inputs
		alert '提交成功'
		window.location = "/"


