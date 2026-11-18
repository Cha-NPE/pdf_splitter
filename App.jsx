import PdfSplitter from "./src/components/PdfSplitter";

import "./App.css";
import "./src/components/styles.css";

function App() {
    return (
        <div className="layout">
            <main className="content">
                <PdfSplitter />
            </main>
        </div>
    );
}

export default App;
