import { useState, useEffect } from "react";

/**
 * 
 * @param {*} value 검색한 값
 * @param {*} delay 지연 시간
 * @returns 
 */
export const useDebounce = (value,delay) => {
    const [debounceValue, setDebounceValue] = useState(value);
    
    useEffect(() => {
        const handler = setTimeout(() => {
            setDebounceValue(value);
        },delay)

        return() =>{
            clearTimeout(handler);
        }
    },[value,delay]);

    return debounceValue;
}