import React from 'react';

const Type = (cell) => {
    return (
        <React.Fragment>
            {cell.value === "Buy" ?
                <span className="type text-success">{cell.value}</span>
                :
                <span className="type text-danger">{cell.value}</span>
            }
        </React.Fragment>
    );
};

const Quantity = (cell) => {
    return (
        <React.Fragment>
            {cell.value}
        </React.Fragment>
    );
};

const OrderValue = (cell) => {
    return (
        <React.Fragment>
            {cell.value}
        </React.Fragment>
    );
};

const AvgPrice = (cell) => {
    return (
        <React.Fragment>
            {cell.value}
        </React.Fragment>
    );
};

const Price = (cell) => {
    return (
        <React.Fragment>
            {cell.value}
        </React.Fragment>
    );
};

const Status = (cell) => {
    return (
        <React.Fragment>
            {cell.value === "Pending" ?
                <span className="badge bg-warning-subtle text-warning text-uppercase">{cell.value}</span>
                : cell.value === "Successful" ?
                    <span className="badge bg-success-subtle text-success text-uppercase">{cell.value}</span>
                    : cell.value === "Cancelled" ?
                        <span className="badge bg-danger-subtle text-danger text-uppercase">{cell.value}</span>
                        : null

            }
        </React.Fragment>
    );
};

export { Type, Quantity, OrderValue, AvgPrice, Price, Status };