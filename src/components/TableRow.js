import React from 'react';

const TableRow = ({user}) => {
    return (
        <tr>
        <td> {user.id}</td>
        <td>{user.name}</td>
        <td>{user.username}</td>
        <td>{user.email}</td>
        <td> <p className='btn'>{user.website}</p></td>
        </tr>
    );
};

export default TableRow;