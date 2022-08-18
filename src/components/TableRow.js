import React from 'react';

const TableRow = ({user}) => {
    return (
        <tr>
        <td scope="row" data-label="S/N"> {user.id}</td>
        <td data-label="Name">{user.name}</td>
        <td data-label="Username">{user.username}</td>
        <td data-label="Email">{user.email}</td>
        <td data-label="Website"> <p className='btn'>{user.website}</p></td>
        </tr>
    );
};

export default TableRow;