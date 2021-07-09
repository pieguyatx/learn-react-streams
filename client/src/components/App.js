import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

const PageOne = () => {
    return <div>This is page 1.  Go to <Link to="/pagetwo">page two</Link>.</div>
}
const PageTwo = () => {
    return <div>This is Page Two.  Here's a button: <button>click me!</button>  Go to <Link to="/">Page One</Link>.</div>
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
