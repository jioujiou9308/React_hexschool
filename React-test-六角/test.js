// function App(){
//      const [value,setValue] = useState("hellow")
//      return(
//           <>
//                <input value={value} 
//                onChange={(e)=>setValue(e.target.value)}
//                type="text" />
//           </>
//      )
// }

// 

const fs = require('fs')

try{
     const file = fs.readFileSync('./READ.md')
     console.log(file)
} catch(err){
     console.log('讀黨失敗');
}



// processUserInput(greeting)

// function processUserInput(callback){
// const name = prompt('pleace enter your name')
// callback(name)
// }

// function greeting(name){
// alert(`hello, ${name}`)
// }
