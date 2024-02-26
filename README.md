# Node.js-Login
Node.js 환경에서 간단한 Login 기능을 구현하는 과정을 정리한 내용입니다.

## 1. express로 서버 띄워보기
️🌐 익스프레스를 사용해서 웹 서버를 띄우고, 클라이언트의 요청 경로로 이동하는 라우팅 기능까지 구현

![1](https://velog.velcdn.com/images/kitree/post/9f7852c1-4b87-46a6-b403-ce1fe426eee2/image.JPG)

![22](https://github.com/skagn4929/Node.js-Login/assets/134206709/9a898734-f3c9-4bea-8643-a2cdf96c8ec5)


![3](https://velog.velcdn.com/images/kitree/post/2f72d811-0d19-4f0f-b257-fde6952353b4/image.JPG)
![4](https://velog.velcdn.com/images/kitree/post/1277eb8f-9232-4d6f-927b-2adfea21042a/image.JPG)

---
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
🎮 컨트롤러는 사용자 입력을 처리하고 모델 및 뷰 간의 상호 작용을 조정하는 역할을 한다. 컨트롤러에 해당하는 부분을 따로 분리하여 작업

![](https://velog.velcdn.com/images/kitree/post/bc066220-9606-40c8-8c01-0fadb68426d7/image.JPG)

📚 컨트롤러 부분을 모듈화하여 경로에 따라 다른 동작을 수행할 수 있게 함.

![](https://velog.velcdn.com/images/kitree/post/ea168379-68da-426d-90a7-ce30c2fdc5ef/image.JPG)

