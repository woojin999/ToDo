import React from 'react';
import "../css/main.scss";
import Head from './Head';
import AddTodo from './AddTodo';

function Main(props) {
    return (
        <>
            <Head/>
            <AddTodo/>
        </>
    );
}

export default Main;