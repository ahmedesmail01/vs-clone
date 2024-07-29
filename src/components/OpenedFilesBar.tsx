import { useSelector } from "react-redux";
import { RootState } from "../app/store";
import OpenedFilesBarTab from "./OpenedFilesBarTab";
import FileSyntaxHighlighter from "./FileSyntaxHighlighter";

const OpenedFilesBar = () => {
  const { openedFiles, clickedFile } = useSelector(
    (state: RootState) => state.tree
  );
  return (
    <div>
      <ul className="flex items-center gap-3">
        {openedFiles.map((file) => {
          return (
            <div key={file.id}>
              <OpenedFilesBarTab file={file} />
            </div>
          );
        })}
      </ul>
      {openedFiles.length > 0 && (
        <FileSyntaxHighlighter content={String(clickedFile.fileContent)} />
      )}
    </div>
  );
};

export default OpenedFilesBar;
