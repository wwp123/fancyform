$.fn.FancyForm = function(){
	var tagId = "#" + this[0].id;
	//初始化FancyForm
	var FancyForm=function(){
		return{
			inputs:tagId + " .FancyForm input ," + tagId + " .FancyForm textarea",
			setup:function(){
				var a=this;
				this.inputs=$(this.inputs);
				a.inputs.each(function(){
					var c=$(this);
					a.checkVal(c)
				});
				a.inputs.live("keyup blur",function(){
					var c=$(this);
					a.checkVal(c);
				});
			},checkVal:function(a){
				a.val().length>0?a.parent("li").addClass("val"):a.parent("li").removeClass("val")
			}
		}
	}();
	
	//实例化FancyForm
	FancyForm.setup();
	var G_tocard_maxTips=10;
	var a=$(tagId + " .plus-tag");
	//获取根节点tag的id名		
	rootTag=function(p){
		var p = "#" + p.parents(".tag").attr("id");
		return p;
	}	
	$("a em",a).live("click",function(){
		var p = rootTag($(this));
		var c=$(this).parents("a"),b=c.attr("title"),d=c.attr("value");
		delTips(b,d,p)
	});	
	hasTips=function(b,p){
		var a = $(p + " .plus-tag");
		var d=$("a",a),c=false;
		d.each(function(){
			if($(this).attr("title")==b){
				c=true;
				alert("已经存在此标签！");
				return false
			}
		});
		return c
	};
	
	isMaxTips=function(p){
		var a = $(p + " .plus-tag");
		return $("a",a).length>=G_tocard_maxTips
	};
	
	setTips=function(c,d,p){
		var a = $(p + " .plus-tag");
		if(hasTips(c,p)){
			return false
		}
		if(isMaxTips(p)){
			alert("最多添加"+G_tocard_maxTips+"个标签！");
			return false
		}
		var b=d?'value="'+d+'"':"";
		a.append($("<a "+b+' title="'+c+'" href="javascript:void(0);" ><span>'+c+"</span><em></em></a>"));
		searchAjax(c,d,true,p);
		return true
	};
	
	delTips=function(b,c,p){
		var a = $(p + " .plus-tag");
//		if(!hasTips(b,p)){
//			return false
//		}
		$("a",a).each(function(){
			var d=$(this);
			if(d.attr("title")==b){
				d.remove();
				return false
			}
		});
		searchAjax(b,c,false,p);
		return true
	};
	
	getTips=function(p){
		var a = $(p + " .plus-tag");
		var b=[];
		$("a",a).each(function(){
			b.push($(this).attr("title"))
		});
		return b
	};
	
	getTipsId=function(){
		var b=[];
		$("a",a).each(function(){
			b.push($(this).attr("value"))
		});
		return b
	};
	
	getTipsIdAndTag=function(){
		var b=[];
		$("a",a).each(function(){
			b.push($(this).attr("value")+"##"+$(this).attr("title"))
		});
		return b
	}
	
	// 更新选中标签标签
	var searchAjax = function(name, id, isAdd,p){
		setSelectTips(p);
	};
	
	// 添加输入标签
	var $b = $('.plus-tag-add button'),$i = $('.plus-tag-add input');
	/*$i.keyup(function(e){
		var p = "#" + $(this).parents(".tag").attr("id"),
			$b = $(p + ' .plus-tag-add button'),
			$i = $(p + ' .plus-tag-add input');
		if(e.keyCode == 13){
			$b.click();
		}
	});
	$b.click(function(){
		var p = "#" + $(this).parents(".tag").attr("id"),
			$b = $(p + ' .plus-tag-add button'),
			$i = $(p + ' .plus-tag-add input');
		var name = $i.val().toLowerCase();
		if(name != '') setTips(name,-1,p);
		$i.val('');
		$i.select();
	});*/
	$i.keyup(function(e){
		var p = "#" + $(this).parents(".tag").attr("id"),
			$i = $(p + ' .plus-tag-add input');
		if(e.keyCode == 13){
			var p = "#" + $(this).parents(".tag").attr("id"),
			$i = $(p + ' .plus-tag-add input');
		var name = $i.val().toLowerCase();
		if(name != '') setTips(name,-1,p);
		$i.val('');
		$i.select();
		}
	});
	
	// 推荐标签
	/*var str = ['展开推荐标签', '收起推荐标签']
	$(tagId + ' .plus-tag-add a').live('click',function(){
		var $this = $(this),
				$con = $(tagId + ' #mycard-plus');
	
		if($this.hasClass('plus')){
			$this.removeClass('plus').text(str[0]);
			$con.hide();
		}else{
			$this.addClass('plus').text(str[1]);
			$con.show();
		}
	});*/
	isSelected = function(p){
		if(p.hasClass('selected')){
			return true;
		} else {
			return false;
		}
	};
	$(tagId + ' .default-tag a').live('click', function(){
		var $this = $(this),
			name = $this.attr('title'),
			id = $this.attr('value');
		if(!isSelected($this)) setTips(name, id, tagId);
	});
	
	// 更新高亮显示
	setSelectTips = function(p){
		var arrName = getTips(p);
		if(arrName.length){
			$(p + ' #myTags').show();
		}else{
			$(p + ' #myTags').hide();
		}
		$(p + ' .default-tag a').removeClass('selected');
		$.each(arrName, function(index,name){
			$(p + ' .default-tag a').each(function(){
				var $this = $(this);
				if($this.attr('title') == name){
					$this.addClass('selected');
					return false;
				}
			})
		});
	}
	
	// 更换推荐标签列表
	var $b = $(tagId + ' #change-tips'),
		$d = $(tagId + ' .default-tag div'),
		len = $d.length,
		t = 'nowtips';
	$b.click(function(){
		var i = $d.index($(tagId + ' .default-tag .nowtips'));
		i = (i+1 < len) ? (i+1) : 0;
		$d.hide().removeClass(t);
		$d.eq(i).show().addClass(t);
	});
	$d.eq(0).addClass(t);
}
