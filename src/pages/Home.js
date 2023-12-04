import { Row, Col } from 'reactstrap';
import CarouselHome from '../components/CarouselHome';

function Home() {
    return (
        <div>
            <Row>
                
                <Col>
                    {/* Carousel */}
                    <CarouselHome />
                </Col>
            </Row >

        </div >
    );
}
export default Home;