import img1 from './image/img1.jpg';
import img2 from './image/img2.jpg';
import img3 from './image/img3.jpg';
import img4 from './image/img4.jpg';


function Carousel()
{
    return (
        <div className="row">
            <div className="col-12 carousel slide" id="myCarousel" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={img1} alt="navImage" className="img-fluid"/>
                    </div>
                    <div className="carousel-item">
                        <img src={img2} alt="navImage" className="img-fluid"/>
                    </div>
                    <div className="carousel-item">
                        <img src={img3} alt="navImage" className="img-fluid"/>
                    </div>
                    <div className="carousel-item">
                        <img src={img4} alt="navImage" className="img-fluid"/>
                    </div>
                </div>
                <ul className="carousel-indicators">
                    <li data-terget="#myCarousel" data-slide-to="0" className="active"></li>
                    <li data-terget="#myCarousel" data-slide-to="1"></li>
                    <li data-terget="#myCarousel" data-slide-to="2"></li>
                    <li data-terget="#myCarousel" data-slide-to="3"></li>
                </ul>
                <a href="#myCarousel" data-slide="prev" className="carousel-control-prev">
                    <i className="carousel-control-prev-icon"></i>
                </a>
                <a href="#myCarousel" data-slide="next" className="carousel-control-next">
                    <i className="carousel-control-next-icon"></i>
                </a>
            </div>
        </div>
    );
}
export default Carousel;