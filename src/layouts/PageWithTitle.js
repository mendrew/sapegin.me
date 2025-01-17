import React from 'react';
import Helmet from 'react-helmet';
import { Page, Box, Heading } from 'tamia';
import { Link } from 'tamia-gatsby-link';
import Footer from '../components/Footer';
import Base from './Base';

const PageWithTitle = ({ children, title }) => (
	<Base>
		<Helmet title={`Artem Sapegin${title}`} />
		<main>
			<Heading level={1} mb="l">
				<Link href="/">Artem Sapegin</Link>
				{title}
			</Heading>
			<Box mb="l">{children}</Box>
		</main>
		<Page.Footer as="div">
			<Footer />
		</Page.Footer>
	</Base>
);

export default PageWithTitle;
