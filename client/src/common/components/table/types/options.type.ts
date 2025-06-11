export type Options = {
  colors: {
    boolean: {
      true: string;
      false: string;
    };
    string?: {
      value: string;
      color: string;
    }[];
    number?: [
      {
        normal: string;
        less: {
          value: string;
          color: string;
        };
        more: {
          value: string;
          color: string;
        };
      },
    ];
  };
};
