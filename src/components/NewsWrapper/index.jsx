import { Component, CardWrapper } from "./style";

import { Highlight } from "./Highlight";
import { Card } from "./Card";
import { Button } from "../Button";

export function NewsWrapper() {
  return (
    <Component>
      <Highlight />
      <CardWrapper>
        <Card />
        <Card />
      </CardWrapper>

      <Button>
        <a href="#">ver mais</a>
      </Button>
      
    </Component>
  );
}
