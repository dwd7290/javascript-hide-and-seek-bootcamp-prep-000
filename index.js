function getFirstSelector(selector) {
	
	return document.querySelector(selector);

}

function nestedTarget() {
	
	return document.querySelector('#nested .target');
	
}

function increaseRankBy(n) {
  
  var nodeList = document.querySelectorAll('ranked-list li');
  
  for(var i = 0; i < nodeList.length; i ++) {
    document.querySelector('ranked-list li')[i].innerHTML = parseInt(nodeList[i].innerHTML) + n;
  }
  
}