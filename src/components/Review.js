import React, { Component } from 'react'
import Header from './Header'

export default class extends Component {
    
      back = e => {
        e.preventDefault();
        this.props.prevStep();
      };

      stepChange(step) {
          this.props.values.step = 1;
      }


    render(){
        const { values, handleChange } = this.props;
        return (
            <div class="container mx-auto">
                <Header progress={100} />
                <div className="pt-24"> 
                <span>Complete - Review your application</span>
                <br/> <br/>
                
                <div className="bg-gray-200 mb-10 p-5">
                    <span className="text-purple-400 mb-4">Basic Information</span>
                    <br/> <br/>
                    <span>Name:</span> <span className="text-gray-500 md:mr-10">{this.props.values.firstname} {this.props.values.lastName}</span>
                    <br className="md:hidden"/>
                    <span >Date of Birth:</span> <span className="text-gray-500 md:mr-10">{this.props.values.dob}</span>
                    <br className="md:hidden"/>
                    <span >Gender:</span> <span className="text-gray-500 md:mr-10">{this.props.values.gender}</span>
                    <br className="md:hidden"/>
                    <span >Nationality:</span> <span className="text-gray-500 md:mr-10">{this.props.values.nationality}</span>
                    
                    <br className=":hidden"/>
                    
                    <span >Country of Residence:</span> <span className="text-gray-500 md:mr-10">{this.props.values.residence}</span>
                    <br className="md:hidden"/>
                    <span >Contact Number:</span> <span className="text-gray-500 md:mr-10">{this.props.values.contact}</span>
                    <br className="md:hidden"/>
                    <span >Email:</span> <span className="text-gray-500 md:mr-10">{this.props.values.email}</span>
                    <br/>
                </div>

                <div className="bg-gray-200 mt-28 p-5">
                    <span className="text-purple-500 mb-4">Questionaire</span>
                    <br/> <br/>
                    <ul>
                        <li>Have you ever visited Dubai?</li> 
                        <span className="main-gradient text-white inline-flex items-center my-3 mr-6 rounded-full py-3 px-6 pill">{this.props.values.visited}</span>
                        <li>Do you have any friends or family in Dubai?</li>
                        <span className="main-gradient text-white inline-flex items-center my-3 mr-6 rounded-full py-3 px-6 pill">{this.props.values.family}</span>
                        <li>How long do you want to stay in Dubai?</li>
                        <span className="main-gradient text-white inline-flex items-center my-3 mr-6 rounded-full py-3 px-6 pill">{this.props.values.period}</span>
                        <li>Why do you want to come to Dubai?</li>
                        <span className="main-gradient text-white inline-flex items-center my-3 mr-6 rounded-full py-3 px-6 pill">{this.props.values.why}</span>
                        <li>What industries would you prefer to work in?</li>
                        <span className="main-gradient text-white inline-flex items-center my-3 mr-6 rounded-full py-3 px-6 pill">{this.props.values.industries}</span>
                        <li>What are your interests?</li>
                        <span className="main-gradient text-white inline-flex items-center my-3 mr-6 rounded-full py-3 px-6 pill">{this.props.values.interests}</span>
                        <li>Do you have any financial savings?</li>
                        <span className="main-gradient text-white inline-flex items-center my-3 mr-6 rounded-full py-3 px-6 pill">{this.props.values.savings}</span>
                        <li>What is your level of education?</li>
                        <span className="main-gradient text-white inline-flex items-center my-3 mr-6 rounded-full py-3 px-6 pill">{this.props.values.education}</span>
                        <li>How soon do you want to come to Dubai?</li>
                        <span className="main-gradient text-white inline-flex items-center my-3 mr-6 rounded-full py-3 px-6 pill">{this.props.values.when}</span>
                    </ul>
                    <br/>

                </div>
                
                <br/>

                    <button onClick={this.back} class="bg-white text-black border border-black my-3 mr-6 py-3 px-10 rounded-full">Back</button>
                    <button class=" main-gradient text-white my-3 mr-6 rounded-full py-3 px-10">Complete Application</button>
                </div>
            </div>
        )
    }
    
}
