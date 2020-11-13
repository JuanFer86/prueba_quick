import React from "react";
import { Badge } from "react-bootstrap";

export const Tags = ({ tags }) => {
  return (
    <>
      {tags.map(( { type:{name} } ) => (
        <Badge key={`tag-${name}`} pill variant="info" className="mr-2">
          {name}
        </Badge>        
      ))}
    </>
  );
};
