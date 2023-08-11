const Module1 = () => {
  return (
    <>
      <div className="join join-vertical w-full space-y-3">
        <details className="collapse collapse-plus bg-base-300 max-w-2xl">
          <summary className="collapse-title text-xl font-medium w-full">
            Click to open/close
          </summary>
          <div className="collapse-content">
            <p>content</p>
          </div>
        </details>
        <details className="collapse collapse-plus bg-base-300 max-w-2xl">
          <summary className="collapse-title text-xl font-medium">
            Click to open/close
          </summary>
          <div className="collapse-content">
            <p>content</p>
          </div>
        </details>
        <details className="collapse collapse-plus bg-base-300 max-w-2xl">
          <summary className="collapse-title text-xl font-medium">
            Click to open/close
          </summary>
          <div className="collapse-content">
            <p>content</p>
          </div>
        </details>
      </div>
    </>
  );
};

export default Module1;