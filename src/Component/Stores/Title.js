import React from 'react'

export default function Title(props) {
    return (
        <div className="d-flex shadow rounded">
            <div className="store-title">
                {(props.name === 'stores') ? ( <h2 style={{fontWeight: '700'}}>Stores</h2>) : ( <h2 style={{fontWeight: '700'}}>{props.name}</h2>)}
                {/* <h2 style={{fontWeight: '700'}} className="text-capitalize">{props.name}</h2> */}
            </div>
            <div className="store-title-input">
                <form onSubmit={props.handleSubmit}>
                    <input 
                        value={props.search} 
                        onChange={props.handleSearch} 
                        className="form-control"
                        placeholder="Search"
                    />
                    <i className="fa fa-search"></i>
                </form>
            </div>
        </div>
    )
}
