import Folder from "./SVG/Folder";

interface IProps {
  folderName: string;
}

const FolderComponent = ({ folderName }: IProps) => {
  return (
    <div className="my-2 flex items-center ">
      <span className="mx-2">
        <Folder />
      </span>
      <p>{folderName}</p>
    </div>
  );
};

export default FolderComponent;
