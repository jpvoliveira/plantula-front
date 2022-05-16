import styled from "styled-components";
import { useNavigate } from "react-router-dom";
export default function Product({data}){
  console.log(data)

  const navigate = useNavigate()

  return(
    <Box onClick={()=>navigate(`/products/${data.id}`)}>
      <Image url={data.image}/>
      <div className="infos">
        <p>{data.name}</p>
        <p>{data.description}</p>
        <p>R$ {data.price/100} und</p>
      </div>
    </Box>
  )
}

const Box = styled.div`
  width: 85%;
  height: 100px;
  background-color: #C4C4C4;

  display: flex;
  align-items: center;
  gap: 20px;
  
  .infos{
    height: 65px;
    gap: 8px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
`

const Image = styled.div`
  width: 100px;
  height: 85px;
  background-image: url(${(props) => props.url});
  background-position: center;
	background-size: cover;
  
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`