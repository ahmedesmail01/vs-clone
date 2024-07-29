import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IFile } from "../../interfaces";

interface IClickedFile {
  fileName: string;
  activeTabId: string | null;
  fileContent: string | undefined;
}

interface IInitialState {
  openedFiles: IFile[];
  clickedFile: IClickedFile;
}

const initialState: IInitialState = {
  openedFiles: [],
  clickedFile: {
    activeTabId: null,
    fileName: "",
    fileContent: "",
  },
};

const resetState = (state: IInitialState) => {
  state.openedFiles = [];
  state.clickedFile = {
    activeTabId: null,
    fileContent: "",
    fileName: "",
  };
};

const fileTreeSlice = createSlice({
  name: "fileTree",
  initialState,
  reducers: {
    setOpenedFiles: (state, action: PayloadAction<IFile[]>) => {
      state.openedFiles = action.payload;
    },
    setRemoveFromOpenedFiles: (state, action: PayloadAction<string>) => {
      const filtered = state.openedFiles.filter(
        (file) => file.id !== action.payload
      );
      if (filtered.length === 0) {
        resetState(state);
      } else {
        const lastTab = filtered[filtered.length - 1];
        state.openedFiles = filtered;
        state.clickedFile = {
          activeTabId: lastTab.id,
          fileContent: lastTab.content,
          fileName: lastTab.name,
        };
      }
    },
    setClickedFile: (state, action: PayloadAction<IClickedFile>) => {
      state.clickedFile = action.payload;
    },
  },
});

export const { setOpenedFiles, setRemoveFromOpenedFiles, setClickedFile } =
  fileTreeSlice.actions;

export default fileTreeSlice.reducer;
