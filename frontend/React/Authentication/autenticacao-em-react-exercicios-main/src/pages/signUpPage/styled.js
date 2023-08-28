import styled from "styled-components";

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 90vw;
  gap: 1rem;
  justify-content: center;
  button {
    width: 120px;
    align-self: center;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  height: 1.2rem;
  justify-content: center;
  gap: 5px;
`;

export const Recipe = styled.div`
  width: 300px;
  height: 300px;
  border: 2px dotted rgba(0,0,0,.8);
  border-radius: 12px;
  background-color: #efefef;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  overflow-y: auto;
  img{
    width: 150px;
  }
  p{
    font-size: 14px;
    padding: 0;
    margin: 5px;
  }
`
export const Title = styled.h4`
  font-size: 16px;
  text-align: center;
`
export const CotainerRecipes= styled.main`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  justify-content: center;
  align-items: flex-start;
  background-color: beige;
`

export const DetailsRecipe = styled.p`
  font-size: 14px;
  text-align: center;
  font-style: italic;
`

