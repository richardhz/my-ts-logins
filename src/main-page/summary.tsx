const SummaryList = () => {
  return (
    <main className="container mt-5 p-5">
      <div className="list-group">
        <a
          href="23"
          className="list-group-item list-group-item-action active"
          aria-current="true"
        >
          The current link item
        </a>
        <a href="24" className="list-group-item list-group-item-action">
          A second link item
        </a>
        <a href="25" className="list-group-item list-group-item-action">
          A third link item
        </a>
        <a href="26" className="list-group-item list-group-item-action">
          A fourth link item
        </a>
        <a
          href="27"
          className="list-group-item list-group-item-action disabled"
          aria-disabled="true"
        >
          A disabled link item
        </a>
      </div>
    </main>
  );
};

export default SummaryList;
