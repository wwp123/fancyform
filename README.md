#标签插件
 这是一款标签插件，可根据推荐的标签添加和删除符合要求的标签，也可自己手动输入添加标签。
####官方地址：http://www.jsdaima.com/d-191.html

##兼容性

* ie6+


##样例：

###1、使用步骤
* 引入样式文件

```javascript
<link href="style/FancyForm.css" type="text/css" rel="stylesheet" />
```
* 引入js文件

```javascript
<script type="text/javascript" src="javascript/jquery-1.8.3.min.js"></script>
<script type="text/javascript" src="javascript/FancyForm.js"></script>
```
 
* 在页面上添加代码：

```javascript
<div class="border-dotted tag-box">
    <div class="tag" id="tag1">
        <div class="row clearfix">
    	<div class="large-2 columns">
        	<span class="category right"><span class="star-red">*</span>特长：</span>
        </div>
        <div class="large-10 columns">
        	<div class="row">
            	<span class="font-gray">添加描述特长方面的词语，让更多的人找到你，让你找到更多的同类</span>
            </div>
            <div class="row">
            	<div class="sel-bor">
                    <div class="plus-tag tagbtn clearfix"></div>
                    <div class="plus-tag-add">
                        <ul class="Form FancyForm">
                            <li>
                                <input id="" name="" type="text" class="stext" maxlength="20" />
                                <label>输入标签</label>
                                <span class="fff"></span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        	<div class="row">
            	<div class="large-3 columns">
                	<span class="">您可能感兴趣的标签：</span>
                </div>
                <div class="large-9 columns">
                    <div id="mycard-plus">
                        <div class="default-tag tagbtn">
                            <div class="clearfix">
                                <a value="-1" title="美声" href="javascript:void(0);"><span>美声</span><em></em></a>
                                <a value="-1" title="芭蕾舞" href="javascript:void(0);"><span>芭蕾舞</span><em></em></a>
                                <a value="-1" title="写作" href="javascript:void(0);"><span>写作</span><em></em></a>
                                <a value="-1" title="摄影" href="javascript:void(0);"><span>摄影</span><em></em></a>
                                <a value="-1" title="瑜伽" href="javascript:void(0);"><span>瑜伽</span><em></em></a>
                                <a value="-1" title="散打" href="javascript:void(0);"><span>散打</span><em></em></a>
                                <a value="-1" title="台球" href="javascript:void(0);"><span>台球</span><em></em></a>
                                <a value="-1" title="轮滑" href="javascript:void(0);"><span>轮滑</span><em></em></a>
                                <a value="-1" title="游泳" href="javascript:void(0);"><span>游泳</span><em></em></a>
                                <a value="-1" title="羽毛球" href="javascript:void(0);"><span>羽毛球</span><em></em></a>
                                <a value="-1" title="手工" href="javascript:void(0);"><span>手工</span><em></em></a>
                                <a value="-1" title="小提琴" href="javascript:void(0);"><span>小提琴</span><em></em></a>
                                <a value="-1" title="小品" href="javascript:void(0);"><span>小品</span><em></em></a>
                                <a value="-1" title="剪纸" href="javascript:void(0);"><span>剪纸</span><em></em></a>
                                <a value="-1" title="编织" href="javascript:void(0);"><span>编织</span><em></em></a>
                                <a value="-1" title="主持" href="javascript:void(0);"><span>主持</span><em></em></a>
                                <a value="-1" title="书法" href="javascript:void(0);"><span>书法</span><em></em></a>                   
                            </div>
                            <div class="clearfix" style="display:none;">
                                <a value="-1" title="高尔夫" href="javascript:void(0);"><span>高尔夫</span><em></em></a>
                                <a value="-1" title="绘画" href="javascript:void(0);"><span>绘画</span><em></em></a>
                            </div>
                            <div class="clearfix" style="display:none;"><a value="-1" title="跳高" href="javascript:void(0);"><span>跳高</span><em></em></a></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
            	<div class="right"><a href="javascript:void(0);" id="change-tips" style="color:#3366cc;">换一换</a></div>
            </div>
        </div>
    </div>		
    </div>
</div>
```

* 在页面上配置使用参数

```javascript

<script>
//标签插件
$("#tag1").FancyForm();
$("#tag2").FancyForm();
$("#tag3").FancyForm();
$("#tag4").FancyForm();
$("#tag5").FancyForm();
</script>
    
```
###2、demo
* http://192.168.14.97:8080/acc/wwp/FancyForm/FancyForm_v2.0.html

##方法和API
###1、方法
     FancyForm()
     
###2、参数说明
     无
        

