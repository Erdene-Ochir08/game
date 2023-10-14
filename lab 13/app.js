const inputEl = document.getElementsByTagName('input')[0];
const btn = document.getElementsByTagName('button')[0];
const olEl = document.getElementsByTagName('ol')[0];
btn.addEventListener('click', function(){
	//alert('clicked');
	if(inputEl.value==''){
		alert('Hooson baij bolohgui');
	}else{
		// document.createElement --> shine tag uusgeh func
		// click -> create li
		const liEl = document.createElement('li');
		liEl.innerText = inputEl.value;
		console.log(liEl);
		// append() , appendChild() --> push tag dotor uur tag nemeh func
		olEl.appendChild(liEl);
		inputEl.value='';
		const delBtn = document.createElement('button');
		console.log(delBtn);
		delBtn.innerHTML = '<i class="bi bi-trash"></i>'
		liEl.appendChild(delBtn);
		const checkBtn = document.createElement('button');
		checkBtn.innerHTML = '<i class="bi bi-check"></i>'
		liEl.appendChild(checkBtn);
	}
});