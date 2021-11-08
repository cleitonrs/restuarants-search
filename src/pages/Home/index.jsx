import React, { useState } from "react";
import logo from "../../assets/logo.svg"

import restaurante from "../../assets/restaurante-fake.png"
import { Card, RestaurantCard, Modal, Map } from "../../components"
import { Wrapper, Container, Search, Logo, Carousel, CarouselTitle } from "./styles";
import TextField, { Input } from '@material/react-text-field';
import MaterialIcon from '@material/react-material-icon';

const Home = () => {
  const [inputValue, setInputValue] = useState('')
  const [query, setQuery] = useState(null)
  const [modalOpened, setModalOpened] = useState(true)

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    adaptiveHeight: true,
  };

  function handleKeyPress(e) {
    if (e.key === 'Enter') {
      setQuery(inputValue)
    }
  }

  return (
    <Wrapper>
      <Container>
        <Search>
          <Logo src={logo} alt="Logo do restaurante" />
          <TextField
            label='Pesquisar Restaurantes'
            outlined
            trailingIcon={<MaterialIcon role="button" icon="search" />}
          ><Input
              value={inputValue}
              onKeyPress={handleKeyPress}
              onChange={(e) => setInputValue(e.target.value)} />
          </TextField>
          <CarouselTitle>
            Na sua Área
          </CarouselTitle>
          <Carousel {...settings}>
            <Card photo={restaurante} title="nome sei la" />
            <Card photo={restaurante} title="nome sei la" />
            <Card photo={restaurante} title="nome sei la" />
            <Card photo={restaurante} title="nome sei la" />
            <Card photo={restaurante} title="nome sei la" />
            <Card photo={restaurante} title="nome sei la" />
            <Card photo={restaurante} title="nome sei la" />
            <Card photo={restaurante} title="nome sei la" />
            <Card photo={restaurante} title="nome sei la" />
            <Card photo={restaurante} title="nome sei la" />
          </Carousel>
        </Search>
        <RestaurantCard />
      </Container>
      <Map query={query} />
      {/* <Modal open={modalOpened} onClose={() => setModalOpened(!modalOpened)} /> */}
    </Wrapper>
  )
}

export default Home