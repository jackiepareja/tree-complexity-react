import { PathProps } from "../types/PathProps";

export const fetchReposFromPath = async (
	setAllRepoBranches: React.Dispatch<React.SetStateAction<PathProps[]>>,
	pathChildren?: PathProps
) => {
	const response = await fetch(
		`https://api.github.com/repos/jackiepareja/tree-complexity/contents/${
			pathChildren ? pathChildren?.path : ""
		}`
	);
	const data = await response.json();

	const transformNode = data.map((node: PathProps) => {
		const pathObject: PathProps = {
			name: node.name,
			type: node.type,
			isOpen: false,
			path: node.path,
		};

		if (node.type === "dir") {
			pathObject.children = [];
		}

		return pathObject;
	});

	if (pathChildren) {
		pathChildren.children = transformNode.map((child: PathProps) => ({
			...child,
			isOpen: !child.isOpen,
		}));
	} else {
		setAllRepoBranches(transformNode);
	}
};
