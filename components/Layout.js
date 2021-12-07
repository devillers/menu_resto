import Header from './Header';


function Layout({ children }) {
  return (
    <div className="relative  w-full ">
      {/* <Header /> */}

      {children}
     
    </div>
  );
}

export default Layout;
