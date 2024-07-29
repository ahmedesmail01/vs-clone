import { useState } from "react";
import { IFile } from "../interfaces";
import BottomArrow from "./SVG/BottomArrow";
import FileIcon from "./SVG/FileIcon";
import Folder from "./SVG/Folder";
import RightArrowIcon from "./SVG/RightArrowIcon";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../app/store";
import { setClickedFile, setOpenedFiles } from "../app/features/fileTreeSlice";
import { doesFileExist } from "../utils/functions";

interface IProps {
  fileTree: IFile;
}

const RecursiveComponent = ({ fileTree }: IProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const { openedFiles } = useSelector((state: RootState) => state.tree);

  // ** Handlers

  const onFileClicked = () => {
    const { id, name, content } = fileTree;
    const exists = doesFileExist(openedFiles, fileTree.id);
    dispatch(
      setClickedFile({ fileName: name, fileContent: content, activeTabId: id })
    );
    if (exists) return;
    if (fileTree.isFolder) return;
    dispatch(setOpenedFiles([...openedFiles, fileTree]));
  };

  const toggle = () => setIsOpen((prev) => !prev);

  const childrens = fileTree.children?.map((file, idx) => (
    <RecursiveComponent fileTree={file} key={idx} />
  ));

  return (
    <div className="m-4 cursor-pointer ">
      <div className="flex items-center mb-1">
        <div className="mr-2" onClick={toggle}>
          {fileTree.isFolder ? (
            <div className="flex items-center">
              {isOpen ? <BottomArrow /> : <RightArrowIcon />} <Folder />
            </div>
          ) : (
            <FileIcon />
          )}
        </div>
        <span onClick={onFileClicked}>{fileTree.name}</span>
      </div>

      {isOpen && fileTree.children ? childrens : null}

      {/* {fileTree.children &&
        fileTree.children.map((file, idx) => (
          <RecursiveComponent fileTree={file} key={idx} />
        ))} */}
    </div>
  );
};

export default RecursiveComponent;
