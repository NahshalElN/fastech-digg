import React, { Component } from 'react'
import Header from './Header'
import background from '../assets/desk-bg/form-1.png'

export default class extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
      };
    
      back = e => {
        e.preventDefault();
        this.props.prevStep();
      };
      periodValues = ["📅 Upto 3 months", "📅 3 to 6 months", "📅 6 to 12 months", "📅 +12 months", "📅 +3 years"];
      
    render(){
        const { values, handleChange } = this.props;
        return (
            <div class="form form-1 min-h-screen">
                <div className="container mx-auto">
                <Header progress={12} />
                <div className="pt-24">
                    <span class="text-base">Have you ever visited Dubai?</span>
                    <div class="mb-5">
                        <label class="inline-flex items-center focus:main-gradient my-3 mr-6 rounded-full py-3 px-6 pill">
                            <input type="radio" class="form-radio" onChange={handleChange('visited')} name="visited" value="👍 yes" />
                            <span>👍 Yes</span>
                        </label>
                        <label class="inline-flex items-center focus:main-gradient my-3 mr-6 rounded-full py-3 px-6 pill">
                            <input type="radio" class="form-radio"  onChange={handleChange('visited')} name="visited" value="👎 no" />
                            <span>👎 No</span>
                        </label>
                        <br/>
                    </div>
                    
                    <span class="text-base">Do you have any friends or family in Dubai?</span>
                    <div class="mb-5">
                        <label class="inline-flex items-center focus:main-gradient my-3 mr-6 rounded-full py-3 px-6 pill">
                            <input type="radio" class="form-radio" onChange={handleChange('family')} name="family" value="👍 yes" />
                            <span>👍 Yes</span>
                        </label>
                        <label class="inline-flex items-center focus:main-gradient my-3 mr-6 rounded-full py-3 px-6 pill">
                            <input type="radio" class="form-radio"  onChange={handleChange('family')} name="family" value="👎 no" />
                            <span>👎 No</span>
                        </label>
                        <br/>
                    </div>

                    <span class="text-base">How long do you want to stay in Dubai?</span>
                    <br/>

                    {this.periodValues.map((periodValue, index) => (
                            <label class="inline-flex items-center my-3 mr-6 rounded-full py-3 px-6 pill">
                            <input type="radio" class="form-radio" onChange={handleChange('period')} name="first" value={periodValue} />
                            <span>{periodValue}</span>
                        </label>
                        ))}
                        <br/>


                    <button onClick={this.back} class="bg-white text-black border border-black my-3 mr-6 py-3 px-10 rounded-full">Back</button>
                    {this.props.values.visited && this.props.values.visited && this.props.values.period ?
                        <button onClick={this.continue} class="main-gradient text-white my-3 mr-6 rounded-full py-3 px-10">Next</button>
                    : ("Select options.")
                    }
                </div>
            </div>
            </div>
        )
    }
    
}
