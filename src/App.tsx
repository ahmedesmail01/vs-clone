import RecursiveComponent from "./components/RecursiveComponent";
import { fileTree } from "./data/FileTree";
import OpenedFilesBar from "./components/OpenedFilesBar";
import ResizablePanel from "./components/ResizablePanel";

export default function App() {
  return (
    <div className="my-1 ">
      <div className="flex h-screen">
        <ResizablePanel
          leftPanel={
            <>
              <RecursiveComponent fileTree={fileTree} />
            </>
          }
          rightPanel={
            <>
              <OpenedFilesBar />
            </>
          }
        />
      </div>
    </div>
  );
}
