import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const Learn = () => {
	return (
		<>
			<h2>我的學習計畫頁面</h2>
			<li>請保持樂觀的心</li>
			<li>持之以恆的學習</li>
			<li>不懂就發問</li>
			<p>
				<Link to='learnlist'>查看讀書清單</Link>
			</p>
			<div>
				<Outlet />
			</div>
		</>
	);
};

export default Learn;
