import Images from './Images';
import './TheBody.css'
function TheBody() {
  return (
    <div className="container">
      <div className="content row">
        <Images/>
        <div className="col">2 of 2</div>
      </div>
    </div>
  );
}

export default TheBody
