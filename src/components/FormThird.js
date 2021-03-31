import React, { Component } from 'react'
import Header from './Header'

export default class extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
      };
    
      back = e => {
        e.preventDefault();
        this.props.prevStep();
      };
    industriesValues = ["Construction", "Hostpitality", "Real estate", "Tourism", "Manufacturing", "Technology", "Media", "Farming", "Fishing", "Education", "Public Services", "Administration", "Financial Services", "Legal", "Healthcare", "Government", "Medical", "Security", "Logistics", "Robotics", "Fashion", "Automotive", "Transportation", "Customer Support"];
    render(){
        const { values, handleChange } = this.props;
        return (
            <div class="form form-3 min-h-screen">
                <div className="container mx-auto">
                <Header progress={36} />
                <div className="pt-24"> 
                <span>What industries would you prefer to work in?</span>
                    <br/>
                    {this.industriesValues.map((industriesValue, index) => (
                        <label class="inline-flex items-center focus:main-gradient my-3 mr-6 rounded-full py-3 px-6 pill">
                        <input type="radio" class="form-radio" onChange={handleChange('industries')} name="third" value={industriesValue} />
                        <span>{industriesValue}</span>
                    </label>
                    ))}
                    <br/>

                    <button onClick={this.back} class="bg-white text-black border border-black my-3 mr-6 py-3 px-10 rounded-full">Back</button>
                
                    {this.props.values.industries ?
                        <button onClick={this.continue} class="main-gradient text-white my-3 mr-6 rounded-full py-3 px-10">Next</button>
                    : ("Select an option.")
                    }

                </div>
            </div>
            </div>
        )
    }
    
}
