import { useEffect, useState, useCallback } from "react";

import "./App.css";
import RecursiveTreeSearch from "./components/templates/RecursiveTreeSearch";
import { fetchReposFromPath } from "./services/githubServices";
import { toggleNodeLevelBranch } from "./utils/treeUtils";
import { PathProps } from "./types/PathProps";

function App() {
	const [allRepoBranches, setAllRepoBranches] = useState<PathProps[]>([]);

	const fetchRepoData = useCallback(
		async (pathChildren?: PathProps) => {
			await fetchReposFromPath(setAllRepoBranches, pathChildren);
		},
		[setAllRepoBranches]
	);

	const toggleNodeBranch = useCallback(
		async (nodeName: string, nodeParent?: PathProps) => {
			await toggleNodeLevelBranch(nodeName, setAllRepoBranches, nodeParent);
		},
		[]
	);

	useEffect(() => {
		fetchRepoData();
	}, [fetchRepoData]);

	return (
		<div className="App">
			<RecursiveTreeSearch
				nodeTree={allRepoBranches}
				toggleNodeBranch={toggleNodeBranch}
			/>
		</div>
	);
}

export default App;
