import { useState } from "react";

const ReportError = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [reportText, setReportText] = useState("");

  return (
    <div>
      <button
        onClick={() => setIsOpen(true)}
        className="w-[120px] h-[35px] flex-shrink-0 rounded-[10px] bg-[#FF5050] text-white text-sm font-bold shadow hover:bg-red-600 flex items-center justify-center"
      >
        <span className="mr-2 text-white font-nunito text-[13px] font-bold">Report Error</span>
        <img src="/icons/report_error_arrow.svg" alt="report error arrow" className="w-4 h-4" />
      </button>
    </div>
  );
};

export default ReportError;