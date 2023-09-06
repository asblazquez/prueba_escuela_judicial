import { useMemo } from 'react';
import { MaterialReactTable } from 'material-react-table';
import { Container, Box, Button } from '@mui/material';
import { Download } from '@mui/icons-material';
import * as XLSX from 'xlsx'

const data = [
  {
    name: {
      firstName: 'John',
      lastName: 'Doe',
    },
    address: '261 Erdman Ford',
    city: 'East Daphne',
    state: 'Kentucky',
  },
  {
    name: {
      firstName: 'Jane',
      lastName: 'Doe',
    },
    address: '769 Dominic Grove',
    city: 'Columbus',
    state: 'Ohio',
  },
  {
    name: {
      firstName: 'Joe',
      lastName: 'Doe',
    },
    address: '566 Brakus Inlet',
    city: 'South Linda',
    state: 'West Virginia',
  },
  {
    name: {
      firstName: 'Kevin',
      lastName: 'Vandy',
    },
    address: '722 Emie Stream',
    city: 'Lincoln',
    state: 'Nebraska',
  },
  {
    name: {
      firstName: 'Joshua',
      lastName: 'Rolluffs',
    },
    address: '32188 Larkin Turnpike',
    city: 'Charleston',
    state: 'South Carolina',
  },
];

export function PruebaTabla() {
  const columns = useMemo(
    () => [
      {
        accessorKey: 'name.firstName',
        header: 'First Name',
        size: 150,
      },
      {
        accessorKey: 'name.lastName',
        header: 'Last Name',
        size: 150,
      },
      {
        accessorKey: 'address',
        header: 'Address',
        size: 200,
      },
      {
        accessorKey: 'city',
        header: 'City',
        size: 150,
      },
      {
        accessorKey: 'state',
        header: 'State',
        size: 150,
      },
    ],
    [],
  );

  const handleExportData = (data) => {
    console.log(data)
    const flattenedData = data.map((item) => ({
        'First Name': item.original.name.firstName,
        'Last Name': item.original.name.lastName,
        Address: item.original.address,
        City: item.original.city,
        State: item.original.state,
    }));
    const ws = XLSX.utils.json_to_sheet(flattenedData);

    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

    XLSX.writeFile(wb, 'exported_data.xlsx');
  }

  return (
    <Container maxWidth="xl" sx={{ mt: 3 }}>
        <MaterialReactTable columns={columns} data={data}
            renderTopToolbarCustomActions={({ table }) =>(
                <Box
                    sx={{ display: 'flex', gap: '1rem', p: '0.5rem', flexWrap: 'wrap' }}>
                    <Button
                        color="primary"
                        onClick={() => {handleExportData(table.getRowModel().rows)}}
                        startIcon={<Download />}
                        variant="contained">
                        Export All Data
                    </Button>
                </Box>
            )}
         />
    </Container>
    )
    
}
