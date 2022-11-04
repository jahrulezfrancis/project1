import "./body.css"

export function Body() {
    return (
        <div className="body">
            <div className="bodyHeader">
                <h1>Fun fact about learning React</h1>
            </div>
            <div className="fun-fact-list">
                <ul>
                    <li>Was first released in 2013</li>
                    <li>Was originally created by Jordan Walke</li>
                    <li>Has well over 100k start on GitHub</li>
                    <li>It is mantained by Faceboob</li>
                    <li>Powers thousand of enterprise apps, including mobile apps</li>
                </ul>
            </div>
        </div>
    )
}