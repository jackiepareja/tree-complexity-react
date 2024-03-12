import { memo, ReactNode } from "react";
import classes from "../../../styles/accordion/accordion.module.css";

interface ContentProps {
	children: ReactNode;
	expanded: boolean;
}

export const Content = memo(({ children, expanded }: ContentProps) => {
	return (
		<div
			className={`${classes["accordion-content"]} ${
				expanded ? classes["expanded"] : classes["collapsed"]
			}`}
		>
			<div>{children}</div>
		</div>
	);
});
