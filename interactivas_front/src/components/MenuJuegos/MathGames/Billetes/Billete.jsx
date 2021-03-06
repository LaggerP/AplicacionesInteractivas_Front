import React from "react";
import styled from "@emotion/styled";
import { Draggable } from "react-beautiful-dnd";

const Container = styled("div")`
  margin-bottom: 5px;
  border-radius: 5px;
  padding: 4px;
  color: white;
  width: 160px
`;

const Img = styled("img")`
    width: 160px;
    height: 60px;
`;


const Billete = ({ billete, index }) => {
    return (
        <Draggable draggableId={billete.id} index={index} type="billete">
            {(provided, snapshot) => (
                <Container
                    ref={provided.innerRef}
                    {...provided.dragHandleProps}
                    {...provided.draggableProps}
                    isDragging={snapshot.isDragging}
                >
                    <Img src={billete.img} alt="" />
                </Container>
            )}
        </Draggable>
    );
};

export default Billete;
