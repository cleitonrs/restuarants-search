import React, { useState } from "react";
import logo from "../../assets/logo.svg"

import restaurante from "../../assets/restaurante-fake.png"
import { Card } from "../../components"
import { Wrapper, Container, Search, Logo, Map, Carousel, CarouselTitle } from "./styles";
import TextField, { Input } from '@material/react-text-field';
import MaterialIcon from '@material/react-material-icon';

const Home = () => {
  const [inputValue, setInputValue] = useState('')

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    adaptiveHeight: true,
  };

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
      </Container>
      <Map />
    </Wrapper>
  )
}

export default Home