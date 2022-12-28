import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, FormContainer, Input } from "./styles";

export function Form() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    function handleUsername(event: React.ChangeEvent<HTMLInputElement>) {
        setUsername(event.target.value);
    }

    function handlePassword(event: React.ChangeEvent<HTMLInputElement>) {
        setPassword(event.target.value);
    }

    function handleLogin(event: React.MouseEvent<HTMLButtonElement>) {
        event.preventDefault()
        axios.post("http://localhost:3000/deliveryman/authenticate", {
            username: username,
            password: password,
        }).then((response) => {
            const tokenDeliveryman = response.data;
            localStorage.setItem('@tokenDeliveryman', tokenDeliveryman);
            navigate("/homedeliveryman"); //navigate("/ProtecdRoute");
        }).catch((error) => {
            console.log(error);
        })
    }
    
    return (
        <FormContainer>
            <Input type="text" placeholder="Usuário" value={username} onChange={handleUsername} />
            <Input type="password" placeholder="Senha" value={password} onChange={handlePassword} />
            <Button onClick={handleLogin}>Entrar</Button>
        </FormContainer>
    )
}