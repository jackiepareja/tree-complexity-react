import { memo } from "react";
import classes from "../../../styles/accordion/accordion.module.css";

interface HeaderProps {
	onClick?: () => void;
	children: React.ReactNode;
}

export const Header = memo(({ onClick, children }: HeaderProps) => {
	return (
		<div className={classes["accordion-header"]} onClick={onClick}>
			{children}
		</div>
	);
});
