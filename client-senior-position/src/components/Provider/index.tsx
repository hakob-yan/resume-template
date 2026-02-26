function Provider({ children }: { children: React.ReactNode }) {
  return (
    <div
      id="resume-wrapper"
      className="
      
        max-w-[210mm]
        max-h-[297mm]
        min-h-[296mm]

      mx-auto w-full my-36 print:m-0 print:p-0  bg-white shadow-[-10px_20px_60px_5px_rgba(0,0,0,0.25)]  print:shadow-none rounded-xs print:rounded-none  overflow-hidden"
    >
      {children}
    </div>
  );
}

export default Provider;
