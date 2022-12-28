import { Form } from "./components/Form";
import { Container, Content, Title } from "./styles";

export function LoginClient(){
    return (
        <Container>
            <Content>
                <Title>
                    Faça seu login
                </Title>
                <Form />
            </Content>
        </Container>
    )
}