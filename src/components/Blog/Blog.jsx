import React from 'react';

const Blog = () => {
    return (
        <div className='w-full mb-2'>
            <div className='bg-[#f9f9ff] flex items-center justify-center mb-6'>
                <h1 className='text-4xl font-bold my-10'>Interview Questions Answers</h1>
            </div>
            <div>
                <div className='bg-cyan-100 rounded-lg p-8 my-4'>
                    <p className='text-2xl font-bold mb-4'>Q1. Tell us the differences between uncontrolled and controlled components?</p>
                    <p className='text-lg font-light text-justify mb-2'><strong className='font-bold'>Ans:</strong> Controlled components are the ones that are managed and executed by the system, while uncontrolled components are managed and executed by an external entity or user. Controlled components are internal to the system and their behavior can be predicted and controlled by the system, while uncontrolled components are external to the system and their behavior cannot be predicted or controlled by the system.</p>
                </div>
                <div className='bg-cyan-100 rounded-lg p-8 my-4'>
                    <p className='text-2xl font-bold mb-4'>Q2. How to validate React props using PropTypes?</p>
                    <p className='text-lg font-light text-justify'><strong className='font-bold'>Ans:</strong> To validate React props using PropTypes, you need to define the propTypes object for your component. The propTypes object contains key-value pairs where the key is the name of the prop and the value is the expected data type of the prop.</p>
                </div>
                <div className='bg-cyan-100 rounded-lg p-8 my-4'>
                    <p className='text-2xl font-bold mb-4'>Q3. Tell us the difference between nodejs and express js?</p>
                    <p className='text-lg font-light text-justify'><strong className='font-bold'>Ans:</strong> Node.js is a JavaScript runtime environment that allows developers to execute JavaScript code outside of a web browser. It provides an event-driven architecture and a non-blocking I/O API that makes it a great choice for building scalable network applications. Node.js allows developers to write server-side applications using JavaScript, which is the same language used on the client-side. Express.js is a web application framework for Node.js that provides a set of features and tools for building web applications and APIs. It is built on top of Node.js and provides a simple and flexible API for building HTTP servers, handling requests and responses, and routing URLs. Express.js allows developers to easily create web applications that handle requests from clients and send responses back. In summary, Node.js is a runtime environment for executing JavaScript code outside of a web browser, while Express.js is a web application framework built on top of Node.js that provides a set of features and tools for building web applications and APIs. Node.js provides the underlying platform and runtime environment, while Express.js provides a higher-level abstraction for building web applications on top of Node.js.</p>
                </div>
                <div className='bg-cyan-100 rounded-lg p-8 my-4'>
                    <p className='text-2xl font-bold mb-4'>Q4. What is a custom hook, and why will you create a custom hook?</p>
                    <p className='text-lg font-light text-justify'><strong className='font-bold'>Ans:</strong> In React, a custom hook is a reusable piece of code that encapsulates some common logic, and can be used across different components. Custom hooks allow developers to extract and share stateful logic between components without having to repeat the same code in each component. Custom hooks follow the naming convention of using the prefix "use" to make it clear that they are hooks. Developers create custom hooks when they find themselves repeating the same code in multiple components. By extracting the shared logic into a custom hook, developers can reduce duplication, simplify code, and make it easier to maintain and update.</p>
                </div>
            </div>
        </div>
    );
};

export default Blog;