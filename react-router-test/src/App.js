import './App.css';
import { Routes, Route, Link, Outlet } from 'react-router-dom';
import Faq from './component/FAQ';
import LearnList from './component/LearnList';
import Learn from './component/Learn';
import LearnListDetail from './component/LearnListDetail';

function Home() {
	return (
		<>
			<main>
				<h1>Home 元件</h1>
			</main>
			<nav>
				<Link to='/about'>About</Link>
				<br />
				<Link to='/faq'>Faq</Link>
			</nav>
		</>
	);
}
function About() {
	return (
		<>
			<main>
				<h2>About元件</h2>
			</main>
			<nav>
				<Link to='/123'>Home</Link>
			</nav>
		</>
	);
}
// 新增一個新的router 名稱為Faq
// function Faq(){
//   return (
//     <>
//       <h1>這是Faq的業面喔</h1>
//       <Link to="/">Home</Link>
//     </>
//   )
// }
function Notfound() {
	return (
		<>
			<h1>notfuound元件</h1>
			<p>請輸入正確的網址</p>
			<Link to='/123'>Home</Link>
		</>
	);
}
// 網頁主幹
function Layout() {
	return (
		<>
			<div className='header'>
				<h1>這是layout元件 就是我要設定的header元件</h1>
				<p>表頭</p>
				{/* 查看這些路徑是被設定在哪裡 */}
				<p>
					<Link to='/123'>home</Link>
				</p>
				<p>
					<Link to='/faq'>faq</Link>
				</p>
				<p>
					<Link to='learn'>learn</Link>
				</p>
			</div>
			<div>
				<Outlet />
			</div>
			<div className='footer'>表尾</div>
		</>
	);
}
function App() {
	return (
		<div className='App'>
			<h1>(app的主畫面拉)</h1>

			{/* 當作是註冊路由表 */}
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route path='/123' element={<Home />} />
					<Route path='about' element={<About />} />
					<Route path='faq' element={<Faq />} />
					<Route path='*' element={<Notfound />} />
					{/* 在learn的元件裡 */}
					<Route path='learn' element={<Learn />}>
						<Route path='learnlist' element={<LearnList />} />
						<Route path='learnlist/:listId' element={<LearnListDetail />} />
					</Route>
				</Route>
				{/* 等於是說，當我網址後面為/則打開Home的元件內容 */}
				{/* <Route path="/" element={<Home />} /> */}
				{/* 等於是說，當我網址後面為about 則打開About的元件內容 */}
				{/* <Route path="about" element={<About />} />
        <Route path="faq" element={<Faq/>}/>
        <Route path="*" element={<Notfound/>}/> */}
			</Routes>
		</div>
	);
}

export default App;
