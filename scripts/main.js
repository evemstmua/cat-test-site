/*声明变量 let 或 var，命名大小写敏感*/
let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/catkeyboard.jpg') {
      myImage.setAttribute('src', 'images/pathappycat.jpg');
    } else {
      myImage.setAttribute('src', 'images/catkeyboard.jpg');
    }
}


let myButton = document.querySelector('button');
let myHeading = document.querySelector('h2');

function setUserName() {
  //prompt函数,显示一个对话框，对话框中包含一条文字信息，用来提示用户输入文字。
  let myName = prompt('请输入你的名字。');
  
  if(!myName || myName === null){
      setUserName();
    }else{
         /*调用 localStorage API ，它可以将数据存储在浏览器中供后续获取。
         这里用 localStorage 的 setItem() 函数来创建一个'name' 数据项，
         并把 myName 变量复制给它。
         */
        localStorage.setItem('name', myName);
        myHeading.textContent = 'Meeooowww~' + myName;
    }
}

//这里首次使用了取非运算符（逻辑非，用 ! 表示）来检测 'name' 数据是否存在。
//若不存在，调用 setUserName() 创建。
//称为初始化代码。
if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Meeooowww~' + storedName;
}

//按下按钮自由设置新名字
myButton.onclick = function() {
   setUserName();
}
