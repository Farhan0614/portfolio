export default function GridBackground() {
  return (
    <div className="fixed inset-0 -z-50 flex justify-center items-center pointer-events-none overflow-hidden">
      {/* 1. The Base Static Grid */}
      <div className="absolute inset-0 bg-grid bg-grid-slate-900 dark:bg-grid-white mask-radial-faded"></div>

      {/* 2. Horizontal Shooting Lines */}
      {/* top-[20%] aligns it perfectly with a 40px grid row */}
      <div
        className="tracer-h top-[20%]"
        style={{ animationDelay: "0s", animationDuration: "8s" }}
      ></div>
      <div
        className="tracer-h top-[45%]"
        style={{ animationDelay: "3s", animationDuration: "12s" }}
      ></div>
      <div
        className="tracer-h top-[75%]"
        style={{ animationDelay: "7s", animationDuration: "10s" }}
      ></div>

      {/* 3. Vertical Shooting Lines */}
      <div
        className="tracer-v left-[25%]"
        style={{ animationDelay: "2s", animationDuration: "11s" }}
      ></div>
      <div
        className="tracer-v left-[60%]"
        style={{ animationDelay: "5s", animationDuration: "9s" }}
      ></div>
      <div
        className="tracer-v left-[85%]"
        style={{ animationDelay: "1s", animationDuration: "14s" }}
      ></div>

      {/* 4. Ambient Glowing Orbs */}
      <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-emerald-500/10 dark:bg-emerald-500/5 blur-[120px]"></div>
      <div className="absolute bottom-[-20%] right-[-10%] w-[40%] h-[40%] rounded-full bg-emerald-500/10 dark:bg-emerald-500/5 blur-[100px]"></div>
    </div>
  );
}
