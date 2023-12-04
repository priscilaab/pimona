import MoniqueA from '../images/MoniqueA.png';
import { Row, Col } from 'reactstrap';
import '../css/MoniqueAndrade.css';
import React from 'react';
function MoniqueAndrade() {


    return (
        <div>
            <Row>
                <Col xs="7">
                    
                    <img src={MoniqueA} alt="Monique Andrade"
                        style={{ maxWidth: "30%", height: "auto", alignSelf: 'auto', marginTop:"50px" }} />
                </Col>
                <Col xs="5" className='texto'>

                    <p >Olá!
                        Eu sou Monique Andrade!

                        A começar por MONA, que vem da junção de

                        (MON)ique + (A)ndrade,

                        criada pra e-mail no ensino médio, virou meu apelido eleito pelos amigos e amo! desde então.

                        Numa pesquisa rápida: **"Mona significa 'pequena nobre'; 'aquela que tem propósitos', 'mulher de objetivos'".
                        Confesso que adorei o que encontrei, pois também compõe o que me faz estar aqui nessa conversa.

                        E falando em propósito, tenho encontrado o meu, dentre outras formas, através da cerâmica!

                        Sempre fui muito artista e empolgada com a vida. Na infância era filmada entrevistando e sendo entrevistada.

                        Frequentava teatro, ia loonge ouvindo música clássica!

                        Estimulada com atividades manuais, pintava, brincava de massinha, fazia colagens, costurava roupas pra boneca, sempre inventando!

                        E essa bagagem se apresenta agora como um estilo de vida, que vou compartilhando nos próximos posts!
                        tem menu de contexto</p>

                </Col>
            </Row>
            <div>

            </div>


        </div>
    );
}
export default MoniqueAndrade