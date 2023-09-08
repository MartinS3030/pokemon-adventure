import {useEffect} from 'react'

export default function useOptionSelection(maxOptions, option, setOption) {
    useEffect(() => {
        const selectOption = (event) => {
            if (event.key === "ArrowLeft" && option - 1 !== 0) {
                setOption(option - 1)
            }
            if (event.key === "ArrowRight" && option + 1 <= maxOptions) {
                setOption(option + 1)
            }
        }
    
        window.addEventListener("keydown", selectOption);
    
        return () => {
            window.removeEventListener("keydown", selectOption)
        }
      }, [option])
}
