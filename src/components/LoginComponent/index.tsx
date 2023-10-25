import { LoginPage } from "./component";

export function LoginComponent(){

    return(
        <LoginPage.ContainerMain>
            <LoginPage.ContainerApresentacao/>
            <LoginPage.ContainerForm/>
        </LoginPage.ContainerMain>
    )
}