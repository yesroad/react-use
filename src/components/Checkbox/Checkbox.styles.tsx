import styled from '@emotion/styled';

export const Wrap = styled.section`
	max-width: 500px;
	margin: 0 auto;
`;

export const SortList = styled.div`
	margin: 10px 0;
	span {
		cursor: pointer;
		display: inline-block;
		& + span {
			margin-left: 10px;
		}
	}
`;

export const TableList = styled.table`
	width: 100%;
	border: 1px solid #ccc;
	tr {
		td {
			padding: 5px 3px;
			border: 1px solid #ccc;
			box-sizing: border-box;
		}
	}
`;
