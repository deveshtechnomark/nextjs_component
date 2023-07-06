import React, { useState, useRef } from "react";
// ProgressBar Library
import { ProgressBar } from "progressbar";
import "progressbar/dist/index.css";
// Icon Components
import UploadIcon from "./icons/UploadIcon";
import FileIcon from "./icons/FileIcon";
import PdfIcon from "./icons/PdfIcon";
import WordIcon from "./icons/WordIcon";
import ExcelIcon from "./icons/ExcelIcon";
import ClearIcon from "./icons/ClearIcon.js";
import ImageIcon from "./icons/ImageIcon.js";

const extensionToIconMap = {
  pdf: <PdfIcon />,
  doc: <WordIcon />,
  docx: <WordIcon />,
  xls: <ExcelIcon />,
  xlsx: <ExcelIcon />,
  jpg: <ImageIcon />,
  jpeg: <ImageIcon />,
  png: <ImageIcon />,
};

interface UploaderProps {
  multiSelect?: boolean;
  variant?: string;
}

function Uploader({ multiSelect, variant }: UploaderProps) {
  const [fileNames, setFileNames] = useState<string[]>([]);
  const [uploaded, setUploaded] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const files = e.dataTransfer.files;
    handleFileChange(files);
  };

  const handleFileChange = (files: FileList) => {
    const names = Array.from(files).map((file) => file.name);
    setFileNames(names);

    setTimeout(() => {
      setUploaded(true);
    }, 1500);
  };

  const handleBrowseClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      handleFileChange(files);
    }

    // Set the uploaded state to false when a new file is selected
    setUploaded(false);
  };

  const handleRemoveFile = (index: number) => {
    const updatedFileNames = [...fileNames];
    updatedFileNames.splice(index, 1);
    setFileNames(updatedFileNames);

    if (updatedFileNames.length === 0) {
      setUploaded(false);
    }
  };

  const getFileExtension = (fileName: string) => {
    const extension = fileName
      .slice(fileName.lastIndexOf(".") + 1)
      .toLowerCase();
    return extension;
  };

  const renderFileIcon = (fileName: string) => {
    const extension = getFileExtension(fileName);
    const icon = extensionToIconMap[extension];
    return icon || <FileIcon />;
  };

  return (
    <div>
      <div
        className={`upload-container w-full flex items-center justify-center ${
          variant === "small" ? "h-[36px]" : "flex-col h-[230px]"
        } justify-center items-centerborder transition-all duration-200 ease-in 
        border border-dashed border-lightSilver hover:border-primary hover:bg-[#EDFFFC] cursor-pointer rounded-[4px]`}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        onClick={handleBrowseClick}
      >
        <input
          type="file"
          multiple={multiSelect}
          ref={fileInputRef}
          className="input-field hidden"
          onChange={handleFileInputChange}
        />
        <div
          className={`text-[15px] text-slatyGrey ${
            variant === "small"
              ? ""
              : "border-2 border-lightSilver rounded-[4px] p-2"
          }`}
        >
          <UploadIcon />
        </div>

        <p
          className={`${
            variant === "small" ? "ml-[10px]" : "mt-4"
          } text-[14px] text-darkCharcoal font-proxima`}
        >
          Drag and Drop or <span className="text-teal-500">Browse</span> to
          Upload
        </p>
      </div>

      {multiSelect ? (
        <section className="mt-2 flex flex-col justify-between p-2 border border-lightSilver w-full h-[105px] rounded-[4px] overflow-y-auto">
          <div>
            <div className="flex flex-row ml-2 flex-wrap overflow-x-auto">
              {fileNames.length > 0 && uploaded
                ? fileNames.map((name, index) => (
                    <span
                      className="text-[14px] text-darkCharcoal font-proxima flex items-center gap-2 bg-whiteSmoke px-[2px] py-[2.5px] rounded-[2px] mr-2 mb-2"
                      key={name}
                    >
                      <span className="text-[14px]">
                        {renderFileIcon(name)}
                      </span>
                      {name.length > 8 ? (
                        <>{name.slice(0, 8)}..</>
                      ) : (
                        <>{name}</>
                      )}
                      <span
                        onClick={() => handleRemoveFile(index)}
                        className="text-[14px] text-slatyGrey cursor-pointer"
                      >
                        <ClearIcon />
                      </span>
                    </span>
                  ))
                : !uploaded && (
                    <span className="flex flex-row items-center gap-2 text-[14px] text-darkCharcoal font-proxima">
                      {fileNames.length === 0 ? (
                        <>
                          <FileIcon /> No selected files
                        </>
                      ) : (
                        <>
                          {fileNames.length} file
                          {fileNames.length > 1 ? "s" : ""} selected
                        </>
                      )}
                    </span>
                  )}
            </div>
          </div>
          {fileNames.length > 0 && !uploaded && (
            <div className="flex items-center text-[12px] font-proxima italic text-slatyGrey flex-row">
              <span className="mr-[10px]">
                {uploaded ? "Uploaded" : "Uploading..."}
              </span>
              <ProgressBar variant="primary" progressDigit={false} label={""} />
            </div>
          )}
        </section>
      ) : (
        <section className="mt-2 flex justify-between items-center border border-lightSilver h-[36px] px-[20px] rounded-[4px]">
          {fileNames.length > 0 && !uploaded ? (
            <>
              <label className="text-[12px] italic mr-[10px] text-slatyGrey font-proxima">
                {!uploaded ? "Uploading..." : "Uploaded"}
              </label>
              <ProgressBar variant="primary" progressDigit={false} label={""} />
            </>
          ) : uploaded ? (
            <>
              <div className="flex flex-row items-center">
                {renderFileIcon(fileNames[0])}
                <span className="ml-2 text-[14px] text-darkCharcoal font-proxima">
                  {fileNames[0].length > 30 ? (
                    <>
                      {fileNames[0].slice(0, 26)}..
                      {fileNames[0].substring(fileNames[0].lastIndexOf("."))}
                    </>
                  ) : (
                    <>{fileNames[0]}</>
                  )}
                </span>
              </div>
              <span
                onClick={() => handleRemoveFile(0)}
                className="text-[18px] text-slatyGrey cursor-pointer"
              >
                <ClearIcon />
              </span>
            </>
          ) : (
            <div className="flex flex-row items-center">
              <FileIcon />
              <span className="ml-2 text-[14px] text-darkCharcoal font-proxima">
                No Files Selected
              </span>
            </div>
          )}
        </section>
      )}
    </div>
  );
}

export default Uploader;
