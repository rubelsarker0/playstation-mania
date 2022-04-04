import React from 'react';
import { Card, Col, Container, ListGroup, Row } from 'react-bootstrap';

const Blogs = () => {
	return (
		<Container className="mb-5">
			<Row xs={1} md={2} lg={2} className="g-5">
				<Col>
					<Card className="border-0 shadow-sm">
						<Card.Body>
							<Card.Title className="generic-text-color">
								What is Context API
							</Card.Title>
							<Card.Text>
								<ListGroup variant="flush">
									<ListGroup.Item></ListGroup.Item>
									<ListGroup.Item className="text-align-justify">
										React introduces state Management Solutions Context API.
										Context API is a way for a React app to produce global
										variables that can be passed around effectively. The
										simplest way to pass data from a parent to a child in a
										React Application is by passing it on to the child's props
										to solve the prop drilling issue. React introduces state
										Management Solutions Context API. Context API is a way for a
										React app to produce global variables that can be passed
										around effectively.
									</ListGroup.Item>
									<h5 className="generic-text-color pt-3">How does it work?</h5>
									<ListGroup.Item className="text-align-justify">
										React.createContext() is all you need. It returns a consumer
										and a provider. The provider is a component that provides
										the state to its children, as its name suggests. It will
										hold the "store" and be the parent of all the components
										that might need that store. As it so happens, the consumer
										is a component that consumes and uses the state.
									</ListGroup.Item>
									<ListGroup.Item></ListGroup.Item>
								</ListGroup>
							</Card.Text>
						</Card.Body>
					</Card>
				</Col>
				<Col>
					<Card className="border-0 shadow-sm">
						<Card.Body>
							<Card.Title className="generic-text-color">
								What is inline, block and inline-block?
							</Card.Title>
							<Card.Text>
								<ListGroup variant="flush">
									<ListGroup.Item></ListGroup.Item>
									<ListGroup.Item className="text-align-justify">
										<span className="generic-text-color fs-5">Inline: </span>
										Inline elements don’t start on a new line, they appear on
										the same line as the content and tags beside them. Some
										examples of inline elements are{' '}
										<span className="fs-5">span</span>,
										<span className="fs-5"> strong</span>, and
										<span className="fs-5"> img </span>tags. When it comes to
										margins and padding, browsers treat inline elements
										differently. You can add space to the left and right on an
										inline element, but you cannot add height to the top or
										bottom padding or margin of an inline element.
									</ListGroup.Item>
									<ListGroup.Item className="text-align-justify">
										<span className="generic-text-color fs-5">Block:</span> A
										block element always starts on a new line, and fills up the
										horizontal space left and right on the web page. You can add
										margins and padding on all four sides of any block element —
										top, right, left, and bottom. Some examples of block
										elements are
										<span className="fs-5 ps-2">div</span> and
										<span className="fs-5 ps-2">p </span>
										tags
									</ListGroup.Item>
									<ListGroup.Item className="text-align-justify">
										<span className="generic-text-color fs-5">
											Inline-Block:
										</span>{' '}
										Inline-block elements are similar to inline elements, except
										they can have padding and margins added on all four sides.
										You’ll have to declare display: inline-block in your CSS
										code. One common use for using inline-block is for creating
										navigation links.
									</ListGroup.Item>
									<ListGroup.Item></ListGroup.Item>
								</ListGroup>
							</Card.Text>
						</Card.Body>
					</Card>
				</Col>
				<Col>
					<Card className="border-0 shadow-sm">
						<Card.Body>
							<Card.Title className="generic-text-color">
								What Is Semantic Tag
							</Card.Title>
							<Card.Text>
								<ListGroup variant="flush">
									<ListGroup.Item></ListGroup.Item>
									<ListGroup.Item className="text-align-justify">
										Semantic HTML elements are those that clearly describe their
										meaning in a human- and machine-readable way. Elements such
										as header, footer, and article are all considered semantic
										because they accurately describe the purpose of the element
										and the type of content that is inside them.
									</ListGroup.Item>
									<h5 className="generic-text-color pt-3">
										Why use semantic elements?
									</h5>
									<ListGroup.Item></ListGroup.Item>
									<ListGroup.Item>
										<li>First, it is much easier to read. </li>
									</ListGroup.Item>
									<ListGroup.Item>
										<li>It has greater accessibility</li>
									</ListGroup.Item>
									<ListGroup.Item>
										<li>
											Semantic elements also lead to more consistent code.
										</li>
									</ListGroup.Item>
									<ListGroup.Item></ListGroup.Item>
								</ListGroup>
							</Card.Text>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</Container>
	);
};

export default Blogs;
