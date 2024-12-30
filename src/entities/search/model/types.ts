
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export interface HighlightProps {
  text: string;
  query: string;
}


export interface SearchResult {
    value: string;
    label: string;
  }
  