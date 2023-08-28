
import * as s from './styled'

function ScreenRegisterAddress(props){
    const {mudarTela} = props

// Á página vai precisar ter:
// Um input para endereço
// Um input para número da residência
// um input para telefone
// um input para complemento
// um botão para ser usado para passar a próxima página

    return (
        <s.FormContainer>
            <h1>Complete seu Cadastro </h1>
            <s.Form>
                <s.Label>
                    Endereço:
                    <s.Input type="text"  />
                </s.Label>
                <s.Label>
                    Número:
                    <s.Input type="text"  />
                </s.Label>
                <s.Label>
                    Telefone:
                    <s.Input type="tel"  />
                </s.Label>
                <s.Label>
                    Complemento:
                    <s.Input type="text"  />
                </s.Label>
                <s.SendButton onClick={() => mudarTela(4)}>Cadastrar</s.SendButton>
                <s.BackButton onClick={() => mudarTela(2)}>voltar</s.BackButton>
            
            </s.Form>
            
        </s.FormContainer>
    )
}

export default ScreenRegisterAddress;