import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

//
interface IProps {
  content: string;
}

const FileSyntaxHighlighter = ({ content }: IProps) => {
  return (
    <SyntaxHighlighter
      styles={atomOneDark}
      customStyle={{
        background: "transparent",
        width: "100%",
        color: "white",
        maxHeight: "100vh",
        overflowX: "auto",
        fontSize: "1.5rem",
      }}
      showLineNumbers
      wrapLongLines
    >
      {content}
    </SyntaxHighlighter>
  );
};

export default FileSyntaxHighlighter;
