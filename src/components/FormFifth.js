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
      savingsValues = ["No savings", "0 to 1000 AED", "1000 to 5000 AED", "5000 to 10,000 AED", "10,000 to 20,000 AED", "20,000 to 50,000 AED", "+50,000 AED"]
    render(){
        const { values, handleChange } = this.props;
        return (
            <div class="form form-5 min-h-screen">
                <div className="container mx-auto">
                <Header progress={62} />
                <div className="pt-24"> 
                <span>Do you have any financial savings?</span>
                    <br/>
                    {this.savingsValues.map((savingsValue, index) => (
                        <label class="inline-flex items-center focus:main-gradient my-3 mr-6 rounded-full py-3 px-6 pill">
                        <input type="radio" class="form-radio" onChange={handleChange('savings')} name="fifth" value={savingsValue} />
                        <span>{savingsValue}</span>
                    </label>
                    ))}
                    <br/>

                    <button onClick={this.back} class="bg-white text-black border border-black my-3 mr-6 py-3 px-10 rounded-full">Back</button>

                    {this.props.values.savings ?
                        <button onClick={this.continue} class="main-gradient text-white my-3 mr-6 rounded-full py-3 px-10">Next</button>
                    : ("Select an option.")
                    }

                </div>
            </div>
            </div>
        )
    }
    
}
