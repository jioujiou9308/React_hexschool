import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
const LearnListDetail = () => {
	// 注意小心後面有()
	const { listId } = useParams();
	const navigate = useNavigate();

	const [data2, setData2] = useState({});

	useEffect(() => {
		const data = [
			{ Id: '1', date: '10/1', todo: '讀react', detail: '1.課程複習 2. 寫筆記' },
			{ Id: '2', date: '10/2', todo: '讀javascript', detail: ' 1. 做javascript筆記 2. 看影片' },
			{ Id: '3', date: '10/3', todo: '讀html', detail: '1. 寫題目 2. 會去看上課影片' },
			{ Id: '4', date: '10/4', todo: '讀css', detail: '1.看練習題 2.看影片 ' },
		];
		const newData = data.filter(function (item, index) {
			return item.Id === listId;
		});
		// filter 出來是一個陣列
		console.log(newData[0], '123');
		setData2({ ...newData[0] });
	}, []);

	// console.log(detail,"123");

	return (
		<>
			{data2.date}
			<br />
			{data2.detail}
			<br />
			<input
				type='text'
				value='返回讀書清單'
				onClick={() => {
					navigate('/learn/learnlist');
				}}
			/>
		</>
	);
};

export default LearnListDetail;
