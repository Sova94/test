import React from "react";
import { useOverrides, Override, StackItem } from "@quarkly/components";
import { Box, Text } from "@quarkly/widgets";
const defaultProps = {
	"width": "50%",
	"sm-width": "100%"
};
const overrides = {
	"box": {
		"kind": "Box",
		"props": {
			"width": "170px",
			"height": "170px",
			"margin": "0 auto",
			"background": "url(https://images.unsplash.com/photo-1510227272981-87123e259b17?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=666&q=80) 50% 0/cover no-repeat",
			"border-radius": "50%"
		}
	},
	"text": {
		"kind": "Text",
		"props": {
			"as": "h3",
			"font": "--headline3",
			"margin": "20px 0 5px 0",
			"children": "Claire R. Peery"
		}
	},
	"text1": {
		"kind": "Text",
		"props": {
			"color": "--grey",
			"margin": "0",
			"children": "Designer"
		}
	}
};

const Dsdsd = props => {
	const {
		override,
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <StackItem {...rest}>
		<Override slot="StackItemContent" background="--color-lightD1" padding="20px" flex-direction="column" />
		<Box {...override("box")} />
		<Text {...override("text")} />
		<Text {...override("text1")} />
		{children}
	</StackItem>;
};

Object.assign(Dsdsd, { ...StackItem,
	defaultProps,
	overrides
});
export default Dsdsd;