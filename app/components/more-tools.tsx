const MoreTools = () => {
  return (
    <div className="my-6 max-w-[64rem] card card-compact shadow-xl bg-white">
      <div className="card-body">
        <h2 className="card-title justify-center">More AI Tools</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <a
            href="https://www.aimathsolve.com"
            target="_blank"
            className="card bg-primary text-primary-content hover:bg-primary-focus transition-all duration-300 transform hover:-translate-y-2 hover:scale-105"
          >
            <div className="card-body items-center text-center">
              <img
                src="https://www.aimathsolve.com/favicon.ico"
                alt="AI Math Solver Icon"
                className="w-16 h-16 mb-2"
              />
              <h3 className="card-title">AI Math Solver</h3>
              <p>Solve complex math problems with AI assistance</p>
            </div>
          </a>

          <a
            href="https://stockwise.pro"
            target="_blank"
            className="card bg-secondary text-secondary-content hover:bg-secondary-focus transition-all duration-300 transform hover:-translate-y-2 hover:scale-105"
          >
            <div className="card-body items-center text-center">
              <img
                src="https://stockwise.pro/favicon.ico"
                alt="Stockwise Icon"
                className="w-16 h-16 mb-2"
              />
              <h3 className="card-title">Stockwise</h3>
              <p>AI-powered stock market analysis and insights</p>
            </div>
          </a>

          <a
            href="https://design0.app"
            target="_blank"
            className="card bg-accent text-accent-content hover:bg-accent-focus transition-all duration-300 transform hover:-translate-y-2 hover:scale-105"
          >
            <div className="card-body items-center text-center">
              <img
                src="https://design0.app/favicon.ico"
                alt="Design0 Icon"
                className="w-16 h-16 mb-2"
              />
              <h3 className="card-title">Design0</h3>
              <p>AI design tools for creative professionals</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};
export default MoreTools;
