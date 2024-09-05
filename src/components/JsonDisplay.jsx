import React, { useEffect, useState } from "react";
import jsonData from "./apple-app-site-association.json";

function JsonDisplay() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Directly use the imported JSON data
        setData(jsonData);
        setLoading(false);
    }, []);

    if (loading) {
        return <p>Loading...</p>;
    }

    return (
        <div>
            <pre>{JSON.stringify(data, null, 2)}</pre> {/* Prettifies the JSON */}
        </div>
    );
}

export default JsonDisplay;
