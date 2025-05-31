import './pictures.css'; 

const Pictures = () => {
  return (
    <div className="pictures-container">
      <div className="picture-item">
        <img src="path/to/image1.jpg" alt="Picture 1" />
        <p>Description of Picture 1</p>
      </div>
      <div className="picture-item">
        <img src="path/to/image2.jpg" alt="Picture 2" />
        <p>Description of Picture 2</p>
      </div>
      {/* Add more picture items as needed */}
    </div>
  );
} 

export default Pictures;