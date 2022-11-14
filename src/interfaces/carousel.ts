interface ICarouselItemProps {
  title: string;
  img: string;
  img_secondary?: string;
}

interface ICarouselListProps {
  list: ICarouselItemProps[];
}

export { type ICarouselItemProps, type ICarouselListProps };
