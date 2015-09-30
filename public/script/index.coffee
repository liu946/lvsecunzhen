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
console.log data
html = ''
for d in data
	html += "<div class='container'>
				<div class='id'><p>#{d.id}</p></div>"
	if d.ZhenMingChen != undefined
		html +=	"<div class='title'><p>#{d.ZhenMingChen}</p></div>"

	if d.MingChen != undefined
		html += "<div class='title'><p>#{d.MingChen}</p></div>"

	if d.WenJuanBianHao != undefined
		html += "<div class='title'><p>#{d.WenJuanBianHao}</p></div>"

	if d.ZhenQuHuoCunZhuang != undefined
		if d.ZhenQuHuoCunZhuang == 1
			html += "<div class='title'><p>镇区</p></div>"
		if d.ZhenQuHuoCunZhuang == 2
			html += "<div class='title'><p>乡村</p></div>"
	
	html += "<div class='exchange'><a href='/input/edit/#{modelname}/#{d.id}'>修改</a></div>
			</div>"

$('#formlist .contentlist').append html

$('#addform').on 'click',() ->
	location.href = "/input/new/#{modelname}"
	