const CartItems = (props) => {
  return (
    <div className="card">
        <img src={props.imgUrl} className="card-img-top" />
        <div className="card-body">
            <h5 className="card-title">{props.name}</h5>
            <p className="card-text">{props.price}</p>
            <p className="card-text">{props.qty}</p>
        </div>
    </div>
  )
}

export default CartItems