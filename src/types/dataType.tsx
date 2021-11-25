export type DataType = {
  component: {
    formEmail: {
      title: string;
      button: string;
    };
    selectInput: string;
    footer: {
      title: string;
      navList: string[];
      copyright: string;
    };
    button: string;
  };
  landing: {
    hero: {
      title: string;
      subtitle: string;
      bgImgAlt: string;
    };
    sections: {
      id: number;
      title: string;
      subtitle: string;
      imgAlt: string;
    }[];
    faq: {
      title: string;
      questions: (
        | {
            id: number;
            title: string;
            answer: string[];
          }
        | {
            id: number;
            title: string;
            answer: string;
          }
      )[];
    };
  };
};
