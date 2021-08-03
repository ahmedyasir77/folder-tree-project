function App() {
  return <div>
    <Folder name= "Desktop">
      <h3> some stuff </h3>
      <h4> other things </h4>
    </Folder>

    <Folder name= "Applications"/>

    <File name= "dogs.jpeg" />
    <File name= "cats.png" />
  </div> 
}

const Folder = (props) => {
  return <div>
    {props.name}
    {props.children}
    </div>

};

const File = (props) => {
  return <div>{props.name}</div>
};


export default App;
