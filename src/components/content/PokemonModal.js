import React from "react";
import { Col, Modal, Row } from "react-bootstrap";
import { TableInfo } from "../ui/TableInfo";
import { Tags } from "../ui/Tags";
import { Evolution } from "../ui/Evolution";

export const PokemonModal = ({
  state: { modal, name, idPok, table, tags, evolutions=[] },
  onHide,
}) => {
  return (
    <Modal
      show={modal}
      onHide={onHide}
      aria-labelledby="contained-modal-title-vcenter"
      size="xl"
      centered
    >
      <Modal.Body>
        <Row style={{ margin: "1rem" }}>
          <Col md={6} className="align-self-center">
            <img
              alt="imagen de pokemon"
              src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${idPok}.png`}
              style={{ width: "100%" }}
            />
          </Col>
          <Col md={6}>
            <h4>{`${name} ${idPok} `}</h4>

            <p>descripttion</p>

            <TableInfo cells={table} />

            <h5>Tipos</h5>
            <Tags tags={tags} />
          </Col>
        </Row>
        <Row style={{ borderTop: "2px solid gray", margin: "2rem" }}>
            <div className="w-100">  
                <h5>Evolución</h5>
                {
                  evolutions.length !== 1  ? <div className="d-flex justify-content-center">
                    <Evolution evolutions={evolutions} />
                  </div>:
                  <p>No tiene evolución</p>
                }
                
            </div>
        </Row>
      </Modal.Body>
    </Modal>
  );
};
