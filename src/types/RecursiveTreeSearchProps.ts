import { PathProps } from "./PathProps";

export interface RecursiveTreeSearchProps {
	nodeTree: PathProps[];
	toggleNodeBranch: (id: string, parent: PathProps) => Promise<void>;
}
