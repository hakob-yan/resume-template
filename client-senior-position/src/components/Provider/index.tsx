function Provider({ children }: { children: React.ReactNode }) {
  return (
    <div
      id="resume-wrapper"
      className="max-w-300 print:max-w-full h-424.5 print:h-auto mx-auto w-full mt-36 print:mt-0  bg-white shadow-[-10px_20px_60px_5px_rgba(0,0,0,0.25)]  print:shadow-none rounded-xs print:rounded-none  overflow-hidden"
    >
      {children}
    </div>
  );
}

export default Provider;
