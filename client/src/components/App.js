import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
// See resources for alternate routers: HashRouter or MemoryRouter
// https://www.udemy.com/course/react-redux/learn/lecture/12700551#questions/11889548
// BrowserRouter miiiiight cause problems in deployment if the server isn't set up for React to serve index.html 
// by default. So instead you might use HashRouter instead to avoid problems, not needing special configurations.
// e.g. GitHub Pages could use the HashRouter, so the server ignores everything after the Hash.
// Use MemoryRouter if you don't want any other URLs...

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
