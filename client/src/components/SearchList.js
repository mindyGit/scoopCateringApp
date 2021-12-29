
import React from 'react';
import List from './List';
import { Container, Row, Col } from 'react-grid-system';
import MyCard from './MyCard';
function SearchList({ filteredProducts }) {

    const filtered = <MyCard list={filteredProducts} />
    // const filtered = <List list={filteredProducts} />;
    return (
        <div>
            {filtered}
        </div>
    );
}

export default SearchList;