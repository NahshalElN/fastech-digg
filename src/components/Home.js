import React, { Component } from 'react';
import Main from './Main';
import FormFirst from './FormFirst';
import FormSecond from './FormSecond';
import FormThird from './FormThird';
import FormFourth from './FormFourth';
import FormFifth from './FormFifth';
import FormSixth from './FormSixth';
import FormSeventh from './FormSeventh';
import Review from './Review';


export default class Questionaire extends Component{
    state = {
        step: 0,
        firstName: '',
        lastName: '',
        dob: '',
        gender: '',
        nationality: '',
        residence: '',
        contact: '',
        email: '',
        visited: '',
        family: '',
        period: '',
        why: '',
        industries: '',
        interests: '',
        savings: '',
        education: '',
        when: ''
      };

    // Proceed to next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  };

  // Go back to prev step
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  };

  // Handle fields change
  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  };
    
    
    render() {
        const { step } = this.state;
        const { firstName, lastName, dob, gender, nationality, residence, contact, email, visited, family, period, why, industries, interests, savings, education, when} = this.state;
        const values = { firstName, lastName, dob, gender, nationality, residence, contact, email, visited, family, period, why, industries, interests, savings, education, when }
        switch (step) {
            case 0:
                return (
                    <Main 
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                )
            case 1:
                return (
                    <FormFirst 
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        values={values}
                    />   
                )
            case 2:
                return (
                    <FormSecond 
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                )
            case 3:
                return (
                    <FormThird 
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                )
            case 4:
                return (
                    <FormFourth
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                )
            case 5:
                return (
                    <FormFifth 
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                )
            case 6:
                return (
                    <FormSixth 
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                )
            case 7:
                return (
                    <FormSeventh
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                )
            case 8:
                return (
                    <Review
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                )
            default:
                return (
                    <div>no more</div>
                )
        }

    }
    
}
