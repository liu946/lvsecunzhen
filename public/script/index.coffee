getlist = (url) ->
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

data = getlist("/input/get/#{modelname}").responseJSON
html = ''
for d in data
	html += "<div class='container'>
				<div class='id'><p>#{d.id}</p></div>
				<div class='title'><p>#{d.ZhenMingChen}</p></div>
				<div class='exchange'><a href='/input/edit/#{modelname}/#{d.id}'>修改</a></div>
			</div>"

$('#formlist .contentlist').html html

$('#addform').on 'click',() ->
	location.href = "/input/new/#{modelname}"
	