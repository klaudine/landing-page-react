import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function CardComponent () {
    return (
        <div className='row mt-4'>
            <Card className="mx-2 mb-3 p-0" style={{ width: '16rem', height: '400px'}}>
                <Card.Img variant="top" src="http://via.placeholder.com/640x360"/>
                    <Card.Body className='p-3'>
                        <Card.Title className='p-1'>Card Title</Card.Title>
                        <Card.Text>
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        </Card.Text>
                        <div className='pt-1'>
                            <hr />
                        <Button variant="primary">Find out more</Button>
                        </div>
                    </Card.Body>
            </Card>
            <Card className="mx-2 mb-3 p-0" style={{ width: '16rem', height: '400px'}}>
                <Card.Img variant="top" src="http://via.placeholder.com/640x360"/>
                    <Card.Body className='p-3'>
                        <Card.Title className='p-1'>Card Title</Card.Title>
                        <Card.Text>
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        </Card.Text>
                        <div className='pt-1'>
                            <hr />
                        <Button variant="primary">Find out more</Button>
                        </div>
                    </Card.Body>
            </Card>
            <Card className="mx-2 mb-3 p-0" style={{ width: '16rem', height: '400px'}}>
                <Card.Img variant="top" src="http://via.placeholder.com/640x360"/>
                    <Card.Body className='p-3'>
                        <Card.Title className='p-1'>Card Title</Card.Title>
                        <Card.Text>
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        </Card.Text>
                        <div className='pt-1'>
                            <hr />
                        <Button variant="primary">Find out more</Button>
                        </div>
                    </Card.Body>
            </Card>
            <Card className="mx-2 mb-3 p-0" style={{ width: '16rem', height: '400px'}}>
                <Card.Img variant="top" src="http://via.placeholder.com/640x360"/>
                    <Card.Body className='p-3'>
                        <Card.Title className='p-1'>Card Title</Card.Title>
                        <Card.Text>
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        </Card.Text>
                        <div className='pt-1'>
                            <hr />
                        <Button variant="primary">Find out more</Button>
                        </div>
                    </Card.Body>
            </Card>
        </div>
    )
}

export default CardComponent;