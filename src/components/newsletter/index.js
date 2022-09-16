import { Form, InputNewsContainer, Submit } from "./style";

export default function Newsletter() {
  return (
    <Form>
      <InputNewsContainer>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" />
      </InputNewsContainer>

      <InputNewsContainer>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" />
      </InputNewsContainer>

      <Submit>Enviar</Submit>
    </Form>
  );
}
