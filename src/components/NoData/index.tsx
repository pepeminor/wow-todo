'use client';

import { memo } from 'react';
import { FaFile } from 'react-icons/fa';

const NoData = ({
  title = 'No Todo',
  buttonText = 'Create Todo Now',
  isShowButtonAction = true,
  onClick,
}: {
  title?: string;
  buttonText?: string;
  isShowButtonAction?: boolean;
  onClick?: () => void;
}) => {
  return (
    <div className="mx-auto font-mono">
      <p className="text-[64px] text-center justify-center flex mb-4">
        <FaFile />
      </p>
      <h3 className="text-center font-bold text-[20px] mb-4">{title}</h3>
      {isShowButtonAction && (
        <div className="flex justify-center">
          <button
            onClick={onClick}
            className="group flex items-center bg-main px-4 py-4 rounded-xl hover:bg-[#fff] hover:text-[#000] transition-all"
          >
            <span className="px-2">{buttonText}</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default memo(NoData);
