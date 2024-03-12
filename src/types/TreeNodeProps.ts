import { PathProps } from "./PathProps";

export interface TreeNodeProps {
	node: PathProps;
	toggleNodeBranch: (id: string, parent: PathProps) => Promise<void>;
}
