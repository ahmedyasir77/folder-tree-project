import { useState } from "react";

function App() {
  return <div>
    <Folder name= "Desktop">
      <Folder name = "Music">
        <File name = "song_one.mp4"/>
        <File name = "Song_two.mp3"/>
        

      </Folder>
      <File name= "dogs.jpeg" />
      <File name= "cats.png" />
    </Folder>

    <Folder name= "Applications"/>
    <Folder name= "Documents">
      <File name = "book_one.pdf"/>
      <File name = "book_two.pdf"/>
    </Folder>
    
  </div> 
}

const Folder = (props) => {
  const [isOpen, setIsOpen] = useState(true);
  const {name, children} = props; 
  const direction = isOpen ? 'down': 'right';
  const handleClick = () => setIsOpen(!isOpen);
  
  return <div>
    <span onClick = {handleClick}>
      <i className=" teal folder icon"></i>
      <i className={` grey caret ${direction} icon`}></i>
    </span>
    {name}
    <div style={{ marginLeft: '18px'}} >
      {isOpen ? children : null}
    </div>
  </div>

};

const File = (props) => {
  const {name} = props;
  const fileExtension = name.split('.')[1];
  const fileIcons = {
    mp4: 'headphones', 
    mp3: 'headphones',
    jpeg: 'file image', 
    png: 'file image outline',
    pdf: 'book',
  };

  return <div>
    <i className={`${fileIcons[fileExtension]} icon`}></i>
    {name}
  </div>
};


export default App;
