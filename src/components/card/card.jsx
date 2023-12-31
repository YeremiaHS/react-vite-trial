import "./card.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Card(props) {
    const {id, imgProd, price, name} = props;

    return (
        <div className="card-container">
            <div className="image">
                <img src={imgProd} alt="image" />
                <p>{price}</p>
            </div>
            <div className="desc">
                <Link to={`/prod/${id}`}>
                    <p>{name}</p>
                </Link>
            </div>
        </div>
    );
}

Card.PropTypes = {
    id: PropTypes.string,
    imgProd: PropTypes.string,
    price: PropTypes.string,
    name: PropTypes.string
}

export default Card;