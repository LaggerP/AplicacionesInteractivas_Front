import React from "react";
import styled from "@emotion/styled";
import { Draggable } from "react-beautiful-dnd";

const Container = styled("div")`
  border: 1px solid lightgrey;
  margin-bottom: 8px;
  border-radius: 5px;
  padding: 8px;
  color: white;
  background: ${props => (props.isDragging ? "rgba(39,130,15,0.76)" : "#27820f")};
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
                    {billete.content}
                </Container>
            )}
        </Draggable>
    );
};

export default Billete;
