import React from "react";

type Props = {
	if: unknown;
	children: React.ReactNode;
};

const When: React.FC<Props> = ({ if: condition, children }) => <>{condition ? children : null}</>;

export default When;
