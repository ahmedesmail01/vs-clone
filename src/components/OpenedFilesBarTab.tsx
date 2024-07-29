import { useDispatch, useSelector } from "react-redux";
import { IFile } from "../interfaces";
import FileIcon from "./SVG/FileIcon";
import {
  setClickedFile,
  setRemoveFromOpenedFiles,
} from "../app/features/fileTreeSlice";
import { RootState } from "../app/store";

interface IProps {
  file: IFile;
}

const OpenedFilesBarTab = ({ file }: IProps) => {
  const dispatch = useDispatch();
  const {
    clickedFile: { activeTabId },
  } = useSelector((state: RootState) => state.tree);

  // Handlers

  const onClick = () => {
    const { id, name, content } = file;
    dispatch(
      setClickedFile({ fileName: name, fileContent: content, activeTabId: id })
    );
  };

  return (
    <div
      className={`flex gap-2 cursor-pointer  px-6 py-2 ${
        activeTabId === file.id ? "border-t-2 border-blue-800" : ""
      }`}
    >
      <div className="flex gap-2 cursor-pointer  px-6 py-2" onClick={onClick}>
        <FileIcon />
        <li>{file.name}</li>
      </div>

      <span
        onClick={() => {
          dispatch(setRemoveFromOpenedFiles(file.id));
        }}
      >
        X
      </span>
    </div>
  );
};

export default OpenedFilesBarTab;
