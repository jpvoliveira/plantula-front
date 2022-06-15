import styled from "styled-components";
import { useNavigate } from "react-router-dom";
export default function Product({ data }) {
  const navigate = useNavigate()
  let price = data.price / 100

  return (
    <Box onClick={() => navigate(`/products/${data.id}`)}>
      <Image url={data.image} />
      <div className="infos">
        <div>
          <h1>{data.name}</h1>
          <p>{data.description}</p>
        </div>
        <h2>R$ {price.toFixed(2)}<span> und</span></h2>
      </div>
    </Box>
  )
}

const Box = styled.div`
  width: 380px;
  height: 150px;
  display: flex;

  align-items: center;
  gap: 20px;
  border-radius: 5px;

  .infos{
    height: 150px;
    width: 230px;
    display: flex;
    gap: 10px;
    flex-direction: column;
    padding-top: 10px;
    padding-bottom: 10px;
    word-wrap: break-word;
    font-family: 'Montserrat'; 
    justify-content: space-between;
    
    h1{
      font-weight: 600;
      font-size: 25px;
    }
    p{
      padding-top: 10px; 
      font-size: 15px;
    }
    h2{
      font-weight: 600;
      font-size: 20px;
      color: #528654;
      span{
        font-size: 15px;
      }
    }
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
  width: 150px;
  height: 150px;
  background-image: url(${(props) => props.url});
  background-position: center;
	background-size: cover;
  
  display: flex;
  flex-direction: column;
  border-radius: 15px;
`

