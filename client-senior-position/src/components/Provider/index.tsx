function Provider({ children }: { children: React.ReactNode }) {
  return (
    <div
      id="resume-wrapper"
      className="max-w-300 h-424.5 mx-auto w-full mt-36 bg-white shadow-[-10px_20px_60px_5px_rgba(0,0,0,0.25)]   rounded-xs   overflow-hidden"
    >
      {children}
    </div>
  );
}

export default Provider;
