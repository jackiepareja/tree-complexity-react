import { memo } from "react";

export const SearchInput = memo(() => {
	return (
		<>
			<h1>Tree UI with Unknown Complexity and Depth</h1>
			<input className="atom-input" />
			<button className="atom-button">Submit</button>
		</>
	);
});
