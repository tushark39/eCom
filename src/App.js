import React from 'react';
import './App.css';
import Base from './screens/core/Base';
import { getProduct } from './screens/core/Helper/getallproducts';
class App extends React.Component {
  getallproducts = () => {
    let products = []
    getProduct()
      .then(data => {
        products = data
        console.log(products);
        this.setState({ products })
      })
      .catch(e => console.log(e))
  }
  constructor(props) {
    super(props);
    this.state = {
      products: []
    }
  }
  componentDidMount() {
    this.getallproducts()
  }
  render() {
    return (
      <div>
        <Base>
          <section className="text-gray-700 body-font">
            <div className="container px-5 py-24 mx-auto">
              <div className="flex flex-wrap -m-4">
                {
                  this.state.products.length === undefined ? (
                    <div>
                      We are sorry!!DataBase ErrOr!!!Contact Us!
                    </div>
                  ) :
                    (
                      this.state.products.map((prd, index) => (
                        <div key={index} className="lg:w-1/4 md:w-1/2 p-4 w-full">
                          <a className="block relative h-48 rounded overflow-hidden" href="/">
                            <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={prd.image !== null ? `${prd.image}` : "https://dummyimage.com/100x100"} />
                          </a>
                          <div className="mt-4">
                            <h2 className="text-gray-900 title-font text-lg font-medium">{prd.name}</h2>
                            <p className="mt-1">Rs. {prd.price}</p>
                          </div>
                        </div>
                      ))
                    )
                }
              </div>
            </div>
          </section>
        </Base>
      </div>
    );
  }
}
export default App