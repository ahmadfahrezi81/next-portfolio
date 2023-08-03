import React from "react";

const TailwindGridExample = () => {
    return (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-1 lg:grid-cols-1 lg:gap-8">
            {/* Main Item */}
            <div className="col-span-1 bg-blue-200 p-4 rounded-lg">
                <h2>Main Item</h2>
                <p>This is the main content area.</p>
            </div>

            {/* Bottom Items */}
            <div className="col-span-1 bg-green-200 p-4 rounded-lg">
                <h2>Bottom Item 1</h2>
                <p>This is the first item at the bottom.</p>
            </div>
            <div className="col-span-1 bg-yellow-200 p-4 rounded-lg">
                <h2>Bottom Item 2</h2>
                <p>This is the second item at the bottom.</p>
            </div>
        </div>
    );
};

export default TailwindGridExample;
