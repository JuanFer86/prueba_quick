import React, { Fragment } from 'react'
import { Col } from 'react-bootstrap'
import arrow from '../../icons/arrow_right.svg'

export const Evolution = ({ evolutions }) => {
    return (
        <>
        {
            evolutions.length !== 0 ? evolutions.map( ( {id, name}, i ) => (
                <Fragment key={ `evol-${id}` }>
                    <Col  xs={12} sm={12} md={2} >
                        <img alt="evolucion 1" src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${id}.png`} style={{ width: '100%' }} />
                        <p className="text-center">{ name }</p>
                    </Col>
                    {
                        i !== evolutions.length - 1 &&
                        <Col className="d-flex align-center justify-content-center" xs={12} sm={12} md={2} >
                            <img alt="arrow-right" src={arrow} />
                        </Col>                    
                    }
                </Fragment>
            ) ): <p>El pokemon no tiene evolución</p>
        }
            
        </>
    )
}
