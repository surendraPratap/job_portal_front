import React, { useState, useMemo, useEffect } from 'react'

import { useTable } from 'react-table'
import { isAuthenticated } from '../connector/auth'
import { allRecruitersData } from './apiHelper/admin'
import Menu from '../core/Menu'


const AllRecruiter = () => {

    const [record, setRecord] = useState([]);
    const { user, tokens } = isAuthenticated();
    const loadData = () => {

        allRecruitersData(user._id, tokens).then(data => {
            if (!data) {
                console.log(data)
            } else {
                setRecord(data)

            }
        });
    }

    useEffect(() => {
        loadData();
    }, [record])


    const COLUMNS = [
        {
            Header: 'Name',
            accessor: 'name'
        },
        {
            Header: 'Lastname',
            accessor: 'lastname'
        },
        {
            Header: 'Email',
            accessor: 'email'
        },
        {
            Header: 'Company',
            accessor: 'company'
        },
        {
            Header: 'About',
            accessor: 'userinfo'
        }
    ]


    const columns = useMemo(() => COLUMNS, [])
    const data = useMemo(() => record, [])

    const tableInstance = useTable({ columns, data })
    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow, } = tableInstance;


    return (
        <div>
            <Menu />

            <div className="row bg-info p-4">
                <div className="col-md-6 offset-sm-3 text-left">
                    <div className="table-responsive-sm">
                        <table class="table table-hover table-bordered table-striped table-dark" {...getTableProps()}>
                            <thead className="thead-light">
                                {headerGroups.map(headerGroup => (
                                    <tr {...headerGroup.getHeaderGroupProps()}>
                                        {headerGroup.headers.map(column => (
                                            <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                                        ))}
                                    </tr>
                                ))}

                            </thead>
                            <tbody {...getTableBodyProps()}>
                                {
                                    rows.map((row) => {

                                        prepareRow(row)
                                        return (
                                            <tr {...row.getRowProps()}>
                                                {row.cells.map((cell) => {
                                                    return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                                })}
                                                <span style={{ margin: '15px 15px' }} className=" badge badge-danger"
                                                >
                                                    Delete </span>
                                            </tr>
                                        )
                                    })
                                }

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default AllRecruiter;






