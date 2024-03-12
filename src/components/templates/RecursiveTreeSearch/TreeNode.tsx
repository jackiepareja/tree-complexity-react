import React from "react";
import { Accordion } from "../../molecules/Accordion";
import { Header } from "../../molecules/Accordion/Header";
import { Content } from "../../molecules/Accordion/Content";

import classes from "../../../styles/accordion/accordion.module.css";
import FolderImg from "../../../assets/folder.png";
import OpenFolderImg from "../../../assets/open-folder.png";
import FileImg from "../../../assets/google-docs.png";
import { v4 as uuidv4 } from "uuid";
import { PathProps } from "../../../types/PathProps";
import { TreeNodeProps } from "../../../types/TreeNodeProps";

const TreeNode: React.FC<TreeNodeProps> = ({ node, toggleNodeBranch }) => {
	const isDirectory = node.type === "dir";

	return (
		<Accordion key={uuidv4()}>
			<Header onClick={() => toggleNodeBranch(node.name, node)}>
				<img
					src={
						isDirectory ? (node.isOpen ? OpenFolderImg : FolderImg) : FileImg
					}
					alt={isDirectory ? "Image, folder icon" : "Image, file icon"}
				/>
				<div className={classes["molecule-accordion-header"]}>{node.name}</div>
			</Header>
			{node.children && (
				<Content expanded={node.isOpen}>
					{node.children.map((child: PathProps) => (
						<TreeNode
							key={uuidv4()}
							node={child}
							toggleNodeBranch={toggleNodeBranch}
						/>
					))}
				</Content>
			)}
		</Accordion>
	);
};

export default React.memo(TreeNode);
