import { PathProps } from "../types/PathProps";
import { fetchReposFromPath } from "../services/githubServices";

export const toggleNodeLevelBranch = async (
	nodeName: string,
	setAllRepoBranches: React.Dispatch<React.SetStateAction<PathProps[]>>,
	nodeParent?: PathProps
) => {
	if (nodeParent && nodeParent.children) {
		console.log("nodeParent:", nodeParent);
		if (!nodeParent.isOpen || !nodeParent.children.length) {
			await fetchReposFromPath(setAllRepoBranches, nodeParent);
		}
	}

	setAllRepoBranches((prevRepoPaths: PathProps[]) =>
		prevRepoPaths.map((repoPath) =>
			repoPath.name === nodeName
				? {
						...repoPath,
						isOpen: !repoPath.isOpen,
				  }
				: repoPath
		)
	);
};
