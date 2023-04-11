const express = require("express");
const http = require("http"); // 다른 포트에서 올경우 대비
const path = require("path");
const app = express();
//app.set('port', 3000);
const path = require('path');
const server = http.createServer(app);// 여기서 작업이 진행됩니다!
// Lambda 식 문법
server.listen(3000);
app.use(express.static(path.join(__dirname, './html')))


//const : 선언 후에는 수정안됨, 외부에서 사용불가능

//var: 수정가능, 값 변경 가능, 선언해서 값설정 복수가능, 
//함수 외부에서도 사용가능

//let: 수정가능, 값 변경 가능, 복수 선언설정 불가능
// 함수 외부에서 사용 불가능

//val: 선언하는 동시에 값 입력필요. 합수 밖에서 사용가능
//ex> val a = 'a,b,c' (0)
//val a;
//a = 'a,b,c';(x)



   // http: 암호화 안됨 80 port
// https: 호출할 때 정보를 암호화 , 암호화 키를 브라우저에 던져줌
// 443 port

// 암호화 
// 대칭키: 암호화, 복호화 할때 같은 키
// 비대칭키: 암호화, 복호화의 키가 각각 다르다


