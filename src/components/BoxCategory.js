import styled from "styled-components"

export default function BoxCategory({ category, setCategory }) {
  return (
    <Box type={category}>
      <h1>Categorias:</h1>
      <Category className="mudas" onClick={() => setCategory('mudas')} >
        <img src="https://cdn-icons-png.flaticon.com/512/497/497393.png" alt="" />
        <p>Mudas</p>
      </Category>
      <Category className="adubo" onClick={() => setCategory('adubo')}>
        <img src="https://cdn-icons-png.flaticon.com/512/423/423956.png" alt="" />
        <p>Adubo</p>
      </Category>
      <Category className="serviços" onClick={() => setCategory('serviços')}>
        <img src="https://cdn-icons-png.flaticon.com/512/1760/1760560.png" alt="" />
        <p>Serviços</p>
      </Category>
      <Category className="mapas" onClick={() => setCategory('mapas')}>
        <img src="https://cdn-icons-png.flaticon.com/512/149/149442.png" alt="" />
        <p>Mapas</p>
      </Category>
    </Box>
  )
}

const Box = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  width: 100%;
  max-width: 400px;
  min-width: 340px;
  height: 110px; 
  margin-top: 20px;
  position: relative;
  font-family: 'Montserrat';
  h1{
    position: absolute;
    top: 0px;
    left: 0px;
    font-weight: 500;
  }
  .mudas{
    background-color: ${(props) => props.type === 'mudas' ? '#528654' : '#ffffff'}
  }
  .adubo{
    background-color: ${(props) => props.type === 'adubo' ? '#528654' : '#ffffff'}
  }
  .serviços{
    background-color: ${(props) => props.type === 'serviços' ? '#528654' : '#ffffff'}
  }
  .mapas{
    background-color: ${(props) => props.type === 'mapas' ? '#528654' : '#ffffff'}
  }
`

const Category = styled.div`
  display: flex;
  flex-direction: column;
  width: 80px;
  height: 80px; 
  background-color: white;
  border-radius: 5px;
  filter: drop-shadow(2px 4px 8px #b3b3b3);
  margin-top: 20px;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 2px;
  img{
    width: 40px;
    height: 40px;
    padding-left: 3px;
  }
  p{
    font-size: 12px;
  }
`