import React, { Component } from 'react';
import RegionSelect from 'react-region-flag-select';
import { CountryDropdown, RegionDropdown, CountryRegionData } from 'react-country-region-selector';
import { ButtonContainer } from '../Reuseable/Button'

export default class Location extends Component {
    constructor (props) {
        super(props);
        this.state = { 
            country: '', 
            region: '',
            address: ''
        };
      }

      selectCountry (val) {
        this.setState({ country: val });
      }
    
      selectRegion (val) {
        this.setState({ region: val });
      }
      handleAddress = (e) => {
          this.setState({
              address: e.target.value 
          })
      }
    render() {
        const { country, region } = this.state;
        console.log(this.state);
        return (
            <div className="location-search">
                <div className="search shadow rounded">
                    <h5 className="text-center pt-3 mt-3">Enter Your Location</h5>
                    <p className="text-center">Expore Stores Around Your Area</p>
                    <div className="">
                    <CountryDropdown className="country"
                        value={country}
                        onChange={(val) => this.selectCountry(val)} 
                    />
                    </div>
                    <div className="py-2">
                    <RegionDropdown className="country"
                        country={country}
                        value={region}
                        onChange={(val) => this.selectRegion(val)} 
                    />
                    </div>
                    <div className="pb-4">
                        <input className="country" 
                            value={this.state.address} 
                            onChange={this.handleAddress} 
                            placeholder="Address"
                        />
                    </div>
                    <ButtonContainer>Continue</ButtonContainer>
                </div>
            </div>
        )
    }
}
