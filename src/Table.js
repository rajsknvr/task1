import { useLocation } from "react-router";

function Table() {
    const { state } = useLocation();
    const { data, column } = state
    console.log(data, column)
    return <>
        <div>hi this is table</div>
    </>
}
export default Table;