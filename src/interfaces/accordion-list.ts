interface IAccordionItem {
  title: string;
  information?: string;
  img?: {
    src: string;
    alt: string;
  };
}

interface IAccordionList {
  accordionList: IAccordionItem[];
}

export default IAccordionList;
