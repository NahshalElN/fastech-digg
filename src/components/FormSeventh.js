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
      whenValues = ["📅 Right now", "📅 0 to 3 months", "📅3 to 6 months", "📅 6 to 12 months", "📅 After 1 year", "📅 I'm not sure"]
    render(){
        const { values, handleChange } = this.props;
        return (
            <div class="form form-7 min-h-screen">
                <div className="container mx-auto">
                <Header progress={88} />
                <div className="pt-24"> 
                <span>How soon do you want to come to Dubai?</span>
                <br/>
                    {this.whenValues.map((whenValue, index) => (
                        <label class="inline-flex items-center focus:main-gradient my-3 mr-6 rounded-full py-3 px-6 pill">
                        <input type="radio" class="form-radio" onChange={handleChange('when')} name="seventh" value={whenValue} />
                        <span>{whenValue}</span>
                    </label>
                    ))}
                    <br/>

                    <button onClick={this.back} class="bg-white text-black border border-black my-3 mr-6 py-3 px-10 rounded-full">Back</button>

                    {this.props.values.when ?
                        <button onClick={this.continue} class="main-gradient text-white my-3 mr-6 rounded-full py-3 px-10">Next</button>
                    : ("Select an option.")
                    }

                </div>
            </div>
            </div>
        )
    }
    
}
