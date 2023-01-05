console.log(1);

const root  = ReactDOM.createRoot(document.querySelector('#root'));

function c(){
     let a = 1
     return a
}
//函式就是一個元件
//元件設計開頭要大寫
function Hihi(){
     return <h1>我是function hihi</h1>
}
// 如果只有c會報錯，react里不能直接丟一個function，要執行才可以
// 大括號裡面只能放  表達式
const num = 2
const a =<h1>Hello,{num},{c},{c()}</h1>
//顯示元件
const element = <Hihi></Hihi>


root.render(element);