import React from "react";
import { Html } from "@react-email/html";
import { Body } from "@react-email/body";
import { Container } from "@react-email/container";
import { Text } from "@react-email/text";
import { Link } from "@react-email/link";
import { Preview } from "@react-email/preview";
import { Tailwind } from "@react-email/tailwind";

const WelcomeTemplate = ({ name }: { name: string }) => {
  return (
    <Html>
      <Preview>Welcome aboard!</Preview>
      <Tailwind>
        <Body className="bg-slate-300">
          <Container>
            <Text>Hello {name}</Text>
            <Link href="https://codewithmosh.com">Code with mosh</Link>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default WelcomeTemplate;
