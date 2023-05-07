export type TResponseProps = {
  data: {
    id: string;
    credit: string;
    optional: boolean;
    question: string;
    type: 'short' | 'paragraph' | 'multichoice' | 'multiselect';
    answers?: Array<{ id: string; value: string }>;
    hasOther?: boolean;
  };
};
