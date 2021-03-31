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
      educationValues = ["Highschool or less", "📒 College", "Diploma", "Bachelors"]
    render(){
        const { values, handleChange } = this.props;
        return (
            <div class="form form-6 min-h-screen">
                <div className="container mx-auto">
                <Header progress={76} />
                <div className="pt-24"> 
                <span>What is your level of education?</span>
                <br/>
                    {this.educationValues.map((educationValue, index) => (
                        <label class="inline-flex items-center focus:main-gradient my-3 mr-6 rounded-full py-3 px-6 pill">
                        <input type="radio" class="form-radio" onChange={handleChange('education')} name="sixth" value={educationValue} />
                        <span>{educationValue}</span>
                    </label>
                    ))}
                    <br/>

                    <button onClick={this.back} class="bg-white text-black border border-black my-3 mr-6 py-3 px-10 rounded-full">Back</button>

                    {this.props.values.education ?
                        <button onClick={this.continue} class="main-gradient text-white my-3 mr-6 rounded-full py-3 px-10">Next</button>
                    : ("Select an option.")
                    }

                </div>
            </div>
            </div>
        )
    }
    
}
