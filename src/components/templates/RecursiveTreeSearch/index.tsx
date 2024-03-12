import { memo } from "react";
import { RecursiveTreeSearchProps } from "../../../types/RecursiveTreeSearchProps";
import TreeNode from "./TreeNode";
import { v4 as uuidv4 } from "uuid";
import { PathProps } from "../../../types/PathProps";

const RecursiveTreeSearch: React.FC<RecursiveTreeSearchProps> = ({
	nodeTree,
	toggleNodeBranch,
}) => {
	return (
		<>
			{nodeTree.map((node: PathProps) => (
				<TreeNode
					key={uuidv4()}
					node={node}
					toggleNodeBranch={toggleNodeBranch}
				/>
			))}
		</>
	);
};

export default memo(RecursiveTreeSearch);
