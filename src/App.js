import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'reactstrap';
import Menu from './components/Menu';
import Home from './pages/Home';
import FooterS from './components/FooterS';
import Contato from './pages/Contato';
import MoniqueAndrade from './pages/MoniqueAndrade';
import Ceramica from './pages/Ceramica';
import Evento from './pages/Evento';
import Loja from './pages/Loja';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <Container fluid>
      <BrowserRouter>
        <Row>
          <Col xs='2'>
            {/* Nav */}
            <Menu />
          </Col>
          <Col>
            <Row>
              {/* Conteúdo */}
              <Col>
                {/* Rotas do site */}
                <Routes>
                  <Route exact path="/" element={<Home />} />
                  <Route path="/MoniqueAndrade" element={<MoniqueAndrade />} />
                  <Route path="/Ceramica" element={<Ceramica />} />
                  <Route path="/Evento" element={<Evento />} />
                  <Route path="/Contato" element={<Contato />} />
                  <Route path="/Loja" element={<Loja />} />
                </Routes>
              </Col>
            </Row>

          </Col>
        </Row>
      </BrowserRouter>
      <Row>
        {/* Rodapé */}
        <FooterS />
      </Row>
    </Container >
  );
}

export default App;

