const LeftMenu = () => {
  return (
    <div
      className="fixed left-3 top-0 flex items-center leftMenu"
      style={{ height: '75px' }}
    >
      <img
        src="https://logodownload.org/wp-content/uploads/2014/09/facebook-logo-0.png"
        alt="facebook logo"
        style={{ height: '50px' }}
      />
      <label className="search_box flex p-2 rounded-lg ml-2">
        <div className="mr-2 flex items-center">
          <i data-visualcompletion="css-img" className="search_box"></i>{' '}
        </div>
        <input
          name="search"
          type="text"
          required={true}
          placeholder="Facebook search"
          value={''}
          onChange={() => {}}
        />
      </label>
    </div>
  );
};

export default LeftMenu;
