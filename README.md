## 컴포넌트

- 재사용이 가능한 개별적인 코드 조각

#### 함수형 컴포넌트 (권장 - 쉽고 확장성 큼)

> function키워드를 이용해서 인풋 (props로 받음) 과 아웃풋 ({props.name} <= HTML처럼 생긴 컴포넌트의 구조) 을 내보내는 것

#### 클래스형 컴포넌트

> 지금은 클래스형 컴포넌트를 사용해 새롭게 프로젝트를 만드는 경우는 드물다. render()메서드를 이용해 엘리먼트를 반환.

```
import하는 영역

const App = () => {
//자바 스크립트를 쓸 수 있는 영역

return(
  <div>
    { JSX를 쓸 수 있는 영역 }
</div>
)}

//만든 컴포넌트를 밖으로 내보내는 영역
export default App;
```

App.jsx에 모든 코드를 넣으면 너무 길어져서 보기 힘들어지므로 import / export를 이용해 컴포넌트를 나누어 각각의 jsx파일에서 공유하는 방식을 사용해야함

#### 컴포넌트 생성시 주의사항

> 컴포넌트 파일을 만들 때, 파일명은 대문자로 시작하는 파스칼 케이스 폴더는 소문자로 시작하는 카멜케이스로 작성

<br>

## JSX문법

문자열도, HTML도 아님!

```
const apple = <h1>furit!</h1>

```

#### "자바스크립트를 확장한 문법"

- jsx에서 쓰는 <div></div> 는 DOM요소가 아닌 react요소
- jsx 문법은 babel이라는 도구를 이용해 자바스크립트로 변환됨

#### 주의사항

1. 하나의 엘리먼트만 반환해야 함<br>
2. 자바스크립트 문법이 필요하면 중괄호를 넣어줘야함.
3. class를 주고 싶을 땐 className=""으로 작성해야 함
4. 자바스크립트 객체형식으로 스타일 지정함 => style={{ color: "orange", fontSize:"10px", }}

<br>

## Props

- 컴포넌트끼리 정보를 교환하는 방식
- 위에서 아래로만 흐름 (부모 => 자식 O, 자식 => 부모 X)
- 읽기전용으로 취급

#### -명시적으로 부모 컴포넌트를 자식 컴포넌트로 넘겨주는 방법

```
//부모컴포넌트
//명시적으로 lastName을 Child에 보내줌
function Parents() {
	const lastName = "홍";
    return <Child lastName={lastName} />;
};

```

```
//자식컴포넌트
function Child(props) { //props는 임의로 지정한 명칭이며, 다른 명칭으로 변경가능
	console.log("props => ", props); //props => lastName:"홍"

    const name = "길동";
    return (<div>
    	<p>{`내 이름은 ${props.lastName}${name}입니다`}</p>
    </div>);
};

```

#### -children으로 부모 컴포넌트를 자식 컴포넌트로 넘겨주는 방법

```
//부모컴포넌트
const Parents = () => {
	return <Child>홍</Child>;
};

```

```
//자식컴포넌트
const Child = (props) => {
	return <div>{props.children}길동</div>
}

```

- children의 용도
  layout컴포넌트(배경)를 만들때 주로 사용

#### -구조분해할당을 이용해 props.lastName을 줄여쓸 수도 있음

(1)

```
function Child(props) {
	const { lastName } = props;

    const name = "길동";
    return (<div>
    	<p>{`내 이름은 ${lastName}${name}입니다`}</p>
    </div>);
};

```

(2)

```
function Child({ lastName }) {
	const name = "길동";
    return (<div>
    	<p>{`내 이름은 ${lastName}${name}입니다`}</p>
    </div>);
};

```

만약에 자식컴포넌트에서 lastName을 받을거라고 정의를 했는데 <br>
실수로! 부모컴포넌트에서 lastName을 보내지 않았을 경우!
<br><br>
=> return <Child lastName={lastName} /> 에서 그냥 <Cild />만 한 경우를 대비해
<br><br>
자식컴포넌트에서 props에 기초값을 세팅해놓을 수 잇음

```
function Child({ lastName = "미입력" }) {
	const name = "길동";
    return (<div>
    	<p>{`내 이름은 ${lastName}${name}입니다`}</p>
    </div>);
};

```

이렇게 기초값을 설정해두면 "내 이름은 미입력길동입니다"라고 작성되어 성을 넣지 않았음을 바로 알 수 있음!
<br><br>

#### 중요한 것

1. 부모로부터 자식으로 값을 내려줄 땐 props를 사용한다
2. 자식은 하나의 객체로 props의 값을 받는다 (children포함)
3. "props."을 일일히 써주기 귀찮으니 구조분해할당을 해 변수로 활용할 수 있다
4. 근데 이 변수가 부모에 세팅이 안되어있는 경우 기초값을 이용해 예외사항을 방지할 수 있다
