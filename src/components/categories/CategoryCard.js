import React from "react";
import PropTypes from "prop-types"

const CategoryCard = ({categorie : {fullName,bio, profession, image}, children, handleClick
 }) => {

  return (
    <div className="col-md-3" >
      {children}
      <div className="card" style={{ width: "18rem" }}>
        <img
          style={styleCss}
          src={image}

          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className= "card-title"> {fullName} </h5>
          <p className="card-text"> {bio} </p>
          <p className="card-text"> {profession} </p>
          <a className="card-link" href="" onClick={(event)=>
          {
            event.preventDefault()
            handleClick(fullName)
          }} >
            click me
          </a>
        </div>
      </div>
    </div>
  );
};
CategoryCard.propTypes={categorie:PropTypes.object.isRequired, children:PropTypes.object
}
const styleCss = { height: 200, objectFit: "cover" };

export default CategoryCard;
