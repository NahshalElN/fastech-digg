import React, { Component } from 'react';

export default class extends Component {
  render() {
    const { progress } = this.props;
  
  return (
    <div className="absolute top-0 pt-2 w-11/12" >
      {progress > 0 ? (
      <div className="px-14 text-black flex items-center">
        <div className="w-2/6">
        <h1 className="text-4xl font-bold">digg</h1>
        </div>
        
        <div className="w-4/6 text-black">
          <span className="text-sm">Progress</span>
          <div className="text-black progress-bar bg-gray-300 h-1 w-10/12 rounded-full" >
            <div className="progress main-gradient h-1 rounded-full" 
              style={{
                width: (progress) + "%"
              }}
            />
          </div>
        </div>
      </div>
        ) : (
          <div className="text-black flex items-center mx-auto container">
          <div className="w-2/6">
          <h1 className="md:text-white text-4xl font-bold">digg</h1>
          </div>
          </div>
        )}
      
    </div>
  ); 
  }
}