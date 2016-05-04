var $ = function(el){
	return document.querySelector(el);
}

var $$ = function(el){
	return document.querySelectorAll(el);
}

//事件兼容处理
function addEvent(ele, event, handler){
	if(ele.addEventListener){
		ele.addEventListener(event, handler, false);
	}else if(ele.attachEvent){
		ele.attachEvent('on' + evevt, handler, false);
	}else{
		ele['on' + event] = handler;
	}
}

function removeEvent(ele, event, handler){
	if (ele.removeEventListener) {
        	ele.removeEventListener(event, hanlder, false);
   	}else if (ele.detachEvent) {
       	ele.detachEvent('on' + event, hanlder);
    	} else {
        	ele['on' + event] = null;
    }
}