import React, { Component } from 'react';
import background from '../assets/main-bg.png'
import image1 from '../assets/man-f.png'
import Header from './Header'

export default class extends Component{

  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  MainForm = () => {
    const { values, handleChange } = this.props;
    return(
      <div>
        
            <form class="w-full max-w-lg ">
                <div class="flex flex-wrap -mx-3 mb-4">
                    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0 label-floating">
                      <input class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="First Name" onChange={handleChange('firstName')} />
                    </div>
                    <div class="w-full md:w-1/2 px-3">
                      <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Last Name" onChange={handleChange('lastName')}/>
                    </div>
                </div>

                <div class="flex flex-wrap -mx-3 mb-4">
                  <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs mb-2" for="grid-dob">
                        Date of Birth
                    </label>
                    <input type="date" onChange={handleChange('dob')}  value={this.props.values.dob} className="bg-gray-200 border border-gray px-8 py-2"/>
                  </div>

                    <div class="w-full md:w-1/2 px-3 mb-4">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs mb-2" for="grid-gender">
                        Gender
                    </label>
                    <label class="mx-4">
                            <input type="radio" class="form-radio" onChange={handleChange('gender')} name="gender" value="Male" />
                            <span>Male</span>
                        </label>
                        <label class="">
                            <input type="radio" class="form-radio"  onChange={handleChange('gender')} name="gender" value="Female" />
                            <span>Female</span>
                        </label>
                    </div>
                    
                </div>
                


                <div class="flex flex-wrap -mx-3 mb-4">
                  <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs mb-2" for="grid-nationality">
                        Nationality
                    </label>
                    <div class="relative">
                        <select onChange={handleChange('nationality')} class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-nationality">
                          <option>Sudanese</option>
                          <option>Indian</option>
                          <option>American</option>
                          <option>Other</option>
                        </select>
                        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                        </div>
                    </div>
                    </div>

                    <div class="w-full md:w-1/2 px-3 mb-4">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs mb-2" for="grid-residence">
                        Country of Residence
                    </label>
                    <div class="relative">
                        <select onChange={handleChange('residence')} class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-residence">
                        <option>UAE</option>
                        <option>Sudan</option>
                        <option>Other</option>
                        </select>
                        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                        </div>
                    </div>
                    </div>
                    
                </div>
                <span> How can we contact you?</span>

                <div class="flex flex-wrap -mx-3 mt-4 mb-4">
                    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0 label-floating">
                        <input onChange={handleChange('contact')} class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Contact Number" />
                    </div>
                    <div class="w-full md:w-1/2 px-3">
                      <input onChange={handleChange('email')} class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="email" placeholder="email" />
                    </div>
                </div>
                
                {this.props.values.firstName && this.props.values.lastName && this.props.values.dob && this.props.values.nationality && this.props.values.residence && this.props.values.contact && this.props.values.email ? 
                  <button onClick={this.continue} class=" main-gradient text-white my-3 mr-6 rounded-full py-3 px-10">Apply Now</button> : ("Fill form to apply")}
                
            </form>
        </div>
    )
  }

  render(){
    const { values, handleChange } = this.props;
    return (
      <div className="mx-auto min-h-screen flex items-center justify-center ">
          <Header progress={0} />
        <div className="flex flex-col items-center justify-center md:flex-row-reverse md:w-full md:justify-between">
          <div className="sm:px-28 md:px-0 md:w-3/6 sm:w-full">
          <br className="md:hidden"/> <br className="md:hidden"/> <br className="md:hidden"/>
            <p className="text-center text-lg mr-24 mb-6">Apply now to work in Dubai</p>
              <this.MainForm />
          </div>
          <div 
          className="md:w-3/6 bg-black text-white md:min-h-screen bg-cover"
          style={{
              backgroundImage: `url(${background})`
          }}
        >
              <div className="w-full max-w-lg hidden md:block pt-24">
                <div className="flex flex-wrap mx-3 mb-6 w-11/12">
                  <img src={image1} alt="" className="mx-auto"/>
                  <p className="text-xs mb-2">"Coming to Dubai with One Step Dubai has been the best decision of my life. I am now living in Dubai with a good job and I will be getting married next year!"</p>
                  <p className="text-sm w-full mb-2">Mohammed, One Step Dubai student</p>
                  <p className="text-sm">Pakistan</p>
                </div>
              </div>
          </div>
        </div>
      </div>
    );
  }
}

