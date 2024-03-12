import { memo } from "react";
import classes from "../../../styles/accordion/accordion.module.css";

export const Accordion = memo(({ children }: { children: React.ReactNode }) => {
	return <div className={classes["molecule-accordion-item"]}>{children}</div>;
});
