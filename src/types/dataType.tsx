export type DataType = {
  components: {
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
    input: {
      email: {
        label: string;
        error: {
          empty: string;
          invalid: string;
        };
      };
      password: {
        label: string;
        error: {
          empty: string;
          invalid: string;
        };
      };
    };
    registrationForm: {
      login: string;
      signup: string;
    };
  };
  pages: {
    titles: {
      signup: string;
      login: string;
      browse: string;
      yourAccount: string;
      pageNotFound: string;
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
        questions: {
          id: number;
          title: string;
          answer: string[];
        }[];
      };
    };
    notFound: {
      title: string;
      subtitle: string;
      button: string;
      codeError: string;
    };
    signup: {
      title: string;
      subtitle: string;
      alreadyHaveAcc: string;
      login: string;
    };
    login: {
      title: string;
      noAcc: string;
      signUp: string;
    };
    yourAccount: {
      title: string;
      accountAge: string;
      months: string[];
      info: {
        title: string;
        password: string;
        deleteAccount: string;
        updateAccount: string;
      };
      deleteAccount: {
        title: string;
        subtitle: string;
        deleteButton: string;
        cancelButton: string;
      };
      updateAccount: {
        title: string;
        subtitle: string;
        updateButton: string;
        cancelButton: string;
      };
    };
  };
  authErrors: {
    invalidEmail: string;
    emailAlreadyInUse: string;
    userNotFound: string;
    wrongPassword: string;
    emptyFields: string;
    tooManyRequests: string;
    requiresRecentLogin: string;
  };
};
