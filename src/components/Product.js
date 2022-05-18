import styled from "styled-components";
import { useNavigate } from "react-router-dom";
export default function Product({ data }) {
  const navigate = useNavigate()
  let price = data.price / 100

  return (
    <Box>
      <Image url={data.image} />
      <div className="infos">
        <p>{data.name}</p>
        <p>{data.description}</p>
        <p>R$ {price.toFixed(2)} und</p>
        <button onClick={() => navigate(`/products/${data.id}`)}>Comprar</button>
      </div>
    </Box>
  )
}

const Box = styled.div`
  width: 190px;
  height: 290px;
  background-color: #D7EDC3;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding-top: 15px;
  border-radius: 5px;

  .infos{
    height: 65px;
    gap: 5px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-around;
  }

  button{
    background-color: #528654;
    border: none;
    color: white;
    padding: 5px 10px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 15px;
    border-radius: 15px;
    cursor: pointer;
  }
`

const Image = styled.div`
  width: 160px;
  height: 160px;
  background-image: url(${(props) => props.url});
  background-position: center;
	background-size: cover;
  
  display: flex;
  flex-direction: column;
`

