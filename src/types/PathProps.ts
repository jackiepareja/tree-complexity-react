export interface PathProps {
	name: string;
	type: string;
	isOpen: boolean;
	path: string;
	children?: PathProps[];
}
