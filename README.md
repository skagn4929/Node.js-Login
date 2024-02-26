# Node.js-Login
Node.js 환경에서 간단한 Login 기능을 구현하는 과정을 정리한 내용입니다.

## 1. Express로 서버 띄워보기
️🌐 Express를 사용해서 웹 서버를 띄우고, 클라이언트의 요청 경로로 이동하는 라우팅 기능까지 구현

![1](https://velog.velcdn.com/images/kitree/post/9f7852c1-4b87-46a6-b403-ce1fe426eee2/image.JPG)

![22](https://github.com/skagn4929/Node.js-Login/assets/134206709/9a898734-f3c9-4bea-8643-a2cdf96c8ec5)


![3](https://velog.velcdn.com/images/kitree/post/2f72d811-0d19-4f0f-b257-fde6952353b4/image.JPG)
![4](https://velog.velcdn.com/images/kitree/post/1277eb8f-9232-4d6f-927b-2adfea21042a/image.JPG)

## 2. 로그인 화면 만들기
✏️ 로그인 화면을 하드코딩하여 구현

![](https://velog.velcdn.com/images/kitree/post/597f34df-0f96-4441-bf05-affbf19618a3/image.JPG)

![](https://velog.velcdn.com/images/kitree/post/2c71755c-ceda-4630-b97a-f6896a2057a4/image.JPG)

## 3. 로그인 뷰(view) 최적화
️📝 ejs 모듈을 받고 index.ejs와 login.ejs 파일을 만들어 분류

![](https://velog.velcdn.com/images/kitree/post/6529790e-9b16-4502-9e32-86208f67cfd8/image.JPG)

💻 하드코딩에서 뷰 엔진으로 코드 최적화 작업

![](https://velog.velcdn.com/images/kitree/post/70e6afd5-bd7f-4ba7-8198-e2936501a829/image.JPG)

## 4. 라우팅 분리
️🔄 라우트 폴더를 생성하고, 그 안에 미들웨어를 담을 디렉토리를 생성

![](https://velog.velcdn.com/images/kitree/post/c36983a0-9fbf-41d7-89d4-6cc6c14b0180/image.JPG)

️📡 use 메서드를 사용하여 미들웨어를 등록

![](https://velog.velcdn.com/images/kitree/post/14be5c7a-0af7-4af7-ab93-20a11025f610/image.JPG)

## 5. 컨트롤러(Controller) 분리
> 컨트롤러는 사용자 입력을 처리하고 모델 및 뷰 간의 상호 작용을 조정하는 역할을 한다.

🎮 컨트롤러에 해당하는 부분을 따로 분리하여 작업

![](https://velog.velcdn.com/images/kitree/post/bc066220-9606-40c8-8c01-0fadb68426d7/image.JPG)

📚 컨트롤러 부분을 모듈화하여 경로에 따라 다른 동작을 수행할 수 있게 함.

![](https://velog.velcdn.com/images/kitree/post/ea168379-68da-426d-90a7-ce30c2fdc5ef/image.JPG)

## 6. app.listen() 모듈화
💻 서버를 띄워주는 app.listen() 부분을 따로 분리하여 연결 작업

![](https://velog.velcdn.com/images/kitree/post/95370ee1-fd61-4b7a-818c-4df6a56ab4ef/image.JPG)
![](https://velog.velcdn.com/images/kitree/post/14f3d1eb-d03d-422e-8df8-83497143d83f/image.JPG)

## 7. 프런트를 위한 JS 만들기
️📄 로그인 기능과 연결하는 자바스크립트 파일 생성, 미들웨어를 통해 정적 경로 설정

![](https://velog.velcdn.com/images/kitree/post/4bb712fe-96ba-4b30-8b22-c745a159ff58/image.JPG)

## 8. DOM으로 HTML 객체 제어하기
> DOM은 문서 객체 모델로, 인터페이스를 통해 자바스크립트에서 HTML 데이터 제어 가능.

️🧩️ 자바스크립트를 사용하여 웹 요소 가져오기 및 기능 구현

![](https://velog.velcdn.com/images/kitree/post/9d60e4d0-6163-406f-9f29-7d2ce294dbe1/image.JPG)

## 9. 프런트에서 서버로 데이터 보내기
📥 fetch를 이용하여 클라이언트에서 입력한 아이디와 비밀번호 값을 서버에게 전달. 클라이언트는 입력된 정보를 객체로 만들고, fetch를 통해 "/login" 엔드포인트로 POST 요청을 보낸다. 이때 요청은 JSON 형식으로 전송된다.

![](https://velog.velcdn.com/images/kitree/post/a5620f4f-ca1a-4123-8d84-8f86f30becf9/image.JPG)
 
## 10. 로그인 API 만들기 in 서버
📨 클라이언트는 "/login" 엔드포인트로 POST 요청을 보내고, 서버는 해당 요청을 처리하여 요청된 데이터를 파싱한다.

- Express의 라우터를 설정. "/login" 엔드포인트로의 GET 요청은 ctrl.output.login 함수를 호출하고, POST 요청은 ctrl.process.login 함수를 호출한다.

```jsx
// app/src/routes/home/index.js
"use strict";

const express = require("express");
const router = express.Router();

const ctrl = require("./home.ctrl");

router.get("/", ctrl.output.hello);
router.get("/login", ctrl.output.login);
router.post("/login", ctrl.process.login);

module.exports = router;
```

- 요청에 대한 응답을 처리하는 컨트롤러 함수들을 정의. output 객체에는 홈 페이지와 로그인 페이지를 렌더링하는 함수가 있고, process 객체에는 로그인 요청을 처리하는 함수가 있다.

```jsx
// app/src/routes/home/home.ctrl.js
"use strict";

const output = {
  hello: (req, res) => {
    res.render("home/index");
  },

  login: (req, res) => {
    res.render("home/login");
  },
};

const process = {
  login: (req,res) => {
    console.log(req.body);
  },
};

module.exports = {
  output,
  process
};
```

- 요청 데이터를 파싱하기 위해 body-parser 미들웨어를 설정. body-parser는 JSON 형식의 요청 본문을 파싱하여 JavaScript 객체로 변환한다.

```jsx
//  /app/app.js
"use strict";

// 모듈
const express = require("express");
const bodyParser = require("body-parser");
const app = express();

// 라우팅
const home = require("./src/routes/home");

// 앱 세팅
app.set("views", "./src/views");
app.set("view engine", "ejs");
app.use(express.static(`${__dirname}/src/public`));

app.use(bodyParser.json());
// URL을 통해 전달되는 데이터에 한글, 공백 등과 같은 문자가 포함될 경우 제대로 인식되지 않는 문제 해결
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", home); // use -> 미들 웨어를 등록해주는 메서드.

module.exports = app;
```

## 11. 로그인 인증 기능 만들기 in 서버
🔐 로그인을 하기 위해서는 클라이언트에서 전달한 아이디와 비밀번호 값을 서버에서 인증하는 과정이 필요한데, 해당 데이터를 서버가 가지고 있어야 하므로 컨트롤러 자체에서 유저 데이터를 만들고 인증하는 과정을 거친다. 

- 클라이언트에서는 사용자가 입력한 아이디와 비밀번호를 JSON 형식으로 만들어 POST 요청으로 서버에 보내고 서버는 "/login" 엔드포인트로부터 POST 요청을 받아 로그인 처리를 한다. 

```jsx
// app/src/public/js/home/login.js
"use strict";

const id = document.querySelector("#id"),
  psword = document.querySelector("#psword"),
  loginBtn = document.querySelector("button");

loginBtn.addEventListener("click", login);

function login() {
  const req = {
    id: id.value,
    psword: psword.value,
  };
  fetch("/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(req),
  })
    .then((res) => res.json())
    .then(console.log);
}
```

- users 객체에 아이디와 비밀번호가 배열 형태로 저장되어 있는 간단한 유저 데이터를 정의하고, 요청 데이터에서 아이디와 비밀번호를 추출한 후 비교한다. 유저 데이터에 일치하는 정보가 있다면 로그인 성공을 클라이언트에게 응답하고, 그렇지 않다면 로그인 실패를 응답한다.

```jsx
// app/src/routes/home/home.ctrl.js
"use strict";

const output = {
  hello: (req, res) => {
    res.render("home/index");
  },

  login: (req, res) => {
    res.render("home/login");
  },
};

const users = {
  id: ["test", "ki", "noh"],
  psword: ["1234", "5678", "9000"],
};

const process = {
  login: (req, res) => {
    const id = req.body.id,
      psword = req.body.psword;

    console.log(id, psword);

    if (users.id.includes(id)) {
      const idx = users.id.indexOf(id);
      if (users.psword[idx] === psword) {
        return res.json({
          success: true,
        });
      }
    }
    return res.json({
      sucess: false,
      msg: "로그인에 실패하셨습니다.",
    });
  },
};

module.exports = {
  output,
  process,
};
```
