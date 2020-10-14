import React from "react";
import { useOverrides, Override, StackItem, Stack } from "@quarkly/components";
import { Box, Text } from "@quarkly/widgets";
import Dsdsd from "./Dsdsd";
const defaultProps = {};
const overrides = {
	"stackItem": {
		"kind": "StackItem",
		"props": {
			"width": "50%",
			"sm-width": "100%"
		}
	},
	"stackItemOverride": {
		"kind": "Override",
		"props": {
			"slot": "StackItemContent",
			"background": "--color-lightD1",
			"padding": "20px",
			"flex-direction": "column"
		}
	},
	"box": {
		"kind": "Box",
		"props": {
			"width": "170px",
			"height": "170px",
			"margin": "0 auto",
			"background": "url(https://images.unsplash.com/photo-1503443207922-dff7d543fd0e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=582&q=80) 50% 0/cover no-repeat",
			"border-radius": "50%"
		}
	},
	"text": {
		"kind": "Text",
		"props": {
			"as": "h3",
			"font": "--headline3",
			"margin": "20px 0 5px 0",
			"children": "Nathan K. Joe"
		}
	},
	"text1": {
		"kind": "Text",
		"props": {
			"color": "--grey",
			"margin": "0",
			"children": "CEO"
		}
	},
	"stackItem1": {
		"kind": "StackItem",
		"props": {
			"width": "50%",
			"sm-width": "100%"
		}
	},
	"stackItemOverride1": {
		"kind": "Override",
		"props": {
			"slot": "StackItemContent",
			"background": "--color-lightD1",
			"padding": "20px",
			"flex-direction": "column"
		}
	},
	"box1": {
		"kind": "Box",
		"props": {
			"width": "170px",
			"height": "170px",
			"margin": "0 auto",
			"background": "url(https://images.unsplash.com/photo-1546672741-d327539d5f13?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80) 50% 0/cover no-repeat",
			"border-radius": "50%"
		}
	},
	"text2": {
		"kind": "Text",
		"props": {
			"as": "h3",
			"font": "--headline3",
			"margin": "20px 0 5px 0",
			"children": "David R. Lema"
		}
	},
	"text3": {
		"kind": "Text",
		"props": {
			"color": "--grey",
			"margin": "0",
			"children": "Developer"
		}
	},
	"stackItem2": {
		"kind": "StackItem",
		"props": {
			"width": "50%",
			"sm-width": "100%"
		}
	},
	"stackItemOverride2": {
		"kind": "Override",
		"props": {
			"slot": "StackItemContent",
			"background": "--color-lightD1",
			"padding": "20px",
			"flex-direction": "column"
		}
	},
	"box2": {
		"kind": "Box",
		"props": {
			"width": "170px",
			"height": "170px",
			"margin": "0 auto",
			"background": "url(https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80) 50% 0/cover no-repeat",
			"border-radius": "50%"
		}
	},
	"text4": {
		"kind": "Text",
		"props": {
			"as": "h3",
			"font": "--headline3",
			"margin": "20px 0 5px 0",
			"children": "Janet E. Morey"
		}
	},
	"text5": {
		"kind": "Text",
		"props": {
			"color": "--grey",
			"margin": "0",
			"children": "Marketing"
		}
	},
	"stackItem3": {
		"kind": "StackItem",
		"props": {
			"width": "50%",
			"sm-width": "100%"
		}
	},
	"stackItemOverride3": {
		"kind": "Override",
		"props": {
			"slot": "StackItemContent",
			"background": "--color-lightD1",
			"padding": "20px",
			"flex-direction": "column"
		}
	},
	"box3": {
		"kind": "Box",
		"props": {
			"width": "170px",
			"height": "170px",
			"margin": "0 auto",
			"background": "url(https://images.unsplash.com/photo-1510227272981-87123e259b17?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=666&q=80) 50% 0/cover no-repeat",
			"border-radius": "50%"
		}
	},
	"text6": {
		"kind": "Text",
		"props": {
			"as": "h3",
			"font": "--headline3",
			"margin": "20px 0 5px 0",
			"children": "Claire R. Peery"
		}
	},
	"text7": {
		"kind": "Text",
		"props": {
			"color": "--grey",
			"margin": "0",
			"children": "Designer"
		}
	},
	"dsdsd": {
		"kind": "Dsdsd",
		"props": {}
	}
};

const Xxx = props => {
	const {
		override,
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Stack {...rest}>
		<StackItem {...override("stackItem")}>
			<Override {...override("stackItemOverride")} />
			<Box {...override("box")} />
			<Text {...override("text")} />
			<Text {...override("text1")} />
		</StackItem>
		<StackItem {...override("stackItem1")}>
			<Override {...override("stackItemOverride1")} />
			<Box {...override("box1")} />
			<Text {...override("text2")} />
			<Text {...override("text3")} />
		</StackItem>
		<StackItem {...override("stackItem2")}>
			<Override {...override("stackItemOverride2")} />
			<Box {...override("box2")} />
			<Text {...override("text4")} />
			<Text {...override("text5")} />
		</StackItem>
		<StackItem {...override("stackItem3")}>
			<Override {...override("stackItemOverride3")} />
			<Box {...override("box3")} />
			<Text {...override("text6")} />
			<Text {...override("text7")} />
		</StackItem>
		<Dsdsd {...override("dsdsd")} />
		{children}
	</Stack>;
};

Object.assign(Xxx, { ...Stack,
	defaultProps,
	overrides
});
export default Xxx;