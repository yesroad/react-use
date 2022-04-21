import React, { useCallback, useState } from 'react';

import { SortList, TableList, Wrap } from './Checkbox.styles';

const items: { seq: number }[] = [];

for (let i = 1; i <= 30; i++) {
	items.push({ seq: i });
}

const dropdownList: { name: number }[] = [
	{
		name: 15,
	},
	{
		name: 20,
	},
	{
		name: 30,
	},
];

const Checkbox: React.FC = ({ children }) => {
	const [count, setCount] = useState(15);
	const [isChecked, setIsChecked] = useState<number[]>([]);

	/** 체크박스 단일 함수 */
	const onChecked = useCallback(
		(e, idx) => {
			const { checked } = e.target;
			if (checked) {
				setIsChecked([...isChecked, idx]);
			} else {
				setIsChecked(isChecked.filter((item) => item !== idx));
			}
		},
		[isChecked],
	);

	/** 체크박스 전체선택 함수 */
	const onCheckedAll = useCallback(
		(e) => {
			const { checked } = e.target;
			if (checked) {
				setIsChecked(items.slice(0, count).map((item) => item.seq));
			} else {
				setIsChecked([]);
			}
		},
		[count],
	);

	return (
		<Wrap>
			<SortList>
				{dropdownList.map((item) => (
					<span key={item.name} onClick={() => setCount(item.name)}>
						{item.name} 개
					</span>
				))}
			</SortList>
			<TableList>
				{items.slice(0, count).map((item) => (
					<tr key={item.seq}>
						<td>
							<input
								type="checkbox"
								value={item.seq}
								checked={isChecked.includes(item.seq)}
								onChange={(e) => onChecked(e, item.seq)}
							/>
						</td>
						<td>{item.seq}</td>
					</tr>
				))}
			</TableList>
			<input
				type="checkbox"
				name="test"
				onChange={(e) => onCheckedAll(e)}
				checked={isChecked.length >= count}
			/>
			전체선택
		</Wrap>
	);
};

export default Checkbox;
