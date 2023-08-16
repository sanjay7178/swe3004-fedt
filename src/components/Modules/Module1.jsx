const Module1 = () => {
  return (
    <>
      <div className="join join-vertical w-full space-y-3">
        <h1 className="font-bold text-xl">Module 1 (HTML, CSS and Javascript )</h1>
        <details className="collapse collapse-plus bg-base-300 max-w-2xl">
          <summary className="collapse-title text-xl font-medium w-full">
          HTML5 – Form elements, Input types and Media elements
          </summary>
          <div className="collapse-content">
            <p>content</p>
          </div>
        </details>
        <details className="collapse collapse-plus bg-base-300 max-w-2xl">
          <summary className="collapse-title text-xl  font-medium">
            CCSS3 - Selectors, Box Model,
Backgrounds and Borders, Text Effects, Animations, Multiple Column Layout, User Interface.
          </summary>
          <div className="collapse-content">
            <p>
              <li className="text-blue-700">
                 <a href='https://codepen.io/Sai-Sanjay-Kottakota/pen/PoXYbea' target='_blank'>Animations</a>
              </li>
            </p>
          </div>
        </details>
        <details className="collapse collapse-plus bg-base-300 max-w-2xl">
          <summary className="collapse-title text-xl font-medium">
            JavaScript Introduction –Functions – Arrays – DOM, Built-in Objects, Regular Expression,
Event handling.
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