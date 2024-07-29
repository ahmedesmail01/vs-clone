import { ReactNode } from "react";
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";

interface IProps {
  leftPanel: ReactNode;
  rightPanel: ReactNode;
  defaultLayout?: number[] | undefined;
}

const ResizablePanel = ({
  leftPanel,
  rightPanel,
  defaultLayout = [20, 80],
}: IProps) => {
  const onLayout = (sizes: number[]) => {
    document.cookie = `react-resizable-panels:layout=${JSON.stringify(sizes)}`;
  };
  return (
    <>
      <PanelGroup
        direction="horizontal"
        onLayout={onLayout}
        autoSaveId="codition"
      >
        <Panel defaultSize={defaultLayout[0]} collapsible>
          {leftPanel}
        </Panel>
        <PanelResizeHandle className="bg-gray-600 w-1" />
        <Panel defaultSize={defaultLayout[1]}>{rightPanel}</Panel>
      </PanelGroup>
    </>
  );
};

export default ResizablePanel;
