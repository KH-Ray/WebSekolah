const Box = ({ children, styles }) => {
  const style = `rounded-xl bg-main-gray ${styles}`;

  return <div className={style}>{children}</div>;
};

export default Box;
