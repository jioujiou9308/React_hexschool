import React from 'react';
import { Link } from 'react-router-dom';

const LearnList = () => {
	const data = [
		{ Id: '1', date: '10/1', todo: '讀react', detail: '1.課程複習 2. 寫筆記' },
		{ Id: '2', date: '10/2', todo: '讀javascript', detail: ' 1. 做javascript筆記 2. 看影片' },
		{ Id: '3', date: '10/3', todo: '讀html', detail: '1. 寫題目 2. 會去看上課影片' },
		{ Id: '4', date: '10/4', todo: '讀css', detail: '1.看練習題 2.看影片 ' },
	];
	return (
		<>
			<h1>學習清單</h1>
			<div>
				{data.map((item, index) => {
					return (
						<>
							<li key={index}>
								<Link to={`/learn/learnlist/${item.Id}`}>
									{item.date} , {item.todo}
								</Link>
							</li>
							<h2>{item.Id}</h2>
						</>
					);
				})}
			</div>
		</>
	);
};

export default LearnList;
