import React from 'react';
import { AiOutlineTable as TableIcon } from 'react-icons/ai';
import insertTable from '../helpers/insertTable';
import { ToolbarTable } from '../toolbar-custom/ToolbarTable';

export const ToolbarButtonsTable = () => (
    <>
        <ToolbarTable
            icon={<TableIcon />}
            transform={insertTable}
            tooltip={{
                content: 'Add table',
                arrow: true,
                delay: 0,
                duration: [200, 0],
                hideOnClick: true,
                offset: [0, 17],
                placement: 'bottom',
            }}
        />
    </>
);
