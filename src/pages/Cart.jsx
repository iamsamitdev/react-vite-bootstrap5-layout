import CartItems from "./CartItems"

const Cart = () => {

  const products = [
    {
        imgUrl: 'https://www.techxcite.com/topics/35592/filemanager/xiaomi_mi_11.jpg',
        name: 'Xiaomi MI 11',
        price: 18000.00,
        qty: 5
    },
    {
        imgUrl: 'https://consumer.huawei.com/content/dam/huawei-cbg-site/en/mkt/pdp/phones/p30-pro/P30Pro_share-img.jpg',
        name: 'Huawei P30 Pro',
        price: 24000.00,
        qty: 2
    },
    {
        imgUrl: 'https://s.isanook.com/hi/0/ud/303/1516341/s21_1.jpg',
        name: 'Samsung Galaxy S21',
        price: 45000.00,
        qty: 3
    },
    {
        imgUrl: 'https://images.droidsans.com/wp-content/uploads/2021/01/reno5_360-b4fa44-1024x933.jpg',
        name: 'OPPO Reno 5',
        price: 32000.00,
        qty: 1
    },
    {
        imgUrl: 'https://www.iphone-droid.net/spec/wp-content/uploads/2020/09/Vivo-V20-Spec-and-Pricing-600x600.jpg',
        name: 'Vivo V20',
        price: 16500.00,
        qty: 10
    }
  ]

  return (
    <>
        {/* <CartItems name="Banana" price="10" qty="2" />
        <CartItems name="Orange" price="8" qty="5" /> */}
        <div className="row">
            {
                products.map((product, index) => {
                    // console.log(index)
                    // console.log(product)
                    return (
                        <div className="col-md-3" key={index}>
                            <CartItems 
                                imgUrl={product.imgUrl} 
                                name={product.name} 
                                price={product.price} 
                                qty={product.qty} />
                        </div>
                    )
                })
            }
        </div>
    </>
  )
}

export default Cart