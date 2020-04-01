import React, { useState } from 'react';
import ResourceHeader from './ResourceHeader'
import ResourceTable from './RecourceTable'

export default function ResourcePart({setExport}) {
    const[selectResource, setSelectResource] = useState('');

    return (
        <div>
            <ResourceHeader
                setSelectResource = {setSelectResource}
                setExport = {setExport}
            />
            <ResourceTable />
         </div>
    );
    
}

