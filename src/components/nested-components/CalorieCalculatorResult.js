// import React from 'react'

// const CalorieCalculatorResult = ({ results, resultScroll }) => {
//     return (
//         <>
//             <section className="calorie-calculator-result">
//                 <div ref={resultScroll} className="scroll-ref"></div>
                
//                 <h2>Results</h2>

//                 <div className="results">
//                     {
//                         results.map((result, i) => {
//                             return <ResultItem 
//                                         key={i} 
//                                         goal={result.goal} 
//                                         calory={result.calory}
//                                         weight={result.weight}
//                                     />
//                         })
//                     }
//                 </div>
//             </section>
//         </>
//     )
// }

// const ResultItem = ({ goal, calory, weight }) => {
//     return (
//         <div className="result-item">
//             <div className="goal">
//                 <p className="title">{goal}</p>
//                 {weight ? <p className="weight">{weight}</p> : null}
//             </div>
//             <div className="calories">
//                 <p className="text-1">{calory}</p>
//                 <p className="text-2">Calories / day</p>
//             </div>
//         </div>
//     )
// }

// export default CalorieCalculatorResult

import React from 'react';

const CalorieCalculatorResult = ({ results = [], resultScroll }) => {
    const hasResults = results.length > 0;

    return (
        <section className="calorie-calculator-result">
            <div ref={resultScroll} className="scroll-ref" />

            <h2>Results</h2>

            {hasResults ? (
                <div className="results">
                    {results.map(({ goal, calory, weight }, i) => (
                        <ResultItem
                            key={`${goal}-${i}`}
                            goal={goal}
                            calory={calory}
                            weight={weight}
                        />
                    ))}
                </div>
            ) : (
                <p className="no-results">No results yet. Fill the form to calculate.</p>
            )}
        </section>
    );
};

const ResultItem = ({ goal, calory, weight }) => (
    <div className="result-item">
        <div className="goal">
            <p className="title">{goal}</p>
            {weight && <p className="weight">{weight}</p>}
        </div>
        <div className="calories">
            <p className="text-1">{calory}</p>
            <p className="text-2">Calories / day</p>
        </div>
    </div>
);

export default CalorieCalculatorResult;
