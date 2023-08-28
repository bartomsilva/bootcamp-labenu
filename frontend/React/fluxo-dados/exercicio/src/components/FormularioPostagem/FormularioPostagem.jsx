import { FormContainer, Form, Input, StyledLabel, SendButton } from "./styled";

export const FormularioCadastro = (props) => {
  const {formPost, handleOnChange, setFormPost, setPost}= props
  const savePost=()=>{
    if(formPost.title.length && formPost.image.length && formPost.description.length){
      setPost(formPost)
    } else {
      alert("Complete seu post!")
    }
  }

  return (
    <FormContainer>
      <h2>Insira sua postagem abaixo: </h2>
      <Form>
        <StyledLabel htmlFor="titulo">
          Titulo:
          <Input id="titulo" 
          name='title' 
          value={formPost.title} 
          onChange={(e)=>handleOnChange(e,formPost,setFormPost)}
           />
        </StyledLabel>
        <StyledLabel htmlFor="foto">
          Imagem:
          <Input id="foto" 
          name='image'
          value={formPost.image}
          onChange={(e)=>handleOnChange(e,formPost,setFormPost)}          
          />
        </StyledLabel>
        <StyledLabel htmlFor="descricao">
          Descrição:
          <Input id="descricao"
          name='description'
          value={formPost.description}
          onChange={(e)=>handleOnChange(e,formPost,setFormPost)}          
           />
        </StyledLabel>
        <SendButton onClick={savePost}>Postar   
        </SendButton>
      </Form>
    </FormContainer>
  );
};

export default FormularioCadastro;
