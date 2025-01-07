import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleDarkMode } from "../redux/features/drack/drackSlice";


const Preferences = () => {
    const dispatch = useDispatch()
    const darkMode = useSelector((state) => state.toggleColor.mode);
    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
    }, [darkMode])


    const toggle = () => {
        dispatch(toggleDarkMode())
    }

    return (
        <div className='flex mt-12 flex-col items-center space-y-4'>
            <h2 className='text-xl font-bold'>Preferences</h2>
            <p>Dark Mode: {darkMode ? "Disabled" : "Enabled"} </p>
            <button onClick={toggle} className='px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600'>Toogle Dark Mode</button>
        </div>
    )
}

export default Preferences;