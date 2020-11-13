import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Content } from '../../components/content/Content'
import { Colors } from '../../components/filters/Colors'
import { Filters } from '../../components/filters/Filters'

import "./Principal.css"


export const Principal = () => {

    return (
        <Container>
            <Row>
                <Col md={3} className="mt-3">
                    <div className="card-filters">
                        <div className="m-2">
                            <h4>Filtros</h4>
                        </div>
                        <Filters typeForm="checkbox" url="type" title="Tipos" />                        
                        <Colors />
                        <Filters typeForm="radio" url="gender" title="Genero" />
                    </div>                    
                </Col>
                <Col md={9}>
                        <Content />
                </Col>
            </Row>
        </Container>                
    )
}
