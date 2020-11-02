# vue.js-study

***1.*** vuex study : **vuex** 의 기능을 활용한 간단한 회원가입 페이지  
***2.*** 게시판 : 컴포넌트끼리의 데이터 전달을 이해하기 위한 간단한 게시판  
***3.*** vue-router : **vue-router** 의 기능을 이해하기 위한 간단한 회원가입 페이지  

<details>
  <summary>HTML 기초</summary>
  <div markdown="1">
    
   # Html 이란?

#### 태그

<.h1>태그는 이런거<./h1>

#### 속성

- 속성은 태그에 추가로 정보를 제공하거나 태그의 동작이나 표현을 제어할 수 있는 설정값
- <.h1 id="title">Hello,Html<./h1>
- 속성의 값을 큰 따움표로 했으면, 마무리도 큰 따움표로 해야한다. 작은따움표도 가능
- 속성은 두개이상 사용할 수 있다.
  - <.h1 id="title" class="test"> Hello, html<./h1>

#### 태그 중첩

- 올바른 예
  - <.h1>hello ! <.i>html<./i> <./h1>
- 잘못된 예
  - <.h1>hello <.i>html<./h1><./i>



#### 빈 태그

- ```
  <br>
  <img src="">
  <input type="">
  ```

- 위 태그들처럼 빈 태그는 내용이 없어서 종료 태그가 필요하지 않다.

#### HTML 문서구조

- ```html
  <!DOCTYPE html>
  <html lang="ko">
      <head>
          <meta charset="UTF-8">
          <title>HTML</title>
      </head> 
      <body>
          <.h1>Hello, HTML</.h1>
      </body>
  </html>
  ```

#### HTML 태그

- <.h1> ~ <.h6> : 문서 제목을 표현할 때 사용
- <.p><./p> 단락을 나눔
- <.br> : 라인 브레이크, enter키를 누르는것과 같다.
- <.b> : 글자를 굵게
- <.i> :글자를 이탤릭체로
- <.u> :글자에 밑줄
- <.s> : 글자에 중간선
- <.a href="주소" target="_blank">네이버</a>
- target의 default값은 _selft로, 보고있던 창에서 링크 이동, blank는 새로운 창을 켜서 이동

- a태그는 #을 넣고 내부링크로도 이동이 가능하다.



#### 아무런 의미 없는 태그

- <.div> 와 <.span>이 있다.
- div는 블럭을 감싸고, span은 inline을 감싼다.

#### 리스트 요소

- <.ul> : 순서가 없는 리스트를 만듬
- <.ol> : 순서가 있는 번호 리스트를 만듬
  - 둘다 공통적으로 <.li>를 사용해서 나열함.

### 이미지

```markup
<img src="./images/pizza.png" alt="피자">
```

- src 속성 : <img> 의 필수 속성으로 이미지의 경로를 나타내는 속성
  - 절대경로와 상대경로가 있다.
    - 상대경로: './' 페이지가 있는 현재 폴더를 나타낸다.(웹 페이지 기준)
    - 절대경로: 실제 그 이미지가 위치한 곳의 전체 경로

#### 테이블

- <.tr> : 행
- <.td> 셀
- <.th> 제목 셀
- <.table> 표를 나타냄
- <.caption> 표의 제목



#### 폼요소1

- ```
  <input type="text" placehoder="입력하세요"><br>
  ```

- ```html
  <input type="password"><br>
  ```

- ```html
  남자<input type="radio" name= "gender">
  여자<input type="radio" name= "gender">
  ```

  - 이런식으로 name에 같은 요소임을 표현해줘야 중복체크가 안됨.

- ```html
  영화감상<input type="checkbox" checked>
  음악감상<input type="checkbox">
  취침<input type="checkbox">
  ```

- submit : form의 값을 전송하는 버튼

- reset : form의 값을 초기화하는 버튼

- image : 이미지를 삽입할 수 있는 버튼 (submit과 동작이 동일함)

- button : 아무 기능이 없는 버튼

- <.select>태그

  - ```html
    <select>
        <option>1</option>
        <option>2</option>
        <option>3</option>
    </select>
    ```

- <.label> : 폼 컨트롤과 연결시켜주기 위함으로 웹 접근성에 도움(필수사용)

- ```html
  <label for="name">이름</label>: <input type="text" id="name"><br>
  ```

  - 이런식으로, input type의 id값과 label의 for 값을 동일하게 적어줘야한다.

- <.fieldset>, <.legend>는 form 요소를 구조화 하기 위해 필요한 태그입니다.

  ```html
  <fieldset>
      <legend>기본 정보</legend>
      ... 폼 요소들 ...
  </fieldset>
  <fieldset>
      <legend>부가 정보</legend>
      ... 폼 요소들 ...
  </fieldset>
  ```

  
  </div>
</details>

