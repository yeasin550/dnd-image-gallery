import { IImageGallery } from "../../types/global.types";
import CheckboxIcon from "../Icons/CheckboxIcon";
import EmptyCheckboxIcon from "../Icons/EmptyCheckboxIcon";

interface IHeaderProps {
  onDelete: () => void;
  galleryData: IImageGallery[];
}

const HeaderBlock = ({ onDelete, galleryData }: IHeaderProps) => {
  const selectedItems = galleryData.filter((item) => item.isSelected);

  return (
    <div className="flex items-center justify-between gap-4 p-5">
      {selectedItems.length > 0 ? (
        <>
          <h2 className="text-2xl font-semibold text-gray-800 flex items-center gap-2">
            {selectedItems.length > 0 ? (
              <CheckboxIcon />
            ) : (
              <EmptyCheckboxIcon />
            )}
            <span>{selectedItems.length} File Selected</span>
          </h2>
          <button
            className="font-semibold text-red-500 text-lg"
            onClick={onDelete}
          >
            Delete File
          </button>
        </>
      ) : (
        <p className="text-2xl font-semibold text-gray-800">Gallery</p>
      )}
    </div>
  );
};

export default HeaderBlock;
