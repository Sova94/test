import React from "react";
import theme from "theme";
import { Theme, Text, Box, Button } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { Override, Menu, Section, StackItem, Stack } from "@quarkly/components";
export default (() => {
	return <Theme theme={theme}>
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Section>
			<Box
				display="flex"
				padding="12px 0"
				justify-content="space-between"
				align-items="center"
				flex-direction="row"
				md-flex-direction="column"
			>
				<Text margin="0" md-margin="0px 0 20px 0" text-align="left" font="--lead">
					Awesome Company
				</Text>
				<Menu
					display="flex"
					justify-content="center"
					font="--base"
					font-weight="700"
					md-flex-direction="column"
					md-align-items="center"
				>
					<Override slot="link" text-decoration="none" color="--dark" padding="6px 12px" />
					<Override slot="link-active" color="--primary" />
					<Override slot="item" padding="6px" />
					<Override slot="link-404">
						404
					</Override>
				</Menu>
			</Box>
		</Section>
		<Section padding="100px 0" sm-padding="40px 0">
			<Override slot="SectionContent" align-items="center" />
			<Text as="h2" font="--headline1" md-font="--headline2" margin="20px 0 0 0">
				About Us
			</Text>
			<Text
				as="p"
				font="--lead"
				margin="20px 0 0 0"
				hover-color="#ff0000"
				hover-border-width="15px"
				hover-border-color="#000000"
				hover-border-style="groove"
			>
				Hi! I'm a paragraph. Click here to add your own text and edit me. It’s a piece of cake. I’m a great space for you to tell a story and let your site visitors know more about you. Talk about your business and what products and services you offer. Share how you came up with the idea for your company and what makes you different from your competitors. Make your business stand out and show your visitors who you are.
			</Text>
			<Button font="--lead" margin="20px">
				Button
			</Button>
			<Section background="--color-darkL2" padding="64px 0" sm-padding="40px 0">
				<Stack>
					<StackItem width="50%" lg-width="100%">
						<Override
							slot="StackItemContent"
							margin-right="-20%"
							padding-bottom="120%"
							background="url(https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80) 50% 15%/cover"
							lg-margin-right="0"
							lg-padding-bottom="80%"
						/>
					</StackItem>
					<StackItem width="50%" lg-width="100%">
						<Override
							slot="StackItemContent"
							padding="98px 64px"
							margin-left="-20%"
							margin-top="36px"
							background="--color-red"
							color="--light"
							mix-blend-mode="lighten"
							lg-margin-left="0"
							lg-margin-top="0"
							flex-direction="column"
						/>
						<Text
							as="h4"
							margin="0"
							font="--base"
							letter-spacing="1px"
							text-transform="uppercase"
						>
							About me
						</Text>
						<Text as="h1" margin="0 0 16px 0" font="--headline1" lg-font="--headline2">
							Hey I’m David
						</Text>
						<Text as="p" margin="16px 0" font="--base" max-width="400px">
							My name is David R. Moore, born and raised in France, worked as a professional photographer and videographer for more than 10 years, awarded the CDS Documentary Essay Prize in 2018 and Best Photographer of The Year 2019 by Sony World Photography Awards.
						</Text>
					</StackItem>
				</Stack>
			</Section>
		</Section>
	</Theme>;
});