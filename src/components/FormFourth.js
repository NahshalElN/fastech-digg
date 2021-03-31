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
    interestsValues = ["Outdoors", "Fitness", "Health", "Travel", "Theme parks", "Cooking", "Sports", "Adventure", "Music", "Fashion", "Technology", "Architecture", "Writing", "Gaming", "Dining", "History", "Theatre", "Networking", "Art", "Politics", "Fishing", "Meet people", "Podcasts", "Gambling", "Self improvement", "Foreign languages", "Movies", "Celebrities", "Dating", "Social media", "Photography"];
    render(){
        const { values, handleChange } = this.props;
        return (
            <div class="form form-1 min-h-screen">
                <div className="container mx-auto">
                <Header progress={50} />
                <div className="pt-24"> 
                <span>What are your interests?</span>
                    <br/>
                    {this.interestsValues.map((interestValue, index) => (
                        <label class="inline-flex items-center focus:main-gradient my-3 mr-6 rounded-full py-3 px-6 pill">
                        <input type="radio" class="form-radio" onChange={handleChange('interests')} name="fourth" value={interestValue} />
                        <span>{interestValue}</span>
                    </label>
                    ))}
                    <br/>

                    <button onClick={this.back} class="bg-white text-black border border-black my-3 mr-6 py-3 px-10 rounded-full">Back</button>

                    {this.props.values.interests ?
                        <button onClick={this.continue} class="main-gradient text-white my-3 mr-6 rounded-full py-3 px-10">Next</button>
                    : ("Select an option.")
                    }

                </div>
            </div>
            </div>
        )
    }
    
}
