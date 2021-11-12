//	javascript 함수의 형식	
//	function 함수이름([인수, ...]) {
//		함수가 실행할 문장;
//		...
//		[return 값;]
//	}

//	이벤트가 실행되는 객체에 최대 글자 수 만큼의 문자가 입력되면 포커스를 넘겨줄 객체로 포커스를 넘겨주는 함수
//	moveNext(이벤트가 실행되는 객체, 최대 글자 수, 포커스를 넘겨줄 객체)
function moveNext(obj, len, nextObj){
//		alert() 함수는 인수로 지정된 내용을 메시지 창에 출력한다.
//		alert('moveNext() 함수실행')
//		value: 객체에 입력된 데이터, 객체의 value 속성으로 지정한 데이터
//		alert(obj.value)
//		consol.log() 함수는 인수로 지정된 내용을 개발자 모드의 console 창에 출력한다.
//		console.log(obj.value)
//		lengh: 객체에 입력된 문자의 개수를 얻어온다.
		if (obj.value.length == len) {
			nextObj.focus();
		}
	}

//	인수로 넘어온 폼의 유효성을 검사하고 정상이면 true를 리턴하고, 오류가 발생되면 오류 메시지를 출력하고 false를 리턴하는 함수
function formCheck(obj){
//	alert(obj)
//	obj로 this(form)가 넘어오므로 obj에는 document.juminForm이 저장된다. 
	
//	주민등록번호 앞 자리에 아무것도 입력되지 않았나 검사해서 입력되지 않았으면 메시지를 출력하고 false를 리턴시킨다.
//	obj.j1.value가 조건으로 사용되면 첫번째 주민등록번호 텍스트 상자에 뭐라도 입력되면 true, 아무것도 입력되지 않으면 false가 된다.
	if(!obj.j1.value || obj.j1.value.trim().length == 0){
		alert('주민등록번호 앞 자리를 입력하세요!!!')
//		전부 공백이 입력된 경우 입력된 내용을 지우고 포커스를 이동시킨다.
		obj.j1.value = '';
		obj.j1.focus();
		return false;
	}
	
//	주민등록번호 앞 자리에 6글자가 입력되었나 검사해서 입력되지 않았으면 메시지를 출력하고 false를 리턴시킨다.
	if(obj.j1.value.trim().length != 6){
		alert('주민등록번호 앞 6자리를 입력하세요!!!')
		obj.j1.value = '';
		obj.j1.focus();
		return false;
	}
	
//	주민등록번호 앞 자리에 숫자만 입력되었나 검사해서 숫자만 입력되지 않았으면 메시지를 출력하고 false를 리턴시킨다.
//	Number(): 인수로 지정된 문자열을 숫자로 변환한다.
//	isNaN(): NaN(Not a Number), 인수로 지정된 데이터가 숫자 또는 숫자로만 구성된 문자열이 아니면 true, 숫자면 false를 리턴한다.
//	if(isNaN(obj.j1.value.trim())){
	if(isNaN(Number(obj.j1.value.trim()))){
		alert('주민등록번호 앞자리는 숫자만 입력하세요!!!')
		obj.j1.value = '';
		obj.j1.focus();
		return false;
	}
	
//	주민등록번호 뒷자리를 검사한다
	if(!obj.j2.value || obj.j2.value.trim().length == 0){
		alert('주민등록번호 뒷 자리를 입력하세요!!!')
		obj.j2.value = '';
		obj.j2.focus();
		return false;
	}
	
	if(obj.j2.value.trim().length != 7){
		alert('주민등록번호 뒷 7자리를 입력하세요!!!')
		obj.j2.value = '';
		obj.j2.focus();
		return false;
	}
	
	if(isNaN(Number(obj.j2.value.trim()))){
		alert('주민등록번호 뒷자리는 숫자만 입력하세요!!!')
		obj.j2.value = '';
		obj.j2.focus();
		return false;
	}
	
	
//	여기까지 왔다는 것은 주민등록번호가 13자리의 숫자로 입력되었다는 의미이다. => 주민등록번호 유호성을 검사한다.
//	주민등록번호 유효성을 검사하기 위해 따로 입력된 주민등록번호를 하나의 문자열로 이어준다.
	var jumin = obj.j1.value.trim() + obj.j2.value.trim(); // 문자열 연결
	console.log(jumin);
	
//	javascript는 숫자로만 구성된 문자열의 사칙연산을 할 수 있다.
//	덧셈을 하는 경우는 문자열을 서로 이어주지만 뎃셈을 제외한 나머지 연산은 지가 알아서 숫자로 변환한 후 연산한다.
//	jumin = obj.j1.value.trim() - obj.j2.value.trim();		// 뺄셈
//	console.log(jumin);
	
//	jumin = obj.j1.value.trim() * obj.j2.value.trim();		// 곱셈
//	console.log(jumin);
	
//	jumin = obj.j1.value.trim() / obj.j2.value.trim();		// 나눗셈 => 결과는 실수, 결과를 정수로 보려면 parseInt() 함수를 사용한다.
//	console.log(jumin);

//	jumin = obj.j1.value.trim() % obj.j2.value.trim();		// 나눗셈
//	console.log(jumin);
	
//	jumin = 2 ** 10;										// 거듭제곱
//	console.log(jumin);
	
//	숫자로 구성된 문자열을 덧셈하려면 Number() 함수를 사용해서 숫자로 변환한 후 덧셈을 하면 된다.
//	jumin = Number(obj.j1.value.trim()) + Number(obj.j2.value.trim())
//	console.log(jumin);
	
//	주민등록번호 유효성을 검사한다.
//	가중치 => 234567892345, 둘리 주민등록번호 => 8304441185600 => 가중치와 곱해서 더하면 143
	var sum = 0;
	for (var i = 0; i < 12; i++) {
		//sum += jumin.charAt(i) * (i < 8 ? i + 2 : i - 6);
		sum += jumin.charAt(i) * (i % 8 + 2);
	}
	console.log(sum);
	
//	sum에 저장된 값을 11로 나눈 나머지를 11에서 뺀 결과가 주민등록번호의 마지막 자리와 같아야 한다.
//	11로 나눈 나머지를 11에서 뺀 결과가 10 이상일 경우 10의 자리는 버려야하므로 10으로 나눈 나머지와 주민등록번호의 마지막 자리와 비교한다.
	var result = (11 - sum % 11) % 10;
	
	/*
	if(result != jumin.charAt(12)){
		alert('주민번호가 올바르지 않습니다.')	
		obj.j1.value = '';
		obj.j2.value = '';
		obj.j1.focus();
		return false;
	}
	*/
	
//	'=='와 '!='는 데이터 값만 대충 비교한다. => 문자를 알아서 숫자로 바꿔 비교한다. => '1'와 1을 같은 데이터로 취급한다.
//	'==='와 '!=='는 데이터 값과 데이터의 자료형을 모두 비교한다 => '1'와 1을 다른 데이터로 취급한다.
	if(result !== Number(jumin.charAt(12))){
		alert('주민번호가 올바르지 않습니다.')	
		obj.j1.value = '';
		obj.j2.value = '';
		obj.j1.focus();
		return false;
	}
	
//	모든 유효성 검사를 무사히 통과하면 마지막에 true를 리턴시킨다.
	return true;
}
	


















