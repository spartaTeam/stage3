window.onload = function(){
	var body = document.getElementsByTagName('body')[0],
		log = document.getElementById('log'),
		loginBox = document.getElementById('loginBox'),
		loginBtn = document.getElementById('submit'),
		mask = document.getElementsByClassName('mask')[0],
		close = document.getElementsByClassName('close')[0];
	//页面刷新显示登录框&&点击登录显示登录框
	function showLoginBox(){
		loginBox.style.display = 'block';
	}
	function hideLoginBox(){
		loginBox.style.display = 'none';
	}
	//显示浮层
	function showMask(){
		mask.style.display = 'block';
	}
	//取消浮层
	function hideMask(){
		mask.style.display = 'none';
	}
	//点击登录显示loginBox
	log.onclick = show;
	//点击右上角关闭
	close.onclick = hide;
	//初始化
	function show(){
		showMask();
		showLoginBox();
	}
	//隐藏
	function hide(){
		hideMask();
		hideLoginBox();
	}
	show();
};