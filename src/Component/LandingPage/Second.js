import React from 'react'

function Second() {
    return (
        <div>
            <h2 className="text-center mt-3"><strong>How it works</strong></h2>
            <div className="row justify-content-center">
                <div className="col-9 mx-0 col-md-6 col-lg-3 my-3 text-center">
                <div className="card shadow rounded">
                    <i className="fas fa-shopping-cart mt-3 fa-3x"></i>                    
                    <div className="card-body">
                        <h5 className="card-title">You browse your favorite store</h5>
                        <p className="card-text">fill your cart with product from your favorite store</p>
                    </div>
                </div>
                </div>
                <div className="col-9 mx-0 col-md-6 col-lg-3 my-3 text-center">
                <div className="card shadow rounded">
                    <i className="fas fa-shopping-bag mt-3 fa-3x"></i>
                    <div className="card-body">
                        <h5 className="card-title">We shop for you as we would for ourselves</h5>
                        <p className="card-text">fill your cart with product from your favorite store</p>
                    </div>
                </div>
                </div>
                {/* </div> */}
                <div className="col-9 mx-0 col-md-6 col-lg-3 my-3 text-center">
                <div className="card shadow ">
                    <i className="fas fa-truck mt-3 fa-3x"></i>
                    <div className="card-body">
                        <h5 className="card-title">We deliver your order in 0ne hour</h5>
                        <p className="card-text">fill your cart with product from your favorite store</p>
                    </div>
                </div>
                </div>
            </div>
            <div className="text-center">

                <p><button className="text-white btn btn-outline-success shadow rounded border-0 rounded-pill bg-danger" type="submit">Learn More</button></p>
            </div>
        </div>
    )
}

export default Second
