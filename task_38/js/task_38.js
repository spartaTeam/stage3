window.onload = function(){
	//初始化成绩，随机生成
	function initScore(n){
		var scoreArray = [],
			sum = 0;
		for(var i =0; i < n; i++){
			scoreArray[i] = Math.floor(Math.random()*20 + 82);
			sum += scoreArray[i];
		}
		scoreArray.push(sum);
		return scoreArray;
	}

	//初始化表格数据
	var scoreData = {
		'陈秀': initScore(3),
		'窦海': initScore(3),
		'樊风霞': initScore(3),
		'郭海英': initScore(3),
		'纪梅': initScore(3),
		'李国强': initScore(3),
		'李英': initScore(3),
		'琳红': initScore(3)
	};
	//初始化表头
	var names = ['姓名', '语文', '数学', '英语', '总分'];

	//默认按总分排序显示表格
	//排序函数
	var getSortFns = function(name){
		if(name == names[0]){
			return;
		}
		return function(d1, d2){
			return d2 - d1;
		}
	}
	//渲染表格
	//默认按总分排序
	var table = new SortableTable($('#scoreTable'), names, scoreData, getSortFns);
};