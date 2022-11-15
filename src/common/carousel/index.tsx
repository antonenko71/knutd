// library
import Carousel from 'react-material-ui-carousel';

// component
import { Paper, Typography } from '@mui/material';

// styles
import * as S from './styles';

// interface
import { ICarouselItemProps, ICarouselListProps } from '@interfaces';

const MyCarousel = (props: ICarouselListProps) => {
  const { list } = props;

  return (
    <Carousel
      indicators={true}
      navButtonsAlwaysVisible={true}
      animation="slide"
      duration={1200}
      indicatorIconButtonProps={{
        style: {
          color: '#c473ea'
        }
      }}
      activeIndicatorIconButtonProps={{
        style: {
          color: '#feaab6'
        }
      }}
    >
      {list?.map((item) => (
        <Item
          key={item.title}
          title={item.title}
          img={item.img}
          img_secondary={item.img_secondary}
        />
      ))}
    </Carousel>
  );
};

const Item = (props: ICarouselItemProps) => {
  const { title, img, img_secondary } = props;

  return (
    <Paper
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'column',
        height: '400px',
        color: '#c473ea',
        backgroundColor: '#000'
      }}
    >
      {img && !img_secondary && (
        <S.ImgContainer>
          <img src={img} alt={title} width="100%" height="100%" />
        </S.ImgContainer>
      )}
      {img && img_secondary && (
        <S.TwoImgContainer>
          <img src={img} alt={title} width="100%" height="100%" />
          <img src={img_secondary} alt={title} width="100%" height="100%" />
        </S.TwoImgContainer>
      )}
      <Typography variant="subtitle1" gutterBottom component="div">
        {title}
      </Typography>
    </Paper>
  );
};

export default MyCarousel;
