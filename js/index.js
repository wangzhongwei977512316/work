$('#add').on('click',function(){
	$('<div class="full"></div>').appendTo('body');
	$('<div class="mark"></div>').appendTo($('#list'));
	$('.full').css({'position':'absolute','width':'100%',height:'100%','background':'#000','opacity':0.4,'z-index':2,'top':0})
	$('.mark').css({'position':'absolute','width':'400px',height:'210px','background':'#fff','z-index':3,'right':'110px','top':'160px','border-radius':'4px'})
	var str='<h3>添加框</h3><input type="text" class="inputVal" placeholder="请输入要添加的内容"/><br><button class="srue">确定</button><button class="cancle">取消</button>';
	$('.mark').html(str);
	$('.mark input').css({'margin':'20px 0'});
	$('.mark button').css({'margin':'0 10px'})
})
$('#list').on('click','.cancle',function(){
	$('.mark').remove();
	$('.full').remove();
})
$('#list').on('click','.srue',function(event){
	event.stopPropagation();
	var tet=$('.inputVal').val(),
		num=$('#list li').length;
	if(tet==''||tet.length>4||num>11){
		alert('内容为空或内容限定超出长度');
		$('.inputVal').focus();
	}else{
		$('.mark').remove();
		$('.full').remove();
		$('#add').before($('<li>'+tet+'<span>x</span><li>'))
	}
	var len=$('#list li').length;
	$('#list li').eq(len-2).remove();
})

$('#list').on('click','li>span',function(){
	$(this).parent().remove();
	if($('#list li').length==1){
			$('#list').append('<p>去添加吧暂时一个都没有</p>')
		}
})
$('body').on('click','.full',function(){
	$('.mark').remove();
	$('.full').remove();
})

$('.write').on('click','h3>a',function(){
	var tt=$('.write h3 a').text();
	if(tt=='添加'){
		$('#add').show();
		$(this).html('编辑');
		$('#list p').remove();
	}else{
		$('#add').hide();
		$(this).html('添加')
	}
})
$('.text-center li').on('mouseover',function(){
	$(this).addClass('bghover').siblings().removeClass('bghover');
})
$('.animatelis li').on('mouseover',function(){
	$(this).addClass('lihover').siblings().removeClass('lihover');
})