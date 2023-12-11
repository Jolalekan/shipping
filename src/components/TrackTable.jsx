import React, { useState } from 'react'
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Link } from 'react-router-dom';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { FaTrash } from 'react-icons/fa';
import { FaPencilAlt } from 'react-icons/fa';
import { FaEye } from 'react-icons/fa';

const TrackTable = ({ shippingList }) => {

  const queryClient = useQueryClient()

  const rows = shippingList && Array.isArray(shippingList.data) ? shippingList.data : [];

  const columns = [
    {
      field: '_id',
      headerName: 'ID',
      width: 70
    },
    {
      field: 'trackingNumber',
      headerName: 'Tracking Number',
      type: 'number',
      width: 90,
    },
    {
      field: 'dateOfShipping',
      headerName: 'Shipping Date',
      type: 'number',
      width: 90,
    },
    {
      field: 'dateOfDelivery',
      headerName: 'Delivery Date',
      type: 'number',
      width: 90,
    },
    {
      field: 'sender',
      headerName: 'Sender',
      width: 70
    },
    {
      field: 'receiver',
      headerName: ' Receiver',
      width: 130
    },

    {
      field: 'sendAddress',
      headerName: 'Sender Address',
      width: 90,
    },
    {
      field: 'receiveAddress',
      headerName: 'Receiver Address',
      width: 90,
    },
    {
      field: 'no',
      headerName: 'No',
      width: 90,
    },
    {
      field: 'qty',
      headerName: 'Quantity',
      width: 90,
    },
    {
      field: 'content',
      headerName: 'Content',
      width: 90,
    },

    {
      field: 'weight',
      headerName: 'weight',
      width: 90,
    },
    {
      field: 'service',
      headerName: 'Service Type',
      width: 90,
    },
    {
      field: 'date',
      headerName: 'date',
      width: 90,
    },
    {
      field: 'location',
      headerName: 'Location',
      width: 90,
    },
    {
      field: 'activities',
      headerName: 'Activities',
      width: 90,
    },
    {
      field: 'details',
      headerName: 'Details',
      width: 90,
    },
  ];


  const column = [
    {
      field: "action",
      headerName: "Action",
      width: 90,
      renderCell: (params) => (
        <div className='flex gap-3'>
          <div className=' border-r-8 text-2xl '>
            <Link to={`/shipment/${params.row.trackingNumber}`}>
              <FaEye  />
            </Link>
          </div>
          <Link to={`/shipment/${params.row.trackingNumber}/edit`} className="text-2xl text-teal-800">
            <FaPencilAlt  />
          </Link>

        </div>
      ),
    },
  ];
  const handleDel = [
    {
      field: "delete",
      headerName: "Delete",
      width: 90,
      renderCell: (params) => (
        <div className='flex gap-3'>
          <button  className='text-2xl text-red-500' onClick={() => handleDelete(params.row.trackingNumber)}>

            <FaTrash  />
          </button>

        </div>
      ),
    },
  ];

  const mutation = useMutation({
    mutationFn: (trackingNumber) => {
      return axios.delete(`http://localhost:4000/api/tracking/${trackingNumber}`);
    },
    onMutate: (variable) => {
      // You can perform optimistic updates here if needed
      const trackingNumber = variable;
      return trackingNumber;
    },
    onSuccess: () => {
      queryClient.invalidateQueries(['repoData']);
    },
  });

  const handleDelete = (trackingNumber) => {
    mutation.mutate(trackingNumber);
  };

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={[...columns, ...column, ...handleDel]}
        getRowId={(row) => row._id}
        initialState={{
          pagination: {
            paginationModel: {
              page: 0, pageSize: 10
            },
          },
        }}
        slots={{ toolbar: GridToolbar }}
        slotProps={{
          toolbar: {
            showQuickFilter: true,
            quickFilterProps: { debounceMs: 500 }

          }
        }}

        pageSizeOptions={[5, 10]}
        checkboxSelection
        disableColumnFilter
        disableColumnSelector
        disableDensitySelector
        pagination
        rowsPerPageOptions={[5, 10, 25]}
      />


    </div>
  )
}

export default TrackTable