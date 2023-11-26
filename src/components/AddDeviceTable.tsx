import React, {useState} from "react";

const AddDeviceTable: React.FC = () => {
const [deviceName, setDeviceName] = useState('');
    return <>
        <div>
            <table className="table table-dark table-striped table-bordered table-hover">
                <thead>
                <tr>
                    <th className="px-0">Название устройства</th>
                    <th className="px-0">Название компонента</th>
                    <th className="px-0">Количество компонентов</th>
                </tr>
                </thead>
                <tbody className="text-black">
                {/*{intermediateComponents.map((component) => (*/}
                {/*    <tr key={`${component.category}-${component.comp_name}`}>*/}
                {/*        <td>{component.category}</td>*/}
                {/*        <td>{component.comp_name}</td>*/}
                {/*        <td>{component.amount}</td>*/}
                {/*    </tr>*/}
                {/*))}*/}
                </tbody>
            </table>
            <button type="button" className="btn btn-primary" /*onClick={handleSentToDatabase}*/>
                Sent to database
            </button>
        </div>

    </>;
};
export default AddDeviceTable;