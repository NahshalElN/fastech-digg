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
    whyValues = ["🤩 Lifestyle", "Work opportunities", "Education", "Finance", "Tourism", "Family", "Security", "The weather", "Meeting new people", "Culture"];
    render(){
        const { values, handleChange } = this.props;
        return (
            <div class="form form-2 min-h-screen">
                <div className="container mx-auto">
                <Header progress={24} />
                <div className="pt-24">
                <span class="text-base">Why do you want to come to Dubai? </span>
                    <br/>
                    {this.whyValues.map((whyValue, index) => (
                        <label class="inline-flex items-center focus:main-gradient my-3 mr-6 rounded-full py-3 px-6 pill">
                        <input type="radio" onChange={handleChange('why')} name="second" value={whyValue} />
                        <span>{whyValue}</span>
                    </label>
                    ))}
                    <br/>

                    <button onClick={this.back} class="bg-white text-black border border-black my-3 mr-6 py-3 px-10 rounded-full">Back</button>
                
                    {this.props.values.why ?
                        <button onClick={this.continue} class="main-gradient text-white my-3 mr-6 rounded-full py-3 px-10">Next</button>
                    : ("Select an option.")
                    }

                </div>
            </div>
            </div>
        )
    }
    
}
