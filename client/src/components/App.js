import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

const PageOne = () => {
    return <div>PageOne</div>
}
const PageTwo = () => {
    return <div>PageTwo<button>click me!</button></div>
}

// the "exact" property checks if the page path exactly matches the "path" property in the component
// otherwise it checks if it just contains the "path" property.
const App = () => {
    return (
        <div>
            <BrowserRouter>
                <div>
                    <Route path="/" exact component={PageOne} />
                    <Route path="/pagetwo" component={PageTwo} />                    
                </div>
            </BrowserRouter>
        </div>
    );
};

export default App;
