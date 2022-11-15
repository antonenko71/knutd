interface IToolProps {
  title: string;
  description: string;
}

interface IToolsProps {
  tools: IToolProps[];
}

export { type IToolProps, type IToolsProps };
